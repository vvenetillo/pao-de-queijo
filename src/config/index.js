let service, template, key;

// Certifique-se de que import.meta.env está definido (ambiente Vite)
if (typeof import.meta.env !== 'undefined') {
  // Agora você pode usar import.meta.env
  service = import.meta.env.VITE_REACT_APP_SERVICE; 
  template = import.meta.env.VITE_REACT_APP_TEMPLATE;
  key = import.meta.env.VITE_REACT_APP_KEY;
} else {
  // Se não estiver definido, faça algo diferente
  console.log('import.meta.env is not defined');
}

// Agora você pode usar service, template e key aqui, e eles serão undefined se import.meta.env não estiver definido
console.log('Service:', service);
console.log('Template:', template);
console.log('Key:', key);
