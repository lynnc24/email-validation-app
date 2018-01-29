const axios = require('axios');

exports.validateEmail = (req, res) => {
  const email = req.body.email;
  const key = 'ba1454fb65fc818fc341f7bee827a408';

  axios.get(`https://apilayer.net/api/check?access_key=${key}&email=${email}&format=1`)
    .then((validationRes) => {
      res.status(200)
        .json({
          status: 'success',
          validationResult: validationRes.data
        });
    })
    .catch((err) => {
      res.status(500)
        .json({
          status: 'error',
          validationResult: validationRes.data.error
        });
    });

  /*
  * Sample response data for local development.
  * Limit number of unnecessary calls.  Mailboxlayer has a 250 API request limit.
   */

  // res.status(200)
  //   .json({
  //     validationResult: {
  //       catch_all: null,
  //       did_you_mean: '',
  //       disposable: false,
  //       domain: 'gmail.com',
  //       email: 'lynnc24@gmail.com',
  //       format_valid: true,
  //       free: true,
  //       mx_found: true,
  //       role: false,
  //       score: 0.8,
  //       smtp_check: true,
  //       user: 'lynnc24'
  //     }
  //   })
};
