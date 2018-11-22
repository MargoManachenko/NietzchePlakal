const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/api/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    let smtpTrans, mailOps;

    smtpTrans = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: 'r.manachenko@gmail.com',
            clientId: '459609289743-ki5av5jjbkanrk5tdbn0bt3qrb4vqdkd.apps.googleusercontent.com',
            clientSecret: 'tAzRo9fdnem0OYq9l-cyjF6A',
            refreshToken: '1/PBrXrlu60220iWUuYNchkBGpCLWcTSimXFt0drSySVc',
            accessToken: 'ya29.GltBBlXlDCWEKij-mE3Bzs8A89MfY6_fmlI8oH2rKWNyJJ-PMMhpkWnsTP6sxbuVVsf1I436VkBEwI_CwzbmY5JgK3XP2dGb--tL_I2qDEdfUjRElbr-Imn9brqW'
        }
    });

    mailOps = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: 'r.manachenko@gmail.com',
        subject: 'Message from NeitszhePLakal website form',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };

    smtpTrans.sendMail(mailOps, function (error) {
        if (error) {
            res.send({
                message: 'Internal server error. Try later.',
                success: false
            });
        }
        else {
            res.send({
                message: 'Message has been sent.',
                success: true
            });
        }
    })
});


app.get('/api/hello', (req, res) => {
    res.send({express: 'Hello From Express'});
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

app.listen(port, () => console.log(`Listening on port ${port}`));