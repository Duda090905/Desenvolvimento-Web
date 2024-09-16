const Perguntas = [
    {
        Perguntas: "Qual Foi o Ultimo Album Lançado de Taylor?",
        Respostas: ["Folklore", "Midnights", "1989 Taylor`s Version", "The Tortured Poets Department: The Anthology"],
        RespostaCorreta: 3
    },
    {
        Perguntas: "Qual Sua Música Mais Famosa?",
        Respostas: ["Blank Space", "Bad Blood", "Cruel Summer", "Anti-Hero"],
        RespostaCorreta: 2
    },
    {
        Perguntas: "Qual Dessas Músicas É single?",
        Respostas: ["August", "All Too Well", "Lavender Haze","You`re On your own kid"
        ],
        RespostaCorreta: 2
    },

    {
        Perguntas: "Qual Desses Artistas Tem Feat com Swift?",
        Respostas: ["Shawn Mendes", "Drake", "Harry Styles", "John Mayer"],
        RespostaCorreta: 0
    },

    {
        Perguntas: "Qual Desses Taylor Swift Não Namorou?",
        Respostas: ["Harry Styles", "Calvin Harris", "Joe Jonas", "Adam Lavine"],
        RespostaCorreta: 3
    },




];

// Carrega perguntas na página
function loadQuestions() {
    const questioncontainer = document.getElementById('question-container');
    Perguntas.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.Perguntas}</h3>`;
        q.Respostas.forEach((Resposta, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="Resposta${index}" value="${i}"> ${Resposta}
            </label><br>`;
        });
        questioncontainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
   Perguntas.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="Resposta${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.RespostaCorreta) {
            score++;
        }
    });
    document.getElementById('Resultado').innerHTML = `You scored ${score} out of ${Perguntas.length}`;
}

window.onload = loadQuestions;