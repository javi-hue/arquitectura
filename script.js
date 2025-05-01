window.addEventListener('load', () => {
  const notas = document.getElementById('notas');
  const contenidoGuardado = localStorage.getItem('blocMedieval');

  if (contenidoGuardado) {
    notas.value = contenidoGuardado;
  }

  document.getElementById('guardar').addEventListener('click', () => {
    localStorage.setItem('blocMedieval', notas.value);
    alert('¡Tus notas han sido guardadas!');
  });
});
