// plik scripts.js

var n = prompt("Podaj wysokość choinki: ");

function rysujChoinke(n) {
  var star = '';
  for ( var k = 0 ; k < n; k++) {
    for ( var i = k ; i <= k*2-1 ; i++ ) {
      star += "*";
     }
	console.log(star);
  }
}
rysujChoinke(n);
