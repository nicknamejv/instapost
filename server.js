// SECTION: External Modules //
const { response } = require('express');
const express = require('express');

// SECTION: Internal Modules //


// SECTION: Instance Modules //
const app = express();

// SECTION: Configuration // 
const PORT = 4000; // <--- system level configuration variables 

// SECTION: Middleware //

// Access body data
app.use(express.urlencoded ({extended: true}));


// SECTION: Routes //

app.get('/', (req, res) => {
    res.redirect('/posts');
});


// NOTE: Index GET / - Presentational
app.get('/posts', (req, res) => {
    res.send('Post index.');
}); 


// NOTE: New  GET /posts - Presentational FORM 
app.get('/posts/new', (req, res) => {
    res.send('Post create page.');
}); 


// NOTE: Create POST /posts - Functional
app.post(`/posts`, (req, res) => {
    // echo
    res.send({
        message: "Hit the create route",
        body: req.body,
    });
});


// NOTE: Show GET /posts/:id - Presentational
app.get('/posts/:id', (req, res) => {
    // echo param.id
    res.send(`Post show page id: ${req.params.id}`);
}); 


// NOTE: Edit GET /posts/:id/edit - Presentational FORM
app.get('/posts/:id/edit', (req, res) => {
    // echo param.id
    res.send(`Post edit page id: ${req.params.id}`);
}); 


// NOTE: Update PUT /posts/:id - Functional



// NOTE: Destroy DELETE /posts/:id - Functional 






// SECTION: Sever Bind //
app.listen(PORT, () => {
    console.log(`Instapost is live at port ${PORT} and ready to "borrow" your personal data.`);
});