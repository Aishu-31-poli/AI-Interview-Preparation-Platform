/* =====================================================
   AI INTERVIEW PREPARATION PLATFORM
   Frontend JavaScript
===================================================== */


/* =====================================================
   QUESTION BANK
===================================================== */

const questionBank = {

    technical: [

        {
            question: "What is HTML?",
            answer: "HTML stands for HyperText Markup Language. It is used to create the structure of web pages.",
            keywords: ["html", "markup", "web", "structure"]
        },

        {
            question: "What is CSS?",
            answer: "CSS stands for Cascading Style Sheets. It is used to style and design web pages.",
            keywords: ["css", "style", "design", "web"]
        },

        {
            question: "What is JavaScript?",
            answer: "JavaScript is a programming language used to add interactivity and dynamic behavior to web pages.",
            keywords: ["javascript", "programming", "interactive", "dynamic"]
        },

        {
            question: "What is Object-Oriented Programming?",
            answer: "Object-Oriented Programming is a programming paradigm based on objects and classes. Its major concepts include encapsulation, inheritance, polymorphism and abstraction.",
            keywords: [
                "object",
                "class",
                "encapsulation",
                "inheritance",
                "polymorphism",
                "abstraction"
            ]
        },

        {
            question: "What is a database?",
            answer: "A database is an organized collection of data that can be stored, accessed and managed efficiently.",
            keywords: ["database", "data", "stored", "managed"]
        },

        {
            question: "What is DBMS?",
            answer: "DBMS stands for Database Management System. It is software used to create, store, manage and retrieve data from databases.",
            keywords: ["dbms", "database", "manage", "data"]
        },

        {
            question: "What is an operating system?",
            answer: "An operating system is system software that manages computer hardware, software resources and provides services to applications.",
            keywords: [
                "operating",
                "system",
                "hardware",
                "software",
                "resources"
            ]
        },

        {
            question: "What is machine learning?",
            answer: "Machine learning is a branch of artificial intelligence that allows computers to learn patterns from data and make predictions or decisions.",
            keywords: [
                "machine",
                "learning",
                "artificial",
                "intelligence",
                "data",
                "prediction"
            ]
        },

        {
            question: "What is a data structure?",
            answer: "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently.",
            keywords: [
                "data",
                "structure",
                "organize",
                "store",
                "efficient"
            ]
        },

        {
            question: "What is an API?",
            answer: "API stands for Application Programming Interface. It allows different software applications to communicate with each other.",
            keywords: [
                "api",
                "application",
                "interface",
                "communication"
            ]
        },

        {
            question: "What is inheritance?",
            answer: "Inheritance is an OOP feature where one class acquires properties and methods of another class.",
            keywords: [
                "inheritance",
                "class",
                "properties",
                "methods"
            ]
        },

        {
            question: "What is polymorphism?",
            answer: "Polymorphism means one interface or method can have different implementations or behaviors.",
            keywords: [
                "polymorphism",
                "method",
                "different",
                "behavior"
            ]
        }

    ],


    hr: [

        {
            question: "Tell me about yourself.",
            answer: "Give a short introduction including your education, technical skills, projects, achievements and career goals.",
            keywords: [
                "education",
                "skills",
                "project",
                "career"
            ]
        },

        {
            question: "What are your strengths?",
            answer: "Mention relevant strengths such as communication, teamwork, problem solving, adaptability and learning ability.",
            keywords: [
                "communication",
                "teamwork",
                "problem",
                "learning"
            ]
        },

        {
            question: "What are your weaknesses?",
            answer: "Mention a genuine but manageable weakness and explain how you are working to improve it.",
            keywords: [
                "weakness",
                "improve",
                "learning"
            ]
        },

        {
            question: "Why should we hire you?",
            answer: "Explain how your skills, knowledge, attitude and willingness to learn can contribute to the organization.",
            keywords: [
                "skills",
                "knowledge",
                "learn",
                "organization"
            ]
        },

        {
            question: "Why do you want to join our company?",
            answer: "Explain your interest in the company, its work culture, technology, opportunities and how it matches your career goals.",
            keywords: [
                "company",
                "career",
                "technology",
                "opportunity"
            ]
        },

        {
            question: "Where do you see yourself in five years?",
            answer: "Explain that you want to grow professionally, develop expertise and take greater responsibilities.",
            keywords: [
                "grow",
                "professional",
                "expertise",
                "responsibility"
            ]
        },

        {
            question: "What motivates you?",
            answer: "You can mention learning new things, solving problems, achieving goals and contributing to a team.",
            keywords: [
                "learning",
                "problem",
                "goals",
                "team"
            ]
        },

        {
            question: "How do you handle pressure?",
            answer: "Explain that you stay organized, prioritize tasks and focus on solving one problem at a time.",
            keywords: [
                "pressure",
                "organized",
                "priority",
                "problem"
            ]
        }

    ],


    behavioral: [

        {
            question: "Describe a situation where you solved a difficult problem.",
            answer: "Explain the situation, the problem, the action you took and the result.",
            keywords: [
                "situation",
                "problem",
                "action",
                "result"
            ]
        },

        {
            question: "How do you handle conflict in a team?",
            answer: "Listen to everyone, understand the problem, communicate respectfully and work toward a solution.",
            keywords: [
                "listen",
                "communicate",
                "team",
                "solution"
            ]
        },

        {
            question: "Describe a time when you worked in a team.",
            answer: "Explain your role, responsibilities, communication and contribution to the team's success.",
            keywords: [
                "team",
                "role",
                "communication",
                "contribution"
            ]
        },

        {
            question: "How do you manage multiple tasks?",
            answer: "Prioritize tasks based on importance and deadline, create a plan and complete them systematically.",
            keywords: [
                "priority",
                "deadline",
                "plan",
                "tasks"
            ]
        },

        {
            question: "How do you react to failure?",
            answer: "Analyze the mistake, learn from it and use the experience to improve future performance.",
            keywords: [
                "failure",
                "mistake",
                "learn",
                "improve"
            ]
        }

    ],


    coding: [

        {
            question: "What is an algorithm?",
            answer: "An algorithm is a finite sequence of well-defined steps used to solve a problem.",
            keywords: [
                "algorithm",
                "steps",
                "problem",
                "solve"
            ]
        },

        {
            question: "What is the difference between an array and a linked list?",
            answer: "An array stores elements in contiguous memory and generally has fixed size, while a linked list stores nodes connected through links and can grow dynamically.",
            keywords: [
                "array",
                "linked",
                "memory",
                "nodes",
                "dynamic"
            ]
        },

        {
            question: "What is a stack?",
            answer: "A stack is a linear data structure that follows the Last In First Out principle.",
            keywords: [
                "stack",
                "lifo",
                "last",
                "first"
            ]
        },

        {
            question: "What is a queue?",
            answer: "A queue is a linear data structure that follows the First In First Out principle.",
            keywords: [
                "queue",
                "fifo",
                "first",
                "last"
            ]
        },

        {
            question: "What is binary search?",
            answer: "Binary search is an efficient searching algorithm that repeatedly divides a sorted array into two halves.",
            keywords: [
                "binary",
                "search",
                "sorted",
                "array",
                "halves"
            ]
        },

        {
            question: "What is time complexity?",
            answer: "Time complexity describes how the running time of an algorithm grows with respect to input size.",
            keywords: [
                "time",
                "complexity",
                "algorithm",
                "input"
            ]
        },

        {
            question: "What is recursion?",
            answer: "Recursion is a technique where a function calls itself to solve smaller versions of a problem.",
            keywords: [
                "recursion",
                "function",
                "calls",
                "problem"
            ]
        }

    ]

};


/* =====================================================
   GLOBAL VARIABLES
===================================================== */

let currentQuestions = [];

let currentQuestionIndex = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let timerInterval;

let timeLeft = 60;

let currentCategory = "technical";


/* =====================================================
   AUTHENTICATION
===================================================== */

function register() {

    const name =
        document.getElementById("registerName").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const password =
        document.getElementById("registerPassword").value.trim();


    if (!name || !email || !password) {

        showNotification(
            "Please fill all fields."
        );

        return;
    }


    const user = {

        name: name,

        email: email,

        password: password

    };


    localStorage.setItem(
        "aiInterviewUser",
        JSON.stringify(user)
    );


    showNotification(
        "Account created successfully!"
    );


    showLogin();

}


/* =====================================================
   LOGIN
===================================================== */

function login() {

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value.trim();


    const savedUser =
        JSON.parse(
            localStorage.getItem("aiInterviewUser")
        );


    if (!savedUser) {

        showNotification(
            "No account found. Please register first."
        );

        return;
    }


    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        localStorage.setItem(
            "loggedIn",
            "true"
        );


        initializeApp();


        showNotification(
            "Login successful!"
        );

    } else {

        showNotification(
            "Invalid email or password."
        );

    }

}


/* =====================================================
   SHOW REGISTER
===================================================== */

function showRegister() {

    document
        .getElementById("loginBox")
        .classList.add("hidden");


    document
        .getElementById("registerBox")
        .classList.remove("hidden");

}


/* =====================================================
   SHOW LOGIN
===================================================== */

function showLogin() {

    document
        .getElementById("registerBox")
        .classList.add("hidden");


    document
        .getElementById("loginBox")
        .classList.remove("hidden");

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    localStorage.removeItem("loggedIn");

    location.reload();

}


/* =====================================================
   INITIALIZE APPLICATION
===================================================== */

function initializeApp() {

    document
        .getElementById("authPage")
        .classList.add("hidden");


    document
        .getElementById("app")
        .classList.remove("hidden");


    const user =
        JSON.parse(
            localStorage.getItem("aiInterviewUser")
        );


    if (user) {

        document
            .getElementById("userNameTop")
            .textContent = user.name;

        document
            .getElementById("dashboardName")
            .textContent = user.name;

        document
            .getElementById("profileName")
            .textContent = user.name;

        document
            .getElementById("profileEmail")
            .textContent = user.email;

    }


    updateDashboard();

}


/* =====================================================
   CHECK LOGIN WHEN PAGE LOADS
===================================================== */

window.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            localStorage.getItem("loggedIn")
            === "true"
        ) {

            initializeApp();

        }

    }
);


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.add("hidden");

        });


    document
        .getElementById(pageId)
        .classList.remove("hidden");


    const titles = {

        homePage: "Home",

        dashboardPage: "Dashboard",

        interviewPage: "Mock Interview",

        practicePage: "Practice Questions",

        progressPage: "Progress",

        tipsPage: "Interview Tips",

        profilePage: "Profile"

    };


    document
        .getElementById("pageTitle")
        .textContent =
        titles[pageId] || "AI Interview";


    if (pageId === "dashboardPage") {

        updateDashboard();

    }


    if (pageId === "progressPage") {

        updateProgress();

    }


    if (pageId === "profilePage") {

        updateProfile();

    }

}


/* =====================================================
   START INTERVIEW
===================================================== */

function startInterview() {

    clearInterval(timerInterval);


    const category =
        document
            .getElementById("interviewType")
            .value;


    const count =
        Number(
            document
                .getElementById("questionCount")
                .value
        );


    currentCategory = category;


    let availableQuestions =
        [...questionBank[category]];


    /* Shuffle */

    availableQuestions.sort(
        () => Math.random() - 0.5
    );


    currentQuestions =
        availableQuestions.slice(
            0,
            Math.min(
                count,
                availableQuestions.length
            )
        );


    currentQuestionIndex = 0;

    correctAnswers = 0;

    wrongAnswers = 0;


    document
        .getElementById("interviewSetup")
        .classList.add("hidden");


    document
        .getElementById("resultBox")
        .classList.add("hidden");


    document
        .getElementById("interviewBox")
        .classList.remove("hidden");


    showQuestion();

}


/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    if (!question) {

        finishInterview();

        return;
    }


    document
        .getElementById("questionNumber")
        .textContent =
        `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;


    document
        .getElementById("questionText")
        .textContent =
        question.question;


    document
        .getElementById("answerInput")
        .value = "";


    document
        .getElementById("feedbackBox")
        .className =
        "feedback hidden";


    const progress =
        (
            currentQuestionIndex /
            currentQuestions.length
        ) * 100;


    document
        .getElementById("questionProgress")
        .style.width =
        `${progress}%`;


    startTimer();

}


/* =====================================================
   TIMER
===================================================== */

function startTimer() {

    clearInterval(timerInterval);


    timeLeft = 60;


    document
        .getElementById("timer")
        .textContent =
        timeLeft;


    timerInterval =
        setInterval(
            function () {

                timeLeft--;


                document
                    .getElementById("timer")
                    .textContent =
                    timeLeft;


                if (timeLeft <= 0) {

                    clearInterval(
                        timerInterval
                    );


                    showNotification(
                        "Time's up!"
                    );


                    submitAnswer();

                }

            },
            1000
        );

}


/* =====================================================
   SUBMIT ANSWER
===================================================== */

function submitAnswer() {

    clearInterval(timerInterval);


    const userAnswer =
        document
            .getElementById("answerInput")
            .value
            .trim()
            .toLowerCase();


    const question =
        currentQuestions[
            currentQuestionIndex
        ];


    if (!userAnswer) {

        showNotification(
            "Please enter an answer."
        );

        startTimer();

        return;
    }


    const matchedKeywords =
        question.keywords.filter(
            keyword =>
                userAnswer.includes(
                    keyword.toLowerCase()
                )
        );


    const score =
        matchedKeywords.length /
        question.keywords.length;


    const feedbackBox =
        document
            .getElementById("feedbackBox");


    if (score >= 0.4) {

        correctAnswers++;


        feedbackBox.className =
            "feedback correct";


        feedbackBox.innerHTML =

            `<strong>✅ Good Answer!</strong><br>
             You covered important concepts.<br>
             <strong>Expected Answer:</strong>
             ${question.answer}`;


    } else {

        wrongAnswers++;


        feedbackBox.className =
            "feedback wrong";


        feedbackBox.innerHTML =

            `<strong>❌ Needs Improvement</strong><br>
             Try to include more important concepts.<br>
             <strong>Expected Answer:</strong>
             ${question.answer}`;

    }


    feedbackBox.classList.remove(
        "hidden"
    );


    setTimeout(
        function () {

            currentQuestionIndex++;

            showQuestion();

        },
        2500
    );

}


/* =====================================================
   FINISH INTERVIEW
===================================================== */

function finishInterview() {

    clearInterval(timerInterval);


    const total =
        currentQuestions.length;


    const score =
        total === 0
            ? 0
            : Math.round(
                (
                    correctAnswers /
                    total
                ) * 100
            );


    document
        .getElementById("interviewBox")
        .classList.add("hidden");


    document
        .getElementById("resultBox")
        .classList.remove("hidden");


    document
        .getElementById("finalScore")
        .textContent =
        `${score}%`;


    document
        .getElementById("correctCount")
        .textContent =
        correctAnswers;


    document
        .getElementById("wrongCount")
        .textContent =
        wrongAnswers;


    document
        .getElementById("attemptedCount")
        .textContent =
        total;


    let message;


    if (score >= 80) {

        message =
            "🏆 Excellent Performance!";

    } else if (score >= 60) {

        message =
            "👍 Good Performance!";

    } else {

        message =
            "💪 Keep Practicing!";

    }


    document
        .getElementById("performanceMessage")
        .textContent =
        message;


    saveInterviewResult(
        score,
        total
    );

}


/* =====================================================
   SAVE RESULT
===================================================== */

function saveInterviewResult(
    score,
    total
) {

    let history =
        JSON.parse(
            localStorage.getItem(
                "interviewHistory"
            )
        ) || [];


    history.push({

        date:
            new Date().toLocaleString(),

        type:
            currentCategory,

        questions:
            total,

        score:
            score

    });


    localStorage.setItem(
        "interviewHistory",
        JSON.stringify(history)
    );


    updateDashboard();

}


/* =====================================================
   GET HISTORY
===================================================== */

function getHistory() {

    return JSON.parse(
        localStorage.getItem(
            "interviewHistory"
        )
    ) || [];

}


/* =====================================================
   UPDATE DASHBOARD
===================================================== */

function updateDashboard() {

    const history =
        getHistory();


    const totalInterviews =
        history.length;


    let totalQuestions = 0;

    let totalScore = 0;

    let best = 0;


    history.forEach(
        item => {

            totalQuestions +=
                item.questions;

            totalScore +=
                item.score;

            if (item.score > best) {

                best = item.score;

            }

        }
    );


    const average =
        totalInterviews
            ? Math.round(
                totalScore /
                totalInterviews
            )
            : 0;


    document
        .getElementById("averageScore")
        .textContent =
        `${average}%`;


    document
        .getElementById("totalInterviews")
        .textContent =
        totalInterviews;


    document
        .getElementById("totalQuestions")
        .textContent =
        totalQuestions;


    document
        .getElementById("bestScore")
        .textContent =
        `${best}%`;


    const recent =
        document
            .getElementById(
                "recentPerformance"
            );


    if (!history.length) {

        recent.textContent =
            "No interviews completed yet.";

        return;

    }


    const latest =
        history
            .slice(-5)
            .reverse();


    recent.innerHTML =
        latest.map(
            item => `

                <div style="
                    padding:12px 0;
                    border-bottom:1px solid var(--border);
                ">

                    <strong>
                        ${item.type.toUpperCase()}
                    </strong>

                    <span style="float:right">
                        ${item.score}%
                    </span>

                    <br>

                    <small>
                        ${item.date}
                    </small>

                </div>

            `
        ).join("");

}


/* =====================================================
   UPDATE PROGRESS
===================================================== */

function updateProgress() {

    const history =
        getHistory();


    let totalScore = 0;

    let best = 0;


    history.forEach(
        item => {

            totalScore +=
                item.score;

            best =
                Math.max(
                    best,
                    item.score
                );

        }
    );


    const average =
        history.length
            ? Math.round(
                totalScore /
                history.length
            )
            : 0;


    document
        .getElementById("progressBest")
        .textContent =
        `${best}%`;


    document
        .getElementById("progressAverage")
        .textContent =
        `${average}%`;


    document
        .getElementById("progressAttempts")
        .textContent =
        history.length;


    const table =
        document
            .getElementById(
                "historyTable"
            );


    if (!history.length) {

        table.innerHTML =
            "<p>No interview history available.</p>";

        return;

    }


    table.innerHTML = `

        <table class="history-table">

            <thead>

                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Questions</th>
                    <th>Score</th>
                </tr>

            </thead>

            <tbody>

                ${
                    history
                        .slice()
                        .reverse()
                        .map(
                            item => `

                            <tr>

                                <td>
                                    ${item.date}
                                </td>

                                <td>
                                    ${item.type}
                                </td>

                                <td>
                                    ${item.questions}
                                </td>

                                <td>
                                    <strong>
                                        ${item.score}%
                                    </strong>
                                </td>

                            </tr>

                        `
                        )
                        .join("")
                }

            </tbody>

        </table>

    `;

}


/* =====================================================
   PRACTICE QUESTIONS
===================================================== */

function loadPractice(category) {

    currentCategory = category;


    const questions =
        questionBank[category];


    const container =
        document
            .getElementById(
                "practiceContainer"
            );


    container.innerHTML = `

        <h2>
            ${category.toUpperCase()}
            Questions
        </h2>

        <p style="margin:10px 0 20px">
            ${questions.length}
            questions available
        </p>

        ${
            questions.map(
                (item, index) => `

                    <div class="practice-question">

                        <h3>
                            ${index + 1}.
                            ${item.question}
                        </h3>

                        <button
                            class="show-answer"
                            onclick="toggleAnswer(${index})">

                            Show Answer

                        </button>

                        <div
                            id="answer-${index}"
                            class="practice-answer">

                            ${item.answer}

                        </div>

                    </div>

                `
            ).join("")
        }

    `;

}


/* =====================================================
   TOGGLE PRACTICE ANSWER
===================================================== */

function toggleAnswer(index) {

    const answer =
        document
            .getElementById(
                `answer-${index}`
            );


    if (
        answer.style.display ===
        "block"
    ) {

        answer.style.display =
            "none";

    } else {

        answer.style.display =
            "block";

    }

}


/* =====================================================
   PROFILE
===================================================== */

function updateProfile() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "aiInterviewUser"
            )
        );


    const history =
        getHistory();


    let best = 0;

    let questions = 0;


    history.forEach(
        item => {

            best =
                Math.max(
                    best,
                    item.score
                );

            questions +=
                item.questions;

        }
    );


    if (user) {

        document
            .getElementById(
                "profileName"
            )
            .textContent =
            user.name;


        document
            .getElementById(
                "profileEmail"
            )
            .textContent =
            user.email;

    }


    document
        .getElementById(
            "profileInterviews"
        )
        .textContent =
        history.length;


    document
        .getElementById(
            "profileBest"
        )
        .textContent =
        `${best}%`;


    document
        .getElementById(
            "profileQuestions"
        )
        .textContent =
        questions;

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleTheme() {

    document
        .body
        .classList
        .toggle("dark");


    const dark =
        document
            .body
            .classList
            .contains("dark");


    localStorage.setItem(
        "darkMode",
        dark
    );


    document
        .getElementById(
            "themeButton"
        )
        .textContent =
        dark
            ? "☀️"
            : "🌙";

}


/* =====================================================
   LOAD DARK MODE
===================================================== */

window.addEventListener(
    "DOMContentLoaded",
    function () {

        const dark =
            localStorage.getItem(
                "darkMode"
            );


        if (dark === "true") {

            document
                .body
                .classList
                .add("dark");


            const button =
                document
                    .getElementById(
                        "themeButton"
                    );


            if (button) {

                button.textContent =
                    "☀️";

            }

        }

    }
);


/* =====================================================
   NOTIFICATION
===================================================== */

function showNotification(message) {

    const notification =
        document
            .getElementById(
                "notification"
            );


    notification.textContent =
        message;


    notification.classList.add(
        "show"
    );


    setTimeout(
        function () {

            notification.classList.remove(
                "show"
            );

        },
        2500
    );

}