const express = require('express');
const MedicineModel = require('../models/medicineModel');
const app = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const EnsureToken = require('../services/EnsureToken');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser())

var request = require('request')

// get Token
app.post('/getToken', async (req, res) => {
  try {
    const originURL = req.headers.referer;
    console.log( "Requesting Url : "+ originURL);
    if (originURL === process.env.OriginUrl1 || originURL === process.env.OriginUrl2) {
      var options = {
        method: 'POST',
        url: `${process.env.URL}/v5/core/${process.env.project_key}/auth/`,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          api_key: `${process.env.api_key}`
        })
      }
      request(options, function (error, response) {
        if (error) throw new Error(error)
        var data = JSON.parse(response.body);
        res.status(200).json(data);
      })
    }
    else {
      res.status(500).json({
        status: false,
        data: originURL,
        massage: originURL + " URL Not accepts"
      });
    }

  } catch (error) {
    const response = { status: false, message: 'Failed to create data', data: error.message };
    res.status(500).json(response);
  }
});

// get Data
app.post('/getData', async (req, res) => {
  try {
    const originURL = req.headers.referer;
    console.log( "Requesting Url : "+ originURL);
    if (originURL === process.env.OriginUrl1 || originURL === process.env.OriginUrl2) {
      var options = {
        method: 'GET',
        url: req.query.key === "0" ? 
        `${process.env.URL}/v5/cricket/${process.env.project_key}/${req.query.endpoint}/`: 
        req.query.keyEndPoint ==="0" ? `${process.env.URL}/v5/cricket/${process.env.project_key}/${req.query.endpoint}/${req.query.key}/` :
        `${process.env.URL}/v5/cricket/${process.env.project_key}/${req.query.endpoint}/${req.query.key}/${req.query.keyEndPoint}/` 
        ,
        headers: {
          'rs-token': req.query.tk
        }
      }
      request(options, function (error, response) {
        if (error) throw new Error(error)
        var data = JSON.parse(response.body);
        res.status(200).json(data);
      })
    }
    else {
      res.status(500).json({
        status: false,
        data: originURL,
        massage: originURL + " URL Not accepts"
      });
    }
  } catch (error) {
    const response = { status: false, message: 'Failed to fetch data', data: error.message };
    res.status(500).json(response);
  }
});


module.exports = app;