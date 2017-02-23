var arr = [{ nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "23 de enero" },
           { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
           { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
           { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
           { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" }];

for (var i in arr) {
  document.getElementById("obj").innerHTML +=
          "<ul>" +
          "<li>Nombre: " + arr[i].nombre + "</li>" +
          "<li>Apellido: " + arr[i].apellido  + "</li>" +
          "<li>Rol: " + arr[i].rol  + "</li>" +
          "<li>Cumpleaños: " + arr[i].cumpleanios  + "</li>" +
        "</ul>";
}
