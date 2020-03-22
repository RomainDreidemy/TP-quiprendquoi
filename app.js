const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const axios = require('axios');
const watchify = require('watchify');
const moment = require('moment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('pwa'));

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
                let dateDegueu = new Date(data.date);
                let annee = dateDegueu.getFullYear();
                let month = dateDegueu.getMonth() + 1;
                let day = dateDegueu.getDate();
                if(month.toString().length == 1){month = `0${month}`}
                if(day.toString().length == 1){day = `0${month}`}
                let date = `${annee}${month}${day}`;
                res.render('party', {
                    party: data,
                    date: date,
                    title: data.name,
                    url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`,
                    postRoute: `/party/${data._id}/element`,
                    deleteElementRoute: `/party/${data._id}/element/delete`
                })
        })
        .catch((err) => console.log(err));
});

app.post('/party/:id/element', (req, res) => {
    axios
        .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
        .then(({data}) => {
            // if (window.Notification && Notification.permission === "granted") {
            //     alert("Début notification");
            //     let n = new Notification("Qui prend quoi ?", {
            //         body: `${data.user} à ajouté "${data.name} à un événement"`
            //     });
            //     n.onclick = function () {
            //         window.open(`localhost:3000/party/${req.params.id}`, '_blank');
            //     };
            //     alert("Fin notification");
            // }

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