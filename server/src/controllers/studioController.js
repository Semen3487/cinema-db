const db = require('../db');

class StudioController {

  async getAllStudios(req, res){
    try {
      const studios = await db.query(`SELECT * FROM studios`);
      res.json(studios.rows);
    } catch (error) {
      console.log(error);
    };   
  };

  async getOneStudio(req, res){
    try {
      const id = req.params.id;
      const oneStudio = await db.query(
          `SELECT * FROM studios WHERE studio_id=$1`, 
          [id]
        );
      res.json(oneStudio.rows[0]);
    } catch (error) {
      console.log(error);
    }; 
  };

  async createStudio(req, res){
    try {
      const {title, foundation_year, country_id, logo, web_site} = req.body;
      const newStudio = await db.query(
        `INSERT INTO studios
        (title, foundation_year, country_id, logo, web_site)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`, 
        [title, foundation_year, country_id, logo, web_site]
      );
      res.json(newStudio.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };
  
  async updateStudio(req, res){
    try {
      const {title, foundation_year, country_id, logo, web_site, studio_id} = req.body;
      const updateStudio = await db.query(
        `UPDATE studios 
        SET title = $1, foundation_year = $2, country_id = $3, 
            logo = $4, web_site = $5
        WHERE studio_id = $6
        RETURNING *`,
        [title, foundation_year, country_id, logo, web_site, studio_id]
      );
      res.json(updateStudio.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };

  async deleteStudio(req, res){
    try {
      const id = req.params.id;
      const deleteStudio = await db.query(
        `DELETE FROM studios WHERE studio_id = $1
        RETURNING *`,
        [id]
      );
      res.json(deleteStudio.rows[0]);
    } catch (error) {
      console.log(error);
    };
  };

};


module.exports = new StudioController();