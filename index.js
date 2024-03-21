const express = require('express');
const path = require('path');
const app = express();
 
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');
 
const courses = [{ id: 1, name: 'Html' }  
    , { id: 2, name: 'Css' }
    , { id: 3, name: 'JavaScript' }
    , { id: 4, name: 'Node' }    
    , { id: 5, name: 'Express' }
];
 
app.get('/courses/', (req, res) => {
    res.render('index', { courses: courses, nb:5 });
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
