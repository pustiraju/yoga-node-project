const express = require('express');
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Serve static files (if using CSS, images, etc.)
app.use(express.static(__dirname + '/public'));

// Route
app.get('/', (req, res) => {
  res.render('index'); 
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
