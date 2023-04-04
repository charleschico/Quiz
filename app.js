const questions = [
    { question: "1. O que é lixo?", options: ["Tudo aquilo que não é aproveitado nas atividades humanas", "Tudo aquilo que não possui utilidade ou valor", "A transformação dos resíduos em novos produtos ou matérias-primas", "A reciclagem do lixo orgânico em adubo natural"], answer: 0 },
     
    { question: "2. Como é chamada a política que propõe reduzir, reutilizar e reciclar o lixo produzido?", options: ["3RS", "5RS", "4RS", "2RS"], answer: 0 },
    
    { question: "3. Qual é o objetivo da ação 'Reduzir' na política dos 3R’s?", options: ["Maximizar a quantidade de lixo que produzimos", "Minimizar a quantidade de lixo que produzimos", "Reutilizar os materiais descartados", "Transformar os resíduos em novos produtos ou matérias-primas"], answer: 1 },
    
    { question: "4. O que significa a ação 'Reutilizar' na política dos 3R’s?", options: ["Utilizar várias vezes um determinado produto ou material, podendo adotar novas funções aos mesmos", "Transformar os resíduos em novos produtos ou matérias-primas", "Devolver garrafas de vidro", "Separar os resíduos recicláveis, dos orgânicos"], answer: 0 },
    
    { question: "5. O que significa a ação 'Reciclar' na política dos 3R’s?", options: ["Utilizar várias vezes um determinado produto ou material, podendo adotar novas funções aos mesmos", "Transformar os resíduos em novos produtos ou matérias-primas", "Devolver garrafas de vidro", "Separar os resíduos recicláveis, dos orgânicos"], answer: 1 },
    
    { question: "6. Qual é o processo de reciclagem do lixo orgânico que transforma a matéria orgânica encontrada no lixo em adubo natural?", options: ["Coleta seletiva", "Compostagem", "Separação", "Tratamento"], answer: 1 },
    
    { question: "7. O que é saneamento básico?", options: ["Um conjunto de serviços fundamentais para o desenvolvimento socioeconômico de uma região", "A transformação dos resíduos em novos produtos ou matérias-primas", "A utilização de materiais retornáveis ou reutilizáveis", "A separação dos resíduos recicláveis dos orgânicos"], answer: 0 },
    
    { question: "8. O que faz parte do saneamento básico?", options: ["Separação dos resíduos recicláveis, dos orgânicos", "Compostagem", "Abastecimento de água potável", "Reutilização dos materiais descartados"], answer:2 },

    { question: "9. O que observar em casa para manter o ambiente limpo?", options: ["Manter o lixo em sacos ou latas bem fechadas", "Deixar telhas, madeiras, entulhos ou outros materiais depositados por longos períodos", "Não verificar se a limpeza dos recipientes de água é realizada periodicamente", "Manter quintal ou terreno sujo"], answer: 0 },
    
    { question: "10. O que significa compostagem?", options: ["O processo de reciclagem do lixo orgânico", "A transformação dos resíduos em novos produtos ou matérias-primas", "A reciclagem de garrafas de vidro", "A reutilização de embalagens"], answer: 0 },
    
    { question: "11. Qual é a função da coleta seletiva?", options: ["Separar os resíduos recicláveis, dos orgânicos", "Reduzir a quantidade de lixo produzido", "Transformar os resíduos em novos produtos ou matérias-primas", "Compostagem"], answer: 0 },
    
    { question: "12. O que é necessário para garantir o tratamento adequado dos resíduos?", options: ["Transporte", "Separação", "Tratamento", "Compostagem"], answer: 2 },
    
    { question: "13. Qual é a atividade que faz parte do manejo dos resíduos comuns?", options: ["Limpeza urbana e manejo de resíduos sólidos", "Compostagem", "Drenagem e manejo das águas pluviais urbanas", "Abastecimento de água potável"], answer: 0 },
    
    { question: "14. O que é preciso fazer para manter a cozinha e os demais cômodos limpos?", options: ["Lavar sempre as mãos antes das refeições e depois que ir ao banheiro", "Deixar animais domésticos próximos ao local onde o lixo é colocado", "Armazenar o lixo em recipiente aberto", "Não lavar todos os alimentos com água"], answer: 0 },
    
    { question: "15. Qual é a importância de avaliar as características do lixo?", options: ["Identificar o tipo de lixo para uma destinação adequada", "Comprar mais materiais que serão descartados", "Utilizar somente o que for necessário", "Deixar o lixo armazenado por longos períodos"], answer: 0 },
    
    { question: "16. O que é preciso fazer antes de jogar algo no lixo?", options: ["Verificar se pode ser útil para outra pessoa", "Deixar o lixo armazenado por longos períodos", "Utilizar somente o que for necessário", "Comprar produtos com o maior número de embalagens"], answer: 0 },
    
    { question: "17. Qual é a recomendação para consumir de forma consciente?", options: ["Consumir somente o que for necessário", "Comprar produtos com o maior número de embalagens", "Não utilizar materiais retornáveis ou reutilizáveis", "Jogar tudo no lixo sem separar os recicláveis"], answer: 0 },
    
    { question: "18. O que é preciso fazer antes de armazenar o lixo?", options: ["Colocá-lo em um recipiente fechado", "Deixá-lo exposto ao ar livre", "Não verificar quanto tempo permanecerá armazenado até ser recolhido", "Não avaliar as características do lixo"], answer: 0 },

    { question: "19. Qual é a recomendação para o armazenamento dos restos de alimentos de animais de estimação?", options: ["Recolhê-los", "Jogá-los no lixo comum", "Deixá-los expostos ao ar livre", "Não fazer nada"], answer: 0 },
    
    { question: "20. Qual é a importância de lavar as mãos?", options: ["Evitar doenças", "Causar doenças", "Não fazer nada", "Prejudicar o meio ambiente"], answer: 0 },

];


let currentQuestion = 0;
const questionElement = document.querySelector(".question");
const optionBtns = document.querySelectorAll(".option-btn");

function updateQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    optionBtns.forEach((btn, index) => {
        btn.textContent = questions[currentQuestion].options[index];
        btn.style.backgroundColor = "#fff";
        btn.style.color = "#007bff";
    });
}

optionBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        optionBtns.forEach((otherBtn, otherIndex) => {
            if (otherIndex === questions[currentQuestion].answer) {
                otherBtn.style.backgroundColor = "#28a745";
                otherBtn.style.color = "#fff";
            } else {
                otherBtn.style.backgroundColor = "#6c757d";
                otherBtn.style.color = "#fff";
            }
        });
    });
});

updateQuestion();

const teamBlue = document.getElementById("team-blue");
const teamRed = document.getElementById("team-red");
const blueCorrect = document.getElementById("blue-correct");
const redCorrect = document.getElementById("red-correct");
const noonecorrect = document.getElementById("no-one-correct");

const blueCounter = document.getElementById("blue-counter");
const redCounter = document.getElementById("red-counter");

for (let i = 0; i < 10; i++) {
    const blueSquare = document.createElement("div");
    blueSquare.classList.add("square");
    teamBlue.appendChild(blueSquare);

    const redSquare = document.createElement("div");
    redSquare.classList.add("square");
    teamRed.appendChild(redSquare);
}

function colorSquare(team) {
    const squares = team.querySelectorAll(".square");
    let coloredSquares = 0;
    for (const square of squares) {
        if (!square.classList.contains("blue") && !square.classList.contains("red")) {
            square.classList.add(team === teamBlue ? "blue" : "red");
            coloredSquares++;
            break;
        } else {
            coloredSquares++;
        }
    }
    if (team === teamBlue) {
        blueCounter.textContent = `${coloredSquares}/10`;
    } else {
        redCounter.textContent = `${coloredSquares}/10`;
    }
    if (coloredSquares === 10) {
        setTimeout(() => {
            alert(`Parabéns o Time ${team === teamBlue ? "Azul" : "Vermelho"}, venceu!`);
        }, 100);
    }
}

blueCorrect.addEventListener("click", () => {
    colorSquare(teamBlue);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        updateQuestion();
    }
});

redCorrect.addEventListener("click", () => {
    colorSquare(teamRed);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        updateQuestion();
    }
});


noonecorrect.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        updateQuestion();
    }
});

