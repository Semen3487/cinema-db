const db = require('../db');

class ActorController {

  async getAllActors(req, res){
    try {
      const actors = await db.query(`SELECT * FROM actors`);
      res.json(actors.rows);
    } catch (error) {
      console.log(error);
    };   
  };

  async getOneActor(req, res){
    try {
      const id = req.params.id;
      const oneActor = await db.query(
          `SELECT * FROM actors WHERE actor_id=$1`, 
          [id]
        );
      res.json(oneActor.rows[0]);
    } catch (error) {
      console.log(error);
    }; 
  };

  async createActor(req, res){
    try {
      const {full_name, nationality_id, birth_year, age} = req.body;
      const newActor = await db.query(
        `INSERT INTO actors
        (full_name, nationality_id, birth_year, age)
        VALUES ($1, $2, $3, $4)
        RETURNING *`, 
        [full_name, nationality_id, birth_year, age]
      );
      res.json(newActor.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };
  
  async updateActor(req, res){
    try {
      const {full_name, nationality_id, birth_year, age, actor_id} = req.body;
      const updateActor = await db.query(
        `UPDATE movies 
        SET full_name = $1, nationality_id = $2,
        birth_year = $3, age = $4
        WHERE actor_id = $5
        RETURNING *`,
        [full_name, nationality_id, birth_year, age, actor_id]
      );
      res.json(updateActor.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };

  async deleteActor(req, res){
    try {
      const id = req.params.id;
      const deleteActor = await db.query(
        `DELETE FROM actors WHERE actor_id = $1
        RETURNING *`,
        [id]
      );
      res.json(deleteActor.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };

};


module.exports = new ActorController();