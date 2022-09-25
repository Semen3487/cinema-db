const db = require('../dddb');

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
      const {full_name, country_id, birth_date, age, photo} = req.body;
      const newActor = await db.query(
        `INSERT INTO actors
        (full_name, country_id, birth_date, age, photo)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`, 
        [full_name, country_id, birth_date, age, photo]
      );
      res.json(newActor.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };
  
  async updateActor(req, res){
    try {
      const {full_name, country_id, birth_date, age, photo, actor_id} = req.body;
      const updateActor = await db.query(
        `UPDATE actors 
        SET full_name = $1, country_id = $2, birth_date = $3, 
            age = $4, photo = $5
        WHERE actor_id = $6
        RETURNING *`,
        [full_name, country_id, birth_date, age, photo, actor_id]
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