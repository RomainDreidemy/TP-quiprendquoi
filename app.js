const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index', {title: 'Home'})
});

app.post('/party', (req, res) => {
    console.log(req.body);
    axios
        .post(`${process.env.API_URL}/party`, req.body)
        .then(({data}) => res.redirect(`/party/${data._id}`))
        .catch((err) => res.send(err));
});

app.get('/party/:id', (req, res) => {
    axios
        .get(`${process.env.API_URL}/party/${req.params.id}`)
        .then(({ data }) => {
                console.log(data);
                res.render('party', {
                    party: data,
                    title: data.name,
                    url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`,
                    postRoute: `/party/${data._id}/element`,
                    deleteElementRoute: `/party/${data._id}/element/delete`
                })
        }

        )
        .catch((err) => console.log(err));
});

app.post('/party/:id/element', (req, res) => {
    console.log(req.body)
    axios
        .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
        .then(({data}) => {
            res.redirect(`/party/${req.params.id}`)
        })
        .catch((err) => res.send(err));
});

app.get('/party/:idParty/element/:idElement/delete', (req, res) => {
    axios
        .delete(`${process.env.API_URL}/party/${req.params.idParty}/items/${req.params.idElement}`)
        .then(({data}) => {
            res.redirect(`/party/${req.params.idParty}`)
        })
        .catch((err) =>  res.send(err));
});

app.listen(port, () => console.log(`Front app listening on port ${port}!`));

app.set('view engine', 'pug');