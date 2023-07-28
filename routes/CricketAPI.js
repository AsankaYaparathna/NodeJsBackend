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
    if (originURL === process.env.OriginUrl1 || originURL === process.env.OriginUrl2) {
      var options = {
        method: 'GET',
        url: `${process.env.URL}/v5/cricket/${process.env.project_key}/${req.params.endpoint}/`,
        headers: {
          'rs-token': req.body.token
        }
      }
      console.log(options);
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

app.get('/featured-matches-2', async (req, res) => {
  try {
    const originURL = req.headers.referer;
    //if (originURL === process.env.OriginUrl1 || originURL !== process.env.OriginUrl2) {

    var tokenNew = '';
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
      tokenNew = data.data.token;

      var optionsGetData = {
        method: 'GET',
        url: `${process.env.URL}/v5/cricket/${process.env.project_key}/featured-matches-2/`,
        headers: {
          'rs-token': tokenNew
        }
      }

      request(optionsGetData, function (error, response) {
        if (error) throw new Error(error)
        var data = JSON.parse(response.body);
        res.status(200).json(data);
      })
    })



    // }
    // else {
    //   res.status(500).json({
    //     status: false,
    //     data: originURL,
    //     massage: originURL + " URL Not accepts"
    //   });
    //}
  } catch (error) {
    const response = { status: false, message: 'Failed to fetch data', data: error.message };
    res.status(500).json(response);
  }
});

app.get('/match-over-summary', async (req, res) => {
  try {
    const originURL = req.headers.referer;
    //if (originURL === process.env.OriginUrl1 || originURL !== process.env.OriginUrl2) {

    var tokenNew = '';
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
      tokenNew = data.data.token;

      var optionsGetData = {
        method: 'GET',
        url: `${process.env.URL}/v5/cricket/${process.env.project_key}/match/${req.body.key}/over-summary/`,
        headers: {
          'rs-token': tokenNew
        }
      }

      request(optionsGetData, function (error, response) {
        if (error) throw new Error(error)
        var data = JSON.parse(response.body);
        res.status(200).json(data);
      })
    })



    // }
    // else {
    //   res.status(500).json({
    //     status: false,
    //     data: originURL,
    //     massage: originURL + " URL Not accepts"
    //   });
    //}
  } catch (error) {
    const response = { status: false, message: 'Failed to fetch data', data: error.message };
    res.status(500).json(response);
  }
});

app.get('/country-list', async (req, res) => {
  try {
    const originURL = req.headers.referer;
    //if (originURL === process.env.OriginUrl1 || originURL !== process.env.OriginUrl2) {

    var tokenNew = '';
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
      tokenNew = data.data.token;

      var optionsGetData = {
        method: 'GET',
        url: `https://api.sports.roanuz.com/v5/cricket/${process.env.project_key}/country/list/`,
        headers: {
          'rs-token': tokenNew
        }
      }

      request(optionsGetData, function (error, response) {
        if (error) throw new Error(error)
        var data = JSON.parse(response.body);
        res.status(200).json(data);
      })
    })



    // }
    // else {
    //   res.status(500).json({
    //     status: false,
    //     data: originURL,
    //     massage: originURL + " URL Not accepts"
    //   });
    //}
  } catch (error) {
    const response = { status: false, message: 'Failed to fetch data', data: error.message };
    res.status(500).json(response);
  }
});

app.get('/featured-tournaments', async (req, res) => {
  try {
    const originURL = req.headers.referer;
    //if (originURL === process.env.OriginUrl1 || originURL !== process.env.OriginUrl2) {

    var tokenNew = '';
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
      tokenNew = data.data.token;

      var optionsGetData = {
        method: 'GET',
        url: `https://api.sports.roanuz.com/v5/cricket/${process.env.project_key}/featured-tournaments/`,
        headers: {
          'rs-token': tokenNew
        }
      }

      request(optionsGetData, function (error, response) {
        if (error) throw new Error(error)
        var data = JSON.parse(response.body);
        res.status(200).json(data);
      })
    })



    // }
    // else {
    //   res.status(500).json({
    //     status: false,
    //     data: originURL,
    //     massage: originURL + " URL Not accepts"
    //   });
    //}
  } catch (error) {
    const response = { status: false, message: 'Failed to fetch data', data: error.message };
    res.status(500).json(response);
  }
});


module.exports = app;