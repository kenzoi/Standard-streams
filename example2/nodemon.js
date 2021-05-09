const nodemon = require('nodemon');
const fs = require('fs');

nodemon({
  script: 'index.js',
  stdout: false 
}).on('readable', function() { 
  this.stdout.pipe(fs.createWriteStream('stdout.log'));
  this.stderr.pipe(fs.createWriteStream('stderr.log'));
});
