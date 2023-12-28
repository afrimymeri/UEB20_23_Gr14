// Get the header element
var header = document.getElementById("sticky-header");

// Get the offset position of the header
var sticky = header.offsetTop;

// Function to add the "sticky" class to the header when scrolling down
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Attach the function to the scroll event
window.onscroll = function() {
  stickyHeader();
};