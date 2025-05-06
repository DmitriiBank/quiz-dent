const questions1 = [
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
const questions2 = [
    {
        question: "К общим кариесогенным факторам относится:",
        options: [
            "Зубной налет и зубная бляшка",
            "Соматические заболевания в период формирования тканей зуба",
            "Нарушение состава ротовой жидкости",
            "Углеводистые липкие пищевые остатки в полости рта"
        ],
        answer: 1,
    },
    {
        question: "Какой из признаков характерен для острого течения кариеса?",
        options: [
            "Медленное развитие процесса",
            "Пигментация тканей зуба",
            "Быстрое размягчение твердых тканей зуба",
            "Плотное дно кариозной полости"
        ],
        answer: 2,
    },
    {
        question: "К местным кариесогенным факторам относится:",
        options: [
            "Экстремальные воздействия на организм",
            "Наследственная предрасположенность",
            "Неполноценная диета",
            "Плохая гигиена полости рта"
        ],
        answer: 3,
    },
    {
        question: "В каком слое дентина при развитии кариозного процесса происходит деминерализация без разрушения органической матрицы?",
        image: `<img src= "./image/cariesDentin.jpg" />`,
        options: [
            "Инфицированный",
            "Прозрачный",
            "Мутный",
            "Нормальный"
        ],
        answer: 1,
    },
    {
        question: "Как по гистологической классификации кариеса обозначается приостановившийся кариес?",
        options: [
            "К 02.0",
            "К 02.1",
            "К 02.2",
            "К 02.3"
        ],
        answer: 3,
    },
    {
        question: "Что из перечисленного применяется для лечения кариеса в стадии белого пятна?",
        image: `<img src= "./image/surfaceCaries.jpg" />`,
        options: [
            "Пломбирование композитом",
            "Иссечение пораженных тканей",
            "Реминерализирующая терапия",
            "Эндодонтическое лечение"
        ],
        answer: 2,
    },
    {
        question: "Рецидивный кариес - это:",
        image: `<img src= "./image/cariesRecediv.jpg" />`,
        options: [
            "Кариес, возникший впервые на интактном зубе",
            "Кариес, возникший по краю ранее поставленной пломбы",
            "Кариес в стадии пятна",
            "Кариес на нескольких зубах одновременно"
        ],
        answer: 1,
    },
    {
        question: "Какой вид кариеса принято называть осложненным (с. complicata)?",
        options: [
            "Кариес с поражением пульпы зуба",
            "Кариес в стадии пигментированного пятна",
            "Множественный кариес",
            "Рецидивный кариес"
        ],
        answer: 0,
    },
    {
        question: "Какой термин в классификации кариеса описывает поражение нескольких зубов одновременно?",
        options: [
            "Систематический кариес",
            "Хронический кариес",
            "Множественный кариес (с. systematica)",
            "Рецидивный кариес"
        ],
        answer: 2,
    },
    {
        question: "В чем заключается метод инфильтрации (Icon) при лечении кариеса?",
        options: [
            "Введение пломбировочного материала в полость",
            "Пропитывание начальных кариозных поражений специальным составом",
            "Удаление инфицированного дентина",
            "Восстановление формы зуба композитом"
        ],
        answer: 1,
    },
    {
        question: "Какой основной симптом периодонтита отличает его от пульпита?",
        image: `<img src= "./image/pulpitPeriodontit.jpg" />`,
        options: [
            "Боль при накусывании на зуб",
            "Самопроизвольная боль",
            "Реакция на холодное",
            "Кратковременная боль от сладкого"
        ],
        answer: 0,
    },
    {
        question: "В отличие от вкладок, культево-штифтовые вкладки применяются для:",
        image: `<img src= "./image/structure.jpg" />`,
        options: [
            "Восстановления незначительных дефектов зуба",
            "Восстановления значительно разрушенной коронковой части зуба",
            "Профилактики кариеса",
            "Временного протезирования"
        ],
        answer: 1,
    },
    {
        question: "Преимуществом вкладок по сравнению с пломбами является:",
        options: [
            "Быстрота изготовления",
            "Более высокая прочность и точное восстановление анатомической формы",
            "Возможность установки без препарирования тканей зуба",
            "Меньшая стоимость"
        ],
        answer: 1,
    },
    {
        question: "Какая из перечисленных конструкций используется для замещения включенных дефектов зубных рядов?",
        options: [
            "Вкладка",
            "Штифтовой зуб",
            "Мостовидный протез",
            "Коронка"
        ],
        answer: 2,
    },
    {
        question: "Что такое промежуточная часть мостовидного протеза?",
        image: `<img src= "./image/bridge.jpg" />`,
        options: [
            "Часть протеза, фиксирующаяся на соседних зубах",
            "Часть протеза, замещающая отсутствующие зубы",
            "Металлический каркас протеза",
            "Опорный элемент конструкции"
        ],
        answer: 1,
    },
    {
        question: "Какой тип промежуточной части мостовидного протеза лучше всего подходит для фронтальной группы зубов?",
        options: [
            "Промывная",
            "Касательная",
            "Седловидная",
            "Комбинированная"
        ],
        answer: 1,
    },
    {
        question: "Какое из перечисленных противопоказаний к изготовлению мостовидных протезов является абсолютным?",
        options: [
            "Дефекты, ограниченные зубами с низкими клиническими коронками",
            "Дефекты, дистально ограниченные зубом с патологической подвижностью",
            "Дефекты средней протяженности",
            "Альвеолярный отросток без атрофии"
        ],
        answer: 1,
    },
    {
        question: "Какой материал для изготовления металлокерамических конструкций может вызывать потемнение десны, но обладает антибактериальным эффектом?",
        options: [
            "Кобальт-хром (CoCr)",
            "Титан (Ti)",
            "Серебро-палладий (AgPd)",
            "Золото (Au)"
        ],
        answer: 2,
    },
    {
        question: "Какой из перечисленных материалов является самым гипоаллергенным для изготовления ортопедических конструкций?",
        options: [
            "Никель-хром (NiCr)",
            "Титан (Ti)",
            "Кобальт-хром (CoCr)",
            "Серебро-палладий (AgPd)"
        ],
        answer: 1,
    },
    {
        question: "Какой из недостатков мостовидных протезов является наиболее существенным с точки зрения долгосрочного прогноза?",
        options: [
            "Необходимость препарирования опорных зубов",
            "Сложность гигиенического ухода",
            "Длительный период адаптации",
            "Высокая стоимость"
        ],
        answer: 0,
    }
];
const questions = [
    {
        question: "Что такое протетическая плоскость?",
        options: [
            "Плоскость, проходящая через режущие края передних зубов",
            "Плоскость, воссоздаваемая при протезировании, проходящая на уровне нижнего края красной каймы верхней губы",
            "Плоскость, параллельная окклюзионной поверхности жевательных зубов",
            "Плоскость, соединяющая дистальные поверхности последних моляров"
        ],
        answer: 1,
    },
    {
        question: "Как определяется высота окклюзионного валика при полной адентии?",
        options: [
            "1-2 мм валика визуализируется в покое при полуоткрытом рте",
            "По уровню углов рта",
            "На 2-3 мм ниже красной каймы губ",
            "По произвольному выбору врача"
        ],
        answer: 0,
    },
    {
        question: "Какой аппарат используется для определения протетической плоскости?",
        options: [
            "Аппарат Гербста",
            "Аппарат Ларина или Fox plane",
            "Артикулятор",
            "Линейка Willis"
        ],
        answer: 1,
    },
    {
        question: "Что такое условно-съемный протез?",
        options: [
            "Протез, который пациент может снимать самостоятельно",
            "Протез, фиксирующийся в полости рта на имплантах с помощью опорных элементов",
            "Протез, который фиксируется только на временный цемент",
            "Протез без фиксации"
        ],
        answer: 1,
    },
    {
        question: "Какие материалы используются для временных коронок?",
        options: [
            "Только металл",
            "Акрил, пластмасса или композиты",
            "Только керамика",
            "Диоксид циркония"
        ],
        answer: 1,
    },
    {
        question: "Какой из перечисленных материалов используется для непрямого изготовления временных протезов?",
        options: [
            "Рефайн",
            "Люксатемп",
            "e.max",
            "Диоксид циркония"
        ],
        answer: 1,
    },
    {
        question: "Какие виды одиночных реставраций на зубе существуют?",
        options: [
            "Только коронки",
            "Только вкладки",
            "Вкладки, коронки, виниры",
            "Только мостовидные протезы"
        ],
        answer: 2,
    },
    {
        question: "Что из перечисленного относится к видам вкладок?",
        options: [
            "Inlay, onlay, overlay",
            "Только inlay",
            "Только onlay",
            "Только overlay"
        ],
        answer: 0,
    },
    {
        question: "Какой материал НЕ используется для изготовления одиночных коронок?",
        options: [
            "Металл (Au, NiCr, CoCr)",
            "Керамика (e.max)",
            "Оксидная керамика (диоксид циркония)",
            "Амальгама"
        ],
        answer: 3,
    },
    {
        question: "Какой этап клинического протокола следует после препарирования зуба под коронку?",
        options: [
            "Ретракция десны",
            "Фиксация постоянной коронки",
            "Определение цвета",
            "Изготовление временной коронки"
        ],
        answer: 0,
    },
    {
        question: "Для чего используется силиконовый ключ при изготовлении коронки?",
        options: [
            "Для определения цвета зуба",
            "Для регистрации прикуса",
            "Для контроля препарирования и будущей реставрации",
            "Для ретракции десны"
        ],
        answer: 2,
    },
    {
        question: "Какие материалы используются для получения оттисков?",
        options: [
            "Только альгинат",
            "Силикон (A-силикон, C-силикон), полиэфир, альгинат",
            "Только силикон",
            "Гипс"
        ],
        answer: 1,
    },
    {
        question: "Какая шкала используется для определения цвета зубов?",
        options: [
            "VITA classical A1-D4",
            "RGB",
            "HEX",
            "Pantone"
        ],
        answer: 0,
    },
    {
        question: "Какой этап лабораторного изготовления металлической коронки следует после моделировки из воска?",
        options: [
            "Полировка",
            "Литье (замена воска на металл)",
            "Фрезерование",
            "Прессование"
        ],
        answer: 1,
    },
    {
        question: "Какой этап лабораторного изготовления керамической коронки (e.max) следует после моделировки из воска?",
        options: [
            "Литье",
            "Прессование (замена воска на керамику)",
            "Фрезерование",
            "Синтеризация"
        ],
        answer: 1,
    },
    {
        question: "Какой этап лабораторного изготовления циркониевой коронки следует после фрезерования?",
        options: [
            "Полировка",
            "Синтеризация",
            "Литье",
            "Прессование"
        ],
        answer: 1,
    },
    {
        question: "Какие материалы используются для фиксации постоянных коронок?",
        options: [
            "Только композитный цемент с изоляцией коффердам",
            "Только СИЦ",
            "Адгезивные (композитный цемент) или СИЦ",
            "Только временный цемент"
        ],
        answer: 2,
    },
    {
        question: "Что проверяют при фиксации готовой коронки?",
        options: [
            "Только цвет",
            "Только окклюзионные контакты",
            "Апроксимальные и окклюзионные контакты, посадку",
            "Только посадку"
        ],
        answer: 2,
    },
    {
        question: "Какой материал для коронок является наиболее биосовместимым?",
        options: [
            "Никель-хром (NiCr)",
            "Диоксид циркония",
            "Кобальт-хром (CoCr)",
            "Серебро-палладий (AgPd)"
        ],
        answer: 1,
    },
    {
        question: "Какое преимущество имеют цельнолитые мостовидные протезы перед паяными?",
        options: [
            "Более низкая стоимость",
            "Более прочная конструкция без паяных соединений",
            "Быстрее изготавливаются",
            "Легче по весу"
        ],
        answer: 1,
    }
];
let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let score = 0;
let tempSelectedOption = null;

const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const resultsDiv = document.getElementById('results');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');

totalQuestionsSpan.textContent = questions.length;

function displayQuestion() {
    const question = questions[currentQuestion];
    currentQuestionSpan.textContent = currentQuestion + 1;
    tempSelectedOption = userAnswers[currentQuestion];

    let html = `
        <div class="question">
            <div class="question-text">${question.question}</div>
            ${question.image ? question.image : ""}
            <div class="options">
    `;

    question.options.forEach((option, index) => {
        const isSelected = tempSelectedOption === index;
        const isCorrect = userAnswers[currentQuestion] !== null && question.answer === index;
        const isIncorrect = userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] === index && userAnswers[currentQuestion] !== question.answer;

        let optionClass = 'option';
        if (isSelected) optionClass += ' selected';
        if (userAnswers[currentQuestion] !== null) {
            if (isCorrect) optionClass += ' correct';
            else if (isIncorrect) optionClass += ' incorrect';
        }

        html += `
            <div class="${optionClass}" data-option="${index}">
                ${option}
            </div>
        `;
    });

    html += `</div></div>`;
    questionContainer.innerHTML = html;

    prevBtn.disabled = currentQuestion === 0;

    // В функции displayQuestion():
    if (userAnswers[currentQuestion] === null) {
        nextBtn.textContent = 'Ответить';
        nextBtn.classList.add('answer-mode');
        nextBtn.classList.remove('results-mode');
        nextBtn.disabled = tempSelectedOption === null;
    } else {
        if (currentQuestion === questions.length - 1) {
            nextBtn.textContent = 'Показать результаты';
            nextBtn.classList.add('results-mode');
            nextBtn.classList.remove('answer-mode');
        } else {
            nextBtn.textContent = 'Вперед';
            nextBtn.classList.remove('answer-mode', 'results-mode');
        }
        nextBtn.disabled = false;
    }

    // Блокируем кнопку "Вперед", если ответ не выбран (кроме случаев, когда ответ уже зафиксирован)
    nextBtn.disabled = userAnswers[currentQuestion] === null && tempSelectedOption === null;

    // Add event listeners to options
    document.querySelectorAll('.option').forEach(option => {
        if (userAnswers[currentQuestion] === null) {
            option.addEventListener('click', selectOption);
        }
    });
}

function selectOption(e) {
    if (userAnswers[currentQuestion] !== null) return;

    const selectedIndex = parseInt(e.currentTarget.getAttribute('data-option'));
    tempSelectedOption = selectedIndex;

    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    e.currentTarget.classList.add('selected');

    // Разблокируем кнопку "Вперед", так как ответ выбран
    nextBtn.disabled = false;
}

function handleNextAction() {
    // Если ответ еще не зафиксирован, но выбран вариант - фиксируем ответ
    if (userAnswers[currentQuestion] === null && tempSelectedOption !== null) {
        userAnswers[currentQuestion] = tempSelectedOption;

        if (tempSelectedOption === questions[currentQuestion].answer) {
            score++;
        }

        // Обновляем отображение вопроса
        displayQuestion();

        // Если это был последний вопрос - показываем результаты
        if (currentQuestion === questions.length - 1) {
            displayResults();
        }
    }
    // Если ответ уже зафиксирован - просто переходим к следующему вопросу
    else if (userAnswers[currentQuestion] !== null) {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            tempSelectedOption = null;
            displayQuestion();
        } else {
            displayResults();
        }
    }
    // Если ничего не выбрано - ничего не делаем (кнопка и так заблокирована)
}

function goToPrevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        tempSelectedOption = userAnswers[currentQuestion];
        displayQuestion();
    }
}

function displayResults() {
    if (userAnswers.includes(null)) {
        alert('Пожалуйста, ответьте на все вопросы перед просмотром результатов.');
        return;
    }

    questionContainer.style.display = 'none';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';

    resultsDiv.style.display = 'block';
    restartBtn.style.display = 'inline-block';

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
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = new Array(questions.length).fill(null);
    tempSelectedOption = null;

    resultsDiv.style.display = 'none';
    restartBtn.style.display = 'none';
    questionContainer.style.display = 'block';
    prevBtn.style.display = 'inline-block';
    nextBtn.style.display = 'inline-block';

    displayQuestion();
}

// Event listeners
nextBtn.addEventListener('click', handleNextAction);
prevBtn.addEventListener('click', goToPrevQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Initialize quiz
displayQuestion();