const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const factorial = (n) => {
    if(n < 1) return 1;
    return n * factorial(n - 1);
}

app.get('/factorial', (req, res) =>{
    const n = req.query.number;
    res.redirect(`factorial/${n}`);
});

app.get('/factorial/:number', (req, res) => {
    const n = req.params.number;
    res.send(`${factorial(n)}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));