document.getElementById('my-form').addEventListener('submit', function(e) {
  e.preventDefault()

  const livro = document.getElementById('livro').value.trim().toLowerCase();
  const capitulo = document.getElementById('capitulo').value;
  const versiculo = document.getElementById('versiculo').value;
  const botao = document.getElementById('botao');
  const resultado = document.getElementById('result-text');

  e.target.reset();
  botao.textContent = 'Buscando...';
   

  const url = `https://bible-api.com/${livro}+${capitulo}:${versiculo}?translation=almeida`
  
  fetch(url)
        .then(response => {
            if (!response.ok) {
              throw new Error(' Versículo no encontrado.');
            }
              return response.json();
            })
          .then(data => {
            resultado.textContent = `${data.text}\n(${data.reference})`;
          resultado.style.color = "white";
          })
        .catch(error => {
          resultado.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        })
        .finally(() => {
          e.target.reset();
          botao.textContent = 'Buscar';
        });
});



