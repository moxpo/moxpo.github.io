let topButton = document.getElementById("backToTop");

window.onscroll = () => {
  topButton.style.display = document.documentElement.scrollTop > 20 ? "block" : "none";
}

topButton.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'}); // Smooth scrolling
}
