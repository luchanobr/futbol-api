import app from 'app';
import { NODE_ENV, PORT } from '@config';
import validateEnv from '@utils/validate-env';

validateEnv();

app.listen(PORT, () => {
  console.log(`===================================`);
  console.log(`========= ENV: ${NODE_ENV} ========`);
  console.log(`🚀 App listening on the port ${PORT} 🚀`);
  console.log(`===================================`);
});
