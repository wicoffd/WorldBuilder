// When the user scrolls the page, execute myFunction
// inpsired by https://www.w3schools.com/howto/howto_js_sticky_header.asp
window.onscroll = function() {scrollFunction()};

// Get the navbar
var graybar = document.getElementById("graybar");

// Get the offset position of the navbar
var sticky = graybar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    graybar.classList.add("sticky")
  } else {
    graybar.classList.remove("sticky");
  }
} 


/**
 * @return {Function}
 */
var createHelloWorld = function() {
  return function(...args) {
      return "Hello World";
  }
};
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
