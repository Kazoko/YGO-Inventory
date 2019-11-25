document.getElementById("btnAcc").addEventListener("click", () => {
    var x = localStorage.getItem("first")
    var y = localStorage.getItem("second")
    
    const electron = require('electron')
    const path = require('path')
    const remote = require('electron').remote;

    var n = document.getElementById("name").value;
    var d = document.getElementById("desc").value;
    var ds = document.getElementById("sdesc").value;
    var r = document.getElementById("ref").value;
    var q = document.getElementById("qu").value;


    var t = document.getElementById("Type").value;


    window.$ = window.JQuery = require ('Jquery')

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
        var sql = "INSERT INTO CardList(`CardName`,`BDesc`,`SDesc`,`Ref`,`Qu`,`Type`) VALUES ?";
        var values = [
          [n, d, ds, r, q, t]
        ];
        Connection.query(sql, [values], function (err, result) {
          if (err) throw err;
          console.log("Number of records inserted: " + result.affectedRows);
          var AMDCard = remote.getCurrentWindow();
          AMDCard.close();

        });
     });



})