// SECTION: External Modules //
const express = require('express');

// SECTION: Internal Modules //


// SECTION: Instance Modules //
const app = express();

// SECTION: Configuration // 
const PORT = 4000; // <--- system level configuration variables 

// SECTION: Middleware //


// SECTION: Routes //

app.get('/', (req, res) => {
    res.redirect('/posts');
});


// NOTE: Index GET / - Presentational
app.get('/posts', (req, res) => {
    res.send('Post index.');
}); 

// NOTE: New  GET /posts - Presentational FORM 

// NOTE: Create POST /posts - Functional

// NOTE: Show GET /posts/:id - Presentational

// NOTE: Edit GET /posts/:id/edit - Presentational FORM

// NOTE: Update PUT /posts/:id - Functional

// NOTE: Destroy DELETE /posts/:id - Functional 


// SECTION: Sever Bind //
app.listen(PORT, () => {
    console.log(`Instapost is live at port ${PORT} and ready to "borrow" your personal data.`);
});

