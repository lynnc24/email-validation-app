const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

router.post('/validate-email', routes.validateEmail);

app.listen(port, () => console.log(`Listening on port ${port}`));
