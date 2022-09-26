import app from 'app';
import { NODE_ENV, PORT } from '@config';
import validateEnv from '@utils/validate-env';
import { db } from './databases';

validateEnv();

db.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(PORT, () => {
      console.log(`===================================`);
      console.log(`========= ENV: ${NODE_ENV} ========`);
      console.log(`🚀 App listening on the port ${PORT} 🚀`);
      console.log(`===================================`);
    });
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
