const db = require('../db');

class DirectorController {

  async getAllDirectors(req, res){
    try {
      const directors = await db.query(`SELECT * FROM directors`);
      res.json(directors.rows);
    } catch (error) {
      console.log(error);
    };   
  };

  async getOneDirector(req, res){
    try {
      const id = req.params.id;
      const oneDirector = await db.query(
          `SELECT * FROM directors WHERE director_id=$1`, 
          [id]
        );
      res.json(oneDirector.rows[0]);
    } catch (error) {
      console.log(error);
    }; 
  };

  async createDirector(req, res){
    try {
      const {full_name, country_id, birth_date, age, photo} = req.body;
      const newDirector = await db.query(
        `INSERT INTO directors
        (full_name, country_id, birth_date, age, photo)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`, 
        [full_name, country_id, birth_date, age, photo]
      );
      res.json(newDirector.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };
  
  async updateDirector(req, res){
    try {
      const {full_name, country_id, birth_date, age, photo, director_id} = req.body;
      const updateDirector = await db.query(
        `UPDATE directors 
        SET full_name = $1, country_id = $2, birth_date = $3, 
            age = $4, photo = $5
        WHERE director_id = $6
        RETURNING *`,
        [full_name, country_id, birth_date, age, photo, director_id]
      );
      res.json(updateDirector.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };

  async deleteDirector(req, res){
    try {
      const id = req.params.id;
      const deleteDirector = await db.query(
        `DELETE FROM directors WHERE director_id = $1
        RETURNING *`,
        [id]
      );
      res.json(deleteDirector.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };

};


module.exports = new DirectorController();