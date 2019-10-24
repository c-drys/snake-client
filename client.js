const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', (connect) => {
    console.log('Successfully Connected');

    conn.write("Name: CD1");
    
    // conn.write("Move: up");
    // setTimeout(()=>{
    //   conn.write;
    // }, 50);

    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");

  });


  return conn;
};

module.exports = {connect};
