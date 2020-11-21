function openCity(evt, cityName) {
  var i, tabascontent, tabaslinks;
  tabascontent = document.getElementsByClassName("tabascontent");
  for (i = 0; i < tabascontent.length; i++) {
    tabascontent[i].style.display = "none";
  }
  tabaslinks = document.getElementsByClassName("tabaslinks");
  for (i = 0; i < tabaslinks.length; i++) {
    tabaslinks[i].className = tabaslinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}