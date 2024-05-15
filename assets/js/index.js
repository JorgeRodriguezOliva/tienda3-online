// Función para cargar el contenido de un archivo HTML en un contenedor específico
function includeHTML(filePath, containerId) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(containerId).innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", filePath, true);
  xhttp.send();
}

// Cargar los archivos HTML en los contenedores respectivos
includeHTML("header.html", "headerContainer");
includeHTML("nav.html", "navContainer");
includeHTML("cards.html", "mainContainer");
includeHTML("footer.html", "footerContainer");
