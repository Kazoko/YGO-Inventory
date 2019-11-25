window.$ = window.JQuery = require ('Jquery')

$(document).on('click','.btnmd', function(){
  var $row = $(this).parents('tr');    
  $name = $row.find('.Name').text();     
  $type = $row.find('.Type').text();     
  $sdesc = $row.find('.SDesc').text();     
  $ref = $row.find('.Ref').text();     
  $qu = $row.find('.Qu').text(); 

  localStorage.name1 = $name; 
  localStorage.type1 = $type; 
  localStorage.sdesc1 = $sdesc; 
  localStorage.ref1 = $ref; 
  localStorage.qu1 = $qu; 

  modifMain();
})

var modifMain = function () {
  const electron = require('electron')
  const path = require('path')
  const BrowserWindow = electron.remote.BrowserWindow;

  let MDCard

  MDCard = new BrowserWindow({
      width: 400,
      height: 700,
      autoHideMenuBar: true,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true
      }
    })

MDCard.loadFile('card.html')

}


//$(document).on('click','.btndl', function(){
  //var $row = $(this).parents('tr');    
  //$tds = $row.find('.Ref').text();   
  //localStorage.ref = $tds;          
  //$row.remove();

  //showMain();
//})