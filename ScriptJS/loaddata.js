
    var x = localStorage.getItem("first")
    var y = localStorage.getItem("second")
    window.$ = window.JQuery = require ('Jquery')

    //var x = document.getElementById("user").value;
    //var y = document.getElementById("pass").value;
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
      table();
    })

  function table(){

    $query = 'SELECT `CardName`,`SDesc`,`Ref`,`Qu`,`Type` FROM `CardList`';

    Connection.query($query, function (error, results, fields) {
        if(error){
            console.log("An error ocurred performing the query.");
            console.log(error);
            return;
        }
        console.log(results);
        console.log("Query succesfully executed");
        //$('#namex0').text(results.Name);
        $(document).ready(function (){
          var $cards_holder = $('#table')
          var $cards_reload = $('#table tr:gt(1)').remove();
          results.forEach(function (item){
            var $tr = $('<tr></tr>')
            var $cardName = $('<th class="Name" id="Name"></th>').html(item.CardName)
            var $cardType = $('<th class="Type" id="Type"></th>').html(item.Type)
            var $cardSDesc = $('<th class="SDesc" id="SDesc"></th>').html(item.SDesc)
            var $cardRef = $('<th class="Ref" id="Ref"></th>').html(item.Ref)
            var $cardQu = $('<th class="Qu" id="Qu"></th>').html(item.Qu)
            var $cardbutton = $('<th class="button" id="Button"><input type="button" value="Modify or Delete" class="btnmd" style="margin-top:20px;"/></th>')

            $cards_reload.append($cards_holder)
            $cards_holder.append($tr)
            $tr.append($cardName, $cardType, $cardSDesc, $cardRef, $cardQu, $cardbutton)
            




          })






        })
    })

  }

  //setInterval(table, 500);
