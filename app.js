// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

  const nombres = []; // array para almacenar los nombres

  function agregarAmigo() {  // Función para agregar amigos
    const input = document.getElementById('amigo').value;
    const nombre = input;

    if (nombre.length >= 2)  {
        nombres.push(nombre);
        mostrarNombres();
        input.value = "";
        }   else {
            alert("Por favor ingresa un nombre válido (mínimo 2 caracteres).");
            }
    limpiarCaja();
  }

  function mostrarNombres() {  // Función para agregar amigos a la lista nombres
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nombres.forEach((nombre) => {
      const li = document.createElement("li");
      li.textContent = nombre;
      lista.append(li);
    });
  }

  function sortearAmigo() {  // Función para sortar amigos
    if (nombres.length === 0) {
      alert("No hay nombres para sortear.");
      return;
    }

    const indice = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indice];

    const resultado = document.getElementById("resultado");
    resultado.textContent = `🎉 Tu amigo secreto es ... : ${nombreSorteado}`;
  }

  function limpiarCaja(){ // Función para limpiar la caja de texto
    let input = document.querySelector('#amigo').value = '';
  }