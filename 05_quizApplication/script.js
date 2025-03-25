document.addEventListener('DOMContentLoaded',() => {

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Earth", "Venus", "Mars", "Jupiter"],
            answer: "Mars"
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
            answer: "William Shakespeare"
        },
        {
            question: "What is the boiling point of water at sea level (in Celsius)?",
            choices: ["90", "100", "80", "120"],
            answer: "100"
        },
        {
            question: "Which is the largest mammal in the world?",
            choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer: "Blue Whale"
        }
    ];
    
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questiontext = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    let currentQuestionIdx = 0;
    let score = 0;
    startBtn.addEventListener('click' , startQuiz);
    nextBtn.addEventListener('click' , () => {
        currentQuestionIdx++;
        if( currentQuestionIdx < questions.length) {
            showQuestion();
        }else {
            showResult();
        }
    })
    restartBtn.addEventListener('click',() =>{
        currentQuestionIdx = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    })
    function startQuiz(){
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();
    }
    function showQuestion(){
        nextBtn.classList.add('hidden');
        questiontext.textContent = questions[currentQuestionIdx].question;
        choicesList.innerHTML = "";
        questions[currentQuestionIdx].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => selectAnswer(choice));
            choicesList.appendChild(li);
        })
    }
    function selectAnswer(choice){
        const correctAnswer = questions[currentQuestionIdx].answer;
        if( choice === correctAnswer){
            score++;
        }
        nextBtn.classList.remove('hidden');
    }
    function showResult(){
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${questions.length}`
    }

})