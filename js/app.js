const mask = {
  cpf(value) {
    return value
      .replace(/\D/g, '') // aceita somente caracteres numero.
      .replace(/(\d{3})(\d)/, '$1.$2') // () => permite criar grupos de captura.
      .replace(/(\d{3})(\d)/, '$1.$2') // $1, $2, $3 ... permite substituir a captura pela propria captura acrescida de algo
      .replace(/(\d{3})(\d{2})/, '$1-$2') // substitui '78910' por '789-10'.
      .replace(/(-\d{2})\d+?$/, '$1');
  },

  cnpj(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  },

  phone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) - $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(\d{4})\d+?$/, '$1');
  },

  cep(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  },

  pis(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{5})(\d)/, '$1.$2')
      .replace(/(\d{5})\.(\d{2})(\d)/, '$1$2-$3')
      .replace(/(-\d)\d+?$/, '$1');
  },

  cartao(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  },
};

document.querySelectorAll('input').forEach((input) => {
  const field = input.dataset.js; 

  input.addEventListener('input', (event) => {
    event.target.value = mask[field](event.target.value);
  });
});

const mascaraNumero = (numero) => {
  return [...new Array(3).fill('****'), numero.slice(-4)].join('-');
};

document.getElementById('mascara-cartao').addEventListener('click', (event) => {
  const numeroCartao = document.querySelector('[data-js="cartao"]').value;

  if (numeroCartao.split('-').join('').length === 16) {
    document.getElementById('numero-salvo').innerHTML = mascaraNumero(numeroCartao);
  }
});
