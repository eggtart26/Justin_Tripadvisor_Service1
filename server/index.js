const app = require('../src/app');
const http = require('http').Server(app);
const models = require('./models');
const seed = require('./seeddatabase');

const sequelizeOptions = { force: process.env.FORCE_TRUNCATE || false };

// If force is true, Sequelize will drop all tables and re-add whatever is in models
// when the server starts.  This option should be put to 'false' in production!

app.set('sqlport', process.env.SQLPORT || 5432);
app.listen(3000, () => {
  console.log('Express server listening on port 3000 woop.');
});

models.sequelize.sync(sequelizeOptions).then(() => {
  const server = http.listen(app.get('sqlport'), () => {
    console.log(`SQL server on ${server.address().port}`);

    models.Tour.count()
      .then((results) => {
        if (results <= 100) {
          seed(models);
        } else {
          console.log('\x1b[32m%s\x1b[0m', `${results} rows found in Tours table: database seed script will not run.`);
        }
      })
      .catch((error) => console.error(error));
  });
})
  .catch((error) => {
    console.error(error);
  });
