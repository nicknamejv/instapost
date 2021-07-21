// SECTION: External Modules //
const express = require('express');

// SECTION: Internal Modules //


// SECTION: Instance Modules //
const app = express();

// SECTION: Configuration // 
const PORT = 4000; // <--- system level configuration variables 

// SECTION: Middleware //


// SECTION: Routes // 


// SECTION: Sever Bind //
app.listen(PORT, () => {
    console.log(`Instapost is live at port ${PORT} and ready to "borrow" your personal data.`);
});

