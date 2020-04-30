const app = require('../src/app');
const http = require('http').Server(app);
const models = require('./models');

const sequelizeOptions = {

};

// If force_truncate is true, Sequelize will be instructed to drop all tables and
// re-add them when the server starts.

app.set('sqlport', process.env.SQLPORT || 5432 );

// if (process.env.FORCE_TRUNCATE === 'true') {
//   sequelizeOptions.force = true;
// } else {
//   sequelizeOptions.force = false;
// }

app.listen(3000, () => {
  console.log('Express server listening on port 3000.');
});

models.sequelize.sync(sequelizeOptions).then(() => {
  const server = http.listen(app.get('sqlport'), () => {
    console.log(`SQL server on ${server.address().port}`);
  });
})
  .catch((error) => {
    console.error(error);
  });
