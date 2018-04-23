$( document ).ready(function() {


  function getUsername() {
    var  user = prompt("Veuillez rentrez votre nom:", "");
    return user
}

 function welcome() {
    var name= getUsername();
    $("#welcome").html('<h4>Bienvenue '+name+', <br> soyez prêt à découvrir de nouveaux défis ! </h4>');

};

  welcome();


  function loadChallenges() {
  $.ajax(
        {url : 'https://api.myjson.com/bins/qlmgb',
        type: 'GET',
        dataType: 'json'} 
  )
  .done(function(data) {
    showChallenge(data);
  })
  .fail(function() {
    alert( "error" );
  });
}

function showChallenge(liste) {

  var data="";

  for ( var i=0; i < liste.length; i++) {
    data+='<div class="defi">';

    var challenge=liste[i];

    data+='<h2>'+challenge.nom+'</h2>';
    data+='<p>'+challenge.description+'</p>';
    data+='<iframe src="'+challenge.youtube+'" allowfullscreen="" width="364" height="204" frameborder="0"></iframe>'
    data+="</div>";
  }
  $("#defis").html(data);

}

loadChallenges();
})