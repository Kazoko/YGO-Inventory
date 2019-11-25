var name = localStorage.getItem("name1");
var type = localStorage.getItem("type1");
var sdesc = localStorage.getItem("sdesc1");
var ref = localStorage.getItem("ref1");
var qu = localStorage.getItem("qu1");

document.getElementById('name').value = name;
document.getElementById('Type').value = type;
document.getElementById('sdesc').value = sdesc;
document.getElementById('ref').value = ref;
document.getElementById('qu').value = qu;










document.getElementById("btnMdd").addEventListener("click", () => {

    var w1 = document.getElementById('name').value;
    var w2 = document.getElementById('Type').value;
    var w3 = document.getElementById('sdesc').value;
    var w4 = document.getElementById('ref').value;
    var w5 = document.getElementById('qu').value;

    var x = localStorage.getItem("first")
    var y = localStorage.getItem("second")
    
    const electron = require('electron')
    const path = require('path')
    const remote = require('electron').remote;
  
    var MySql = require("mysql");
  
    var Connection = MySql.createConnection({
        host: "91.88.214.49",
        user: x,
        password: y,
        database: x
  
    })
  
  
    Connection.connect(function(err) {
  
        if (err) throw err;
        console.log("Connected!");
        var sql = "DELETE FROM `CardList` WHERE Ref = ?";
        var values = [
          [ref, name]
        ];
        Connection.query(sql, [values], function (err, result) {
          if (err) throw err;
          console.log("Number of records inserted: " + result);

          var sql = "INSERT INTO CardList(`CardName`,`BDesc`,`SDesc`,`Ref`,`Qu`,`Type`) VALUES ?";
          var values = [
            [w1, w3, w3, w4, w5, w2]
          ];
          Connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
            var MDCard = remote.getCurrentWindow();
            MDCard.close();
  
          })
        });
     });





})











document.getElementById("btnDtt").addEventListener("click", () => {
    console.log(ref);
  
    var x = localStorage.getItem("first")
    var y = localStorage.getItem("second")
    
    const electron = require('electron')
    const path = require('path')
    const remote = require('electron').remote;
  
    var MySql = require("mysql");
  
    var Connection = MySql.createConnection({
        host: "91.88.214.49",
        user: x,
        password: y,
        database: x
  
    })
  
  
    Connection.connect(function(err) {
  
        if (err) throw err;
        console.log("Connected!");
        var sql = "DELETE FROM `CardList` WHERE (Ref = ?, CardName = ?)";
        var values = [
          [ref]
        ];
        Connection.query(sql, [values], function (err, result) {
          if (err) throw err;
          console.log("Number of records inserted: " + result); 
          var MDCard = remote.getCurrentWindow();
          MDCard.close();
        });
     });
















})