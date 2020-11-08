import express from 'express';
import errorHandler from './Moduls/core/errorHandler';
import logger from './Moduls/core/logger';
import parseResponse from './Moduls/core/bodyParser';
import cors from './Moduls/core/cors';
import routes from './Moduls/core/routes';

const app = express();
const PORT = 5000;

logger(app);
parseResponse(app);
cors(app);
routes(app);
// app.get('/', home);
// app.post('/info', info);

errorHandler(app);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
