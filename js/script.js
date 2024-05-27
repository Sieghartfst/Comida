// document.addEventListener("DOMContentLoaded", function() {
//     const clientes = document.querySelectorAll('.cliente');
//     const anteriorBtn = document.querySelector('.anterior');
//     const proximoBtn = document.querySelector('.proximo');
  
//     let index = 0;
  
//     function mostrarCliente(n) {
//       clientes.forEach(cliente => cliente.classList.remove('active'));
//       clientes[n].classList.add('active');
//     }
  
//     function clienteAnterior() {
//       index = (index === 0) ? clientes.length - 1 : index - 1;
//       mostrarCliente(index);
//     }
  
//     function proximoCliente() {
//       index = (index === clientes.length - 1) ? 0 : index + 1;
//       mostrarCliente(index);
//     }
  
//     anteriorBtn.addEventListener('click', clienteAnterior);
//     proximoBtn.addEventListener('click', proximoCliente);
  
//     mostrarCliente(index); // Mostrar o primeiro cliente ao carregar a página
//   });
  