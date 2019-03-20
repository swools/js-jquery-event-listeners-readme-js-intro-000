function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e){
    console.log(e);
    if (e.which === 71) {
      alert('You have pressed G')
    } else {
      return
    }
  })
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
});
