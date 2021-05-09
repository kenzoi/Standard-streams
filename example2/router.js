'use strict';

const fs = require('fs');


function router (req, res) {
  if (req.url == '/') {
    res.statusCode = 404;
  } else if (req.url == '/req') {
      console.log(req);
      res.write('req object printed to stdout');
  } else if (req.url == '/res') {
      console.log(res);
      res.write('res object printed to stdout');
  } else if (req.url == '/error') {
      for (let i = 0; i < 1000; i++) {
	  console.error('Mr. Robot');
      }
      res.write('Printed error messages to stderr');
  }
    res.end();
}

module.exports = router;
