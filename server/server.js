const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser');
const cors = require('cors')
const data = require('./data');
const PORT = 9000;

app.use(cors());

const jsonParser = bodyParser.json()
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'x',
});

con.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
  let match;
  con.query('SHOW DATABASES', function (err, results) {
    if (err) throw err;
    match = results.find((result) => result.Database === 'agrovir')
    if (match) {
      con.query('DROP DATABASE agrovir', function (err, result) {
        if (err) throw err;
        console.log('Database dropped');
      });
    }
    con.query('CREATE DATABASE agrovir', function (err, result) {
      if (err) throw err;
      console.log('Database created');
    });
    con.query('USE agrovir', function (err, result) {
      if (err) throw err;
      console.log('Database selected');
    });
    const createPartnersTable = `
      create table if not exists partners ( id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(256) NOT NULL,business_form INT,  tax_number VARCHAR(128),
      reg_number VARCHAR(128), city INT  NOT NULL, address VARCHAR(256), phone VARCHAR(128),
      bank_account_no VARCHAR(128), note VARCHAR(1024))`;
    con.query(createPartnersTable, function (err, result) {
      if (err) throw err;
      console.log('Partners table created');
    });
    data.data.map((data) => {
      const query = `INSERT INTO partners (name, business_form, tax_number,
        reg_number, city, address, phone, bank_account_no, note) VALUES ('`
        + data.name + `', '`
        + data.businessForm + `', '`
        + data.taxNumber + `', '`
        + data.regNumber + `', '`
        + data.city + `', '`
        + data.address + `', '`
        + data.phone + `', '`
        + data.bankAccountNo + `', '`
        + data.note + `')`;
      console.log(query)
      con.query(query, function (err, result) {
        if (err) throw err;
        console.log('Company inserted');
      });
    });
    const createBusinessFormsTable = `
    create table if not exists business_forms ( id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL)`;
    con.query(createBusinessFormsTable, function (err, result) {
      if (err) throw err;
      console.log('Business Forms table created');
    });
    data.businessForms.map((data) => {
      const query = `INSERT INTO business_forms (name) VALUES ('` + data.name + `')`;
      console.log(query)
      con.query(query, function (err, result) {
        if (err) throw err;
        console.log('Business form inserted');
      });
    });
    const createCitiesTable = `
    create table if not exists cities ( id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(256) NOT NULL)`;
    con.query(createCitiesTable, function (err, result) {
      if (err) throw err;
      console.log('Cites Forms table created');
    });
    data.cities.map((data) => {
      const query = `INSERT INTO cities (name) VALUES ('` + data.name + `')`;
      console.log(query)
      con.query(query, function (err, result) {
        if (err) throw err;
        console.log('City inserted');
      });
    });
  });
});

// app.get('/partners', (req, res) => {
//   res.send(paginatedData(req.query.page));
// });

app.get('/partners', (req, res) => {
  let sql = 'SELECT * from partners;';
  con.query(sql, (err, rows) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

app.get('/businessForms', (req, res) => {
  let sql = 'SELECT * from business_forms;';
  con.query(sql, (err, rows) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

app.get('/cities', (req, res) => {
  let sql = 'SELECT * from cities;';
  con.query(sql, (err, rows) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

const paginatedData = (pageNumber = 1) => (data.data.filter((e, i) => {
  return i >= (pageNumber - 1) * 10 && i < pageNumber * 10;
})
);

app.delete('/partners', (req, res) => {
  let sql = `DELETE from partners WHERE id='${req.query.id}'`;
  con.query(sql, (err, rows) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});

app.post('/partners', jsonParser, (req, res) => {
  const {
    name, businessForm, taxNumber, regNumber, city, address, phone, bankAccountNo, note
  } = req.body;
  console.log(req.body);
  if (
    name === undefined || name === '' ||
    city === undefined || city === ''
  ) {
    res.status(400).json({
      message: 'Name and city are required.',
    });
    return;
  }
  const sql = `
  INSERT INTO partners (name, business_form, tax_number, reg_number, city, address, phone, bank_account_no, note)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
`;
  con.query(sql, [name, businessForm, taxNumber, regNumber, city, address, phone, bankAccountNo, note], (err, result) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).json({
        message: 'An error occured. Please try again.',
      });
      return;
    }

    res.json({
      message: 'New partner successfully created.',
      insertedId: result.insertId,
    });
  });
});

app.put('/partners', jsonParser, (req, res) => {
  const {
    id, name, businessForm, taxNumber, regNumber, city, address, phone, bankAccountNo, note
  } = req.body;
  console.log(req.body);
  if (
    name === undefined || name === '' ||
    city === undefined || city === ''
  ) {
    res.status(400).json({
      message: 'Name and city are required.',
    });
    return;
  }
  const sql = `
  UPDATE partners SET
  name='${name}',
  business_form='${businessForm}',
  tax_number='${taxNumber}',
  reg_number='${regNumber}',
  city='${city}',
  address='${address}',
  phone='${phone}',
  bank_account_no='${bankAccountNo}',
  note='${note}'
  WHERE id='${id}' 
  `;
  con.query(sql, (err, result) => {
    if (err) {
      console.log(err); // eslint-disable-line
      res.status(500).json({
        message: 'An error occured. Please try again.',
      });
      return;
    }

    res.json({
      message: 'Partner successfully modified.',
      insertedId: result.insertId,
    });
  });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
