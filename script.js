//smooth scrolling navbar
$("#nav ul li a[href^='#']").on('click', function(e) {
	// prevent default anchor click behavior
	e.preventDefault();
    // animate
    $('html, body').animate({
    	scrollTop: $(this.hash).offset().top
    }, 1000, function(){
    // when done, add hash to url
    // (default click behaviour)
       	window.location.hash = this.hash;
    });
});

//multiSlideShow

var slideIndex = [1,1];
/*Two slideshow group with different classes*/
var slideId = ["mySlides1", "mySlides2"] 
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, nd) {
  showSlides(slideIndex[nd] += n, nd);
}

function showSlides(n, nd) {
  var i;
  var x = document.getElementsByClassName(slideId[nd]);
  if (n > x.length) {slideIndex[nd] = 1} 
  if (n < 1) {slideIndex[nd] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex[nd]-1].style.display = "block"; 
}

