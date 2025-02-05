const fs = require('fs');
const main_view = fs.readFileSync('./main.html', 'UTF-8');

const mariadb = require('./database/connect/mariadb.js');



function main(response) {
    console.log('main');

    mariadb.query("SELECT * FROM product", function(err, rows) {
        console.log(rows);
    })

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(main_view);
    response.end();    
}

function redRacket(response){
    fs.readFile('./img/redRacket.png', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })
}

function blueRacket(response){
    fs.readFile('./img/blueRacket.png', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })
}

function blackRacket(response){
    fs.readFile('./img/blackRacket.png', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })
}

function main_css(response){
    fs.readFile('./main.css', function(err, data){
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(data);
        response.end();
    })
}

function order(response, productId){
    response.writeHead(200, {'Content-Type': 'text/html'});

    mariadb.query("INSERT INTO orderlist VALUES(" + productId + ", '" + new Date().toLocaleDateString() + "');", function(err, rows) {
        console.log(rows);}
    )

    response.write('order page');
    response.end();
}


let handle = {};
handle['/'] = main;
handle['/main.css'] = main_css;
handle['/order'] = order;
// image directory
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

exports.handle = handle;

