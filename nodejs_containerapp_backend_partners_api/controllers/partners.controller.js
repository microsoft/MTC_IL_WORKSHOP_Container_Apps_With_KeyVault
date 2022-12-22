const { querys} = require('../database/querys');
const { getConnection } = require('../database/connection');
const sql = require('mssql');

// Get all workers
exports.getPartners = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllPartners);
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Create new worker
exports.createNewPartner = async (req, res) => {
  const { email, name, project } = req.body;
  console.log(email, name, project);

  // validation
  if (email == null || name == null || project == null) {
    return res.status(400).json({
      message: "Bad Request. Please fill all the fields",
    });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("name", sql.VarChar, name)
      .input("project", sql.Int, project)
      .query(querys.addNewPartner);

    res.status(200).json({ email, name, project });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Get Worker By Id
exports.getPartnerById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getPartnerById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Update Worker By Id
exports.updatePartnerById = async (req, res) => {
    const { name, age, project } = req.body;

  // validating
  if (name == null || age == null || project == null) {
    return res.status(400).json({
      message: "Bad Request. Please fill all the fields",
    });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("name", sql.VarChar, name)
      .input("project", sql.Int, age)
      .input("id", req.params.id)
      .query(querys.updatePartnerById);
    res.json({ email, name, project });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


// Delete Worker by id
exports.deletePartnerById = async (req, res) => {
    try {
      const pool = await getConnection();
  
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query(querys.deletePartnerById);
  
      if (result.rowsAffected[0] === 0) return res.sendStatus(404);
  
      return res.sendStatus(204);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

