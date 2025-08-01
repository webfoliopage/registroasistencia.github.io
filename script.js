document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('asistenciaForm');
  const btnEntrada = document.getElementById('btnEntrada');
  const btnSalida = document.getElementById('btnSalida');

  function enviarRegistro(tipo) {
  const nombre = encodeURIComponent(document.getElementById('nombre').value.trim());
  const establecimiento = encodeURIComponent(document.getElementById('establecimiento').value);
  const fecha = encodeURIComponent(new Date().toLocaleString());

  if (!nombre || !establecimiento) {
    alert("Por favor completa todos los campos.");
    return;
  }

  const url = `https://script.google.com/macros/s/AKfycbxexlK98GiGq1VfzhYFw_i0RBadWKnVVWjUIRxT-8BUkp_xHZoecMmnuMe_vuQ8Nl8/exec?nombre=${nombre}&establecimiento=${establecimiento}&fecha=${fecha}&tipo=${tipo}`;

  fetch(url, { method: 'GET', mode: 'no-cors' });

  alert(`¡${tipo === 'entrada' ? 'Entrada' : 'Salida'} registrada con éxito!`);
  form.reset();
}


  btnEntrada.addEventListener('click', () => enviarRegistro("entrada"));
  btnSalida.addEventListener('click', () => enviarRegistro("salida"));
});
