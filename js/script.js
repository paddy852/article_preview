function toggleIcons(){
  var x = document.getElementById("icons");
  if (x.style.display === 'none') {
    x.style.display = "block",
    x.style.transition = "all 400ms";
  } else {
    x.style.display = "none",
    x.style.transition = "all 400ms";
  }
}