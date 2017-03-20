// plik scripts.js

var n = prompt("Podaj wysokość choinki: ");

function rysujChoinke() {
  var star = '';
  for ( var k = 0 ; k < n; k++) {
    for ( var i = k ; i <= k ; i*2-1 ) {
      star += "*";
      console.log(star);
     }
  }
}
rysujChoinke();
