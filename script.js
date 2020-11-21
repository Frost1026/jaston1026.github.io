function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("msgWindow").style.visibility = "hidden";
  document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("msgWindow").style.visibility = "visible";
  document.body.style.backgroundColor = "white";
}
