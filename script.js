const questions = [
    {question: "Что изображено под цифрой 4",
        image: `<img src= "./image/jaws2.jpg" />`,
        options: ["твердое нёбо","мягкое нёбо", "миндалина", "нёбно-язычная дужка"],
        answer: 2,
    },
    {question: "Что изображено под цифрой 4",
        image: `<img src= "./image/jaws.png" />`,
        options: ["клыки","премоляры", "моляры", "зубы мудрости"],
        answer: 2,
    },
    {question: "Что изображено под цифрой 3",
        image: `<img src= "./image/jaws.png" />`,
        options: ["клыки","премоляры", "моляры"],
        answer: 1,
    },
    {question: "Что изображено под цифрой 7",
        image: `<img src= "./image/jaws.png" />`,
        options: ["резцы верхней челюсти", "резцы нижней челюсти", "клыки верхней челюсти", "клыки нижней челюсти"],
        answer: 1,
    },
    {question: "Какая челюсть представлена на фото",
        image: `<img src= "./image/mandibula.jpg" />`,
        options: ["верхняя", "нижняя"],
        answer: 1,
    },
    {question: "Как называется зуб 1.5",
        options: ["второй премоляр верхней челюсти справа", "второй премоляр верхней челюсти слева", "второй премоляр нижней челюсти справа", "второй премоляр нижней челюсти слева"],
        answer: 0,
    },
    {question: "Каких молочных зубов не существует",
        options: ["резцы", "клыки","премоляры", "моляры"],
        answer: 2,
    },
    {question: "Назовите челюсть и сторону зуба под вопросом",
        image: `<img src= "./image/maxila.png" />`,
        options: ["верхняя челюсть справа","верхняя челюсть слева","нижняя челюсть справа","нижняя челюсть слева"],
        answer: 1,
    },
    {question: "Что изображено под цифрой 2",
        image: `<img src= "./image/tooth.png" />`,
        options: ["эмаль", "цемент","пульпа", "дентин"],
        answer: 3,
    },
    {question: "Что изображено под цифрой 4",
        image: `<img src= "./image/tooth.png" />`,
        options: ["эмаль", "дентин","коронка", "корень"],
        answer: 2,
    },
    {question: "Что изображено под цифрой 6",
        image: `<img src= "./image/tooth.png" />`,
        options: ["коронка", "десна","корень", "кость"],
        answer: 3,
    },
    {question: "Назовите сторону под цифрой 5",
        image: `<img src= "./image/sides.png" />`,
        options: ["мезиальная","дистальная","небная","окклюзионная","вестибулярная","язычная"],
        answer: 4,
    },
    { question: "Кариес - это...",
        image: `<img src= "./image/caries.png" />`,
        options: ["патологический процесс твердых тканей, возникающий до прорезывания зуба под воздействием общих и местных факторов, сопровождающийся деминерализацией эмали с последующим образованием дефекта в виде полости.", "патологический процесс твердых тканей, возникающий после прорезывания зуба под воздействием общих и местных факторов, сопровождающийся деминерализацией эмали с последующим образованием дефекта в виде полости.", "патологический процесс твердых тканей, возникающий после прорезывания зуба под воздействием общих и местных факторов, сопровождающийся минерализацией эмали с последующим образованием дефекта в виде полости."],
        answer: 1,
    },
    {question: "Назовите класс по Блэку",
        image: `<img src= "./image/Black2.png" />`,
        options: ["I", "II","III-IV", "V"],
        answer: 1,
    },
    {question: "Назовите класс по Блэку",
        image: `<img src= "./image/Black1.png" />`,
        options: ["I", "II","III-IV", "V"],
        answer: 0,
    },
    {question: "Назовите класс по Блэку",
        image: `<img src= "./image/black5.png" />`,
        options: ["I", "II","III-IV", "V"],
        answer: 3,
    },
    {question: "Назовите класс по Блэку",
        image: `<img src= "./image/Black3.png" />`,
        options: ["I", "II","III-IV", "V"],
        answer: 2,
    },
    {question: "Что за поражение зубов представлено на фото?",
        image: `<img src= "./image/flor.png" />`,
        options: ["кариес", "гипоплазия","флюороз", "эрозия"],
        answer: 2,
    },
    {question: "Назовите протез",
        image: `<img src= "./image/structure.png" />`,
        options: ["виниры", "вкладки","вкладки штифтовые", "коронки"],
        answer: 1,
    },
    {question: "Назовите конструкцию вкладки",
        image: `<img src= "./image/onlay.png" />`,
        options: ["onlay", "inlay","overlay", "crown"],
        answer: 0,
    },
];

let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let score = 0;

const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const resultsDiv = document.getElementById('results');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');

totalQuestionsSpan.textContent = questions.length;

// Предотвращение зума при двойном касании
function preventZoom(e) {
    const t2 = e.timeStamp;
    const t1 = e.currentTarget.dataset.lastTouch || t2;
    const dt = t2 - t1;
    const fingers = e.touches.length;
    e.currentTarget.dataset.lastTouch = t2;

    if (!dt || dt > 500 || fingers > 1) return; // Не двойной тап или мультитач

    e.preventDefault();
    e.stopPropagation();
}

// Добавляем обработчик предотвращения зума
document.body.addEventListener('touchstart', preventZoom, false);
document.body.classList.add('prevent-zoom');

function displayQuestion() {
    const question = questions[currentQuestion];
    currentQuestionSpan.textContent = currentQuestion + 1;

    let html = `
        <div class="question">
            <div class="question-text">${question.question}</div>
            ${question.image ? question.image : ""}
            <div class="options">
    `;

    question.options.forEach((option, index) => {
        const isSelected = userAnswers[currentQuestion] === index;
        const isCorrect = question.answer === index;
        const showExplanation = userAnswers[currentQuestion] !== null;

        let optionClass = 'option';
        if (isSelected) optionClass += ' selected';
        if (showExplanation) {
            if (isCorrect) optionClass += ' correct';
            else if (isSelected) optionClass += ' incorrect';
        }

        html += `
            <div class="${optionClass}" data-option="${index}">
                ${option}
            </div>
        `;
    });

    html += `</div></div>`;
    questionContainer.innerHTML = html;

    // Update navigation buttons
    prevBtn.disabled = currentQuestion === 0;

    // Изменение текста кнопки на последнем вопросе
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = 'Показать результаты';
    } else {
        nextBtn.textContent = 'Вперед';
    }

    // Плавная прокрутка страницы вверх
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Add event listeners to options with делегированием событий
    const optionsContainer = document.querySelector('.options');
    if (optionsContainer) {
        // Удаляем предыдущие обработчики перед добавлением новых
        optionsContainer.removeEventListener('click', handleOptionClick);
        optionsContainer.addEventListener('click', handleOptionClick);
    }
}

// Делегирование события клика для вариантов ответа
function handleOptionClick(e) {
    const optionElement = e.target.closest('.option');
    if (!optionElement || userAnswers[currentQuestion] !== null) return;

    const selectedIndex = parseInt(optionElement.getAttribute('data-option'));
    userAnswers[currentQuestion] = selectedIndex;

    if (selectedIndex === questions[currentQuestion].answer) {
        score++;
    }

    // Небольшая задержка для отображения выбранного варианта
    setTimeout(() => {
        displayQuestion();
    }, 100);
}

// Navigation functions
function goToNextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        // Явно вызываем отображение результатов при нажатии на кнопку на последнем вопросе
        displayResults();
    }
}

function goToPrevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

function displayResults() {
    // Скрываем контейнер с вопросами и навигационные кнопки
    questionContainer.style.display = 'none';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';

    // Показываем результаты и кнопку перезапуска
    resultsDiv.style.display = 'block';
    restartBtn.style.display = 'block';

    let resultHTML = `
        <h2>Результаты теста</h2>
        <p>Вы набрали <strong>${score}</strong> из <strong>${questions.length}</strong> правильных ответов.</p>
        <p>Процент: <strong>${Math.round((score / questions.length) * 100)}%</strong></p>
        <hr>
        <h3>Ваши ответы:</h3>
    `;

    questions.forEach((q, i) => {
        const userAnswer = userAnswers[i];
        const isCorrect = userAnswer === q.answer;
        const answerText = q.options[q.answer];
        const userText = userAnswer !== null ? q.options[userAnswer] : 'Нет ответа';

        resultHTML += `
            <div class="question">
                <div><strong>Вопрос ${i + 1}:</strong> ${q.question}</div>
                ${q.image ? q.image : ''}
                <div><strong>Ваш ответ:</strong> ${userText}</div>
                <div><strong>Правильный ответ:</strong> ${answerText}</div>
                <div style="color: ${isCorrect ? 'green' : 'red'}; font-weight: bold;">
                    ${isCorrect ? 'Верно!' : 'Неверно'}
                </div>
                <hr>
            </div>
        `;
    });

    resultsDiv.innerHTML = resultHTML;

    // Плавная прокрутка страницы вверх
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function restartQuiz() {
    // Сбрасываем все переменные и состояния
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(questions.length).fill(null);

    // Скрываем результаты и показываем вопросы
    resultsDiv.style.display = 'none';
    restartBtn.style.display = 'none';
    questionContainer.style.display = 'block';
    prevBtn.style.display = 'inline-block';
    nextBtn.style.display = 'inline-block';

    // Отображаем первый вопрос
    displayQuestion();
}

// Event listeners с использованием passive опции для улучшения производительности
nextBtn.addEventListener('click', goToNextQuestion, { passive: true });
prevBtn.addEventListener('click', goToPrevQuestion, { passive: true });
restartBtn.addEventListener('click', restartQuiz, { passive: true });

// Добавляем мета-теги для лучшего масштабирования на мобильных устройствах
function setupMobileViewport() {
    // Удаляем существующий мета-тег viewport если он есть
    const existingViewport = document.querySelector('meta[name="viewport"]');
    if (existingViewport) {
        existingViewport.parentNode.removeChild(existingViewport);
    }

    // Добавляем новый мета-тег viewport с настройками
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.head.appendChild(meta);

    // Добавляем теги для iOS
    const metaApple = document.createElement('meta');
    metaApple.name = 'apple-mobile-web-app-capable';
    metaApple.content = 'yes';
    document.head.appendChild(metaApple);
}

// Отключаем масштабирование двойным постукиванием
function preventDoubleTapZoom() {
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(e) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
}

// Initialize
setupMobileViewport();
preventDoubleTapZoom();
displayQuestion();