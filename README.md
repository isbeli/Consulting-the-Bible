# 📖 Consulting the Bible

**Consulting the Bible** é uma aplicação web desenvolvida com HTML, CSS e JavaScript puro, que permite aos usuários consultar versículos bíblicos de maneira prática e rápida.

🚀 **Destaque:** Este projeto **integra uma API externa real** – [Bible-API.com](https://bible-api.com) – demonstrando habilidades de consumo de dados via requisições HTTP usando JavaScript.

---

## 🌐 Demonstração

> O usuário insere a referência de um versículo (ex: `John 3:16`) e a aplicação retorna o conteúdo diretamente da API da Bíblia.

---

## ⚙️ Funcionalidades

- ✅ Interface intuitiva para consulta bíblica.
- ✅ Consumo em tempo real da API [Bible-API](https://bible-api.com).
- ✅ Resposta personalizada com o texto bíblico correspondente.
- ✅ Código limpo e modular com JavaScript vanilla.

---

## 📦 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **API RESTful** – [https://bible-api.com](https://bible-api.com)

---

## 🔌 Integração com a API

A aplicação realiza uma requisição GET para o endpoint da Bible-API, utilizando o fetch:

```javascript
fetch(`https://bible-api.com/${userInput}`)
  .then((response) => response.json())
  .then((data) => {
    // manipulação do retorno e exibição dos versículos
  });
```

Essa integração permite trazer dinamicamente o conteúdo bíblico diretamente da API, sem necessidade de backend ou banco de dados local.

---

## 📁 Estrutura do Projeto

```
Consulting-the-Bible/
├── assets/
│   └── style.css
├── form.html
└── main.js
```

---

## ▶️ Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/isbeli/Consulting-the-Bible.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd Consulting-the-Bible
   ```

3. Abra o arquivo `form.html` em seu navegador.

---

## 💼 Este projeto demonstra:

- Uso de **API REST pública** em projetos frontend.
- Habilidade em **trabalhar com requisições assíncronas** usando JavaScript.
- Boas práticas de **organização de código e estrutura de projeto web**.
- Capacidade de transformar ideias simples em **interfaces funcionais e interativas**.

---

## 📄 Licença

👩‍💻 Autoria
Desenvolvido por Visionária-DEV
📅 © 2025 Todos os direitos reservados.
