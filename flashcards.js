const flashcards = [
    { categoria: "Programação", pergunta: "O que é HTML?", resposta: "HTML é uma linguagem de marcação usada para criar páginas web." },
    { categoria: "Programação", pergunta: "O que é CSS?", resposta: "CSS é uma linguagem de estilo usada para personalizar o layout de páginas web." },
    { categoria: "Programação", pergunta: "O que é JavaScript?", resposta: "JavaScript é uma linguagem de programação usada para adicionar interatividade às páginas web." },
    { categoria: "Programação", pergunta: "O que é uma variável?", resposta: "Uma variável é um espaço na memória que armazena um valor." }
];

const container = document.getElementById('flashcards');

flashcards.forEach(({ categoria, pergunta, resposta }) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <h3>${categoria}</h3>
        <p class="pergunta">${pergunta}</p>
        <p class="resposta hidden">${resposta}</p>
    `;

    card.addEventListener('click', () => {
        const resposta = card.querySelector('.resposta');
        resposta.classList.toggle('hidden');
    });

    container.appendChild(card);
});
