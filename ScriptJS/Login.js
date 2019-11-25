document.getElementById("btn").addEventListener("click", () => {
  
    var x = document.getElementById("user").value;
    var y = document.getElementById("pass").value;
    localStorage.setItem("first",x);
    localStorage.setItem("second",y);
    var MySql = require("mysql");

    var Connection = MySql.createConnection({
      host: "91.88.214.49",
      user: x,
      password: y,
      database: x

    })

    Connection.connect((err) => {
      if(err){
        return console.log(err.stack);
        
      }

      console.log("connection successfully established")
      const {remote, win} = require('electron')
      remote.getCurrentWindow().loadFile('main.html');

    })  

    Connection.end(() => {
      console.log("connection successfully close")

    });

  }, false);