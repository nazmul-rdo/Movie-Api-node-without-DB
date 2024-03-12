
require('dotenv').config();
const app = require('./app')

const port = process.env.PORT || 4000;


app.listen(3000, () => {
    console.log(`listening on http://localhost:${port}`);
});