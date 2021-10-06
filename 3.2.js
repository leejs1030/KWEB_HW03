const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// app.get('/board/page', (req, res) =>{
//     const {PAGE} = req.query;
//     res.redirect(``)
// });

app.get('/board/page/:page', (req, res) => {
    const PAGE = req.params.page;
    res.send(`This is page #${PAGE}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));