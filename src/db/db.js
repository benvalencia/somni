// // const Sequelize = require('sequelize');
// import Sequelize from 'sequelize';
// import Client from 'ssh2';
// // const Client = require('ssh2').Client;


// var sshConnected = false;
// var conn = new Client();

// const sequelize = new Sequelize(
//     'somni_test',
//     'hermes',
//     'ce0197de-63760', {
//     host: '192.168.0.20',
//     dialect:  'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//       }
//   });


// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });



// conn.on('ready', function() {
//   sshConnected = true;

//   var sequelize2 = sequelize
  
//   sequelize.query('SELECT * FROM `orders` LIMIT 1',
//     {
//       type: sequelize.QueryTypes.SELECT
//      }).then(function (results) {
//        console.log(results);
//    });
// }).on('close', function() {
//   sshConnected = false;
// }).connect({
//   // ...
// });

// net.createServer(function(sock) {
//   sock.on('error', function() {});
//   if (!sshConnected) return sock.end();
//   conn.forwardOut(
//     '127.0.0.1',
//     sock.remotePort,
//     '127.0.0.1',
//     3306,
//     function (err, stream) {
//       if (err) return sock.end();
//       stream.pipe(sock).pipe(stream);
//     });
// }).listen(3306);