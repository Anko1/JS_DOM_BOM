
window.addEventListener('scroll', function (e) {
	
  
  var $parallax = document.getElementById('parallax');
  var posY = document.body.scrollTop * (-0.1);
  $parallax.style.backgroundPosition = '0px '+posY+'px';
});
