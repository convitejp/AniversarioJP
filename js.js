  // Define a data do evento (exemplo: 20 de setembro de 2025 às 11:00)
 const dataEvento = new Date("2025-09-20T11:00:00-04:00").getTime();

  const atualizarContador = () => {
    const agora = new Date().getTime();
    const distancia = dataEvento - agora;

    if (distancia <= 0) {
      document.getElementById("contador").innerHTML = "🎉 Já começou!";
      clearInterval(intervalo); // Para o contador
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
  };

  const intervalo = setInterval(atualizarContador, 1000);
  atualizarContador(); // Atualiza imediatamente ao carregar

