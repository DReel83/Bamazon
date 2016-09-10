var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "delta194",
	database: "bamazondb"
});

connection.connect(function(err) {
    if (err) throw err;
    runBamazon();
})

var runBamazon = function() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "Welcome to Bamazon!",
        choices: ["Make a Purchase", "Return an Item"]
    }).then(function(answer) {
        switch(answer.action) {
            case 'Make a Purchase':
                purchaseItem();
            break;
            
            case 'Return an Item':
                returnItem();
            break;
        }
    })
};

function puchaseItem(){
	connection.connect(function(err){
		if (err) throw err;
		console.log("connected as id: " + connection.threadId);
	});

connection.query("SELECT * FROM bamazondb",
	function(err, res){
		if (err) throw err;
		console.log(res);
	});
}