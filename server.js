const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

// Handle SPA history mode
app.use(history());

app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 80; // Use the port from environment or default to 80
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
