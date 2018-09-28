const cluster = require('cluster');

if (cluster.isMaster) {
  console.log('isMaster : ', cluster.isMaster);
  cluster.fork()
} else {
  console.log('isMaster : ', cluster.isMaster);
  const express = require('express');
  const app = express();

  function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }

  app.get('/', (req, res) => {
    doWork(5000);
    res.send('Hi there!l');
  });

  app.listen(3000);
}
