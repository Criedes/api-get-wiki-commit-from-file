var fs = require('fs');
var cors = require('cors');
var app = require('express')();

app.use(cors());

fs.readFile('wiki_log.txt', function (err, buf) {
    let temp;
    let wikiObj;
    let lst = [];
    let count = 0;
    temp = buf.toString().split('\n');
    temp.forEach(mem => {
        mem.replace(/([ ])/g, '').split('\t').forEach(
            res => {
                if (res != ' ' && res != [])
                    lst.push(res)

            }
        )
    })
    wikiObj = {
        kit: parseInt(lst[0]),
        bank: parseInt(lst[2]),
        tar: parseInt(lst[4]),
        pound: parseInt(lst[6]),
        tom: parseInt(lst[8]),
    }
    app.get('/', function (req, res) {
        res.json(JSON.stringify({ "Hello": "World" }));
    });
    app.get('/stat', function (req, res) {
        res.json(wikiObj);
    });
});
const server = app.listen(8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`);
});