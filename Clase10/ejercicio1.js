let fechaDeterminada = new Date(2012, 1, 20, 3, 12, 0);

let fechaFormateada = fechaDeterminada.toLocaleString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour: 'numeric'
});

console.log(fechaFormateada);