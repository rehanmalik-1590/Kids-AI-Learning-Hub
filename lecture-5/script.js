// ==================== COMPLETE SCRIPT.JS ====================
// 50 Prepositions Data
const prepositionsList = [
    { word: "in", urdu: "میں" }, { word: "on", urdu: "پر" }, { word: "under", urdu: "نیچے" },
    { word: "behind", urdu: "پیچھے" }, { word: "in front of", urdu: "سامنے" }, { word: "between", urdu: "درمیان" },
    { word: "next to", urdu: "پاس" }, { word: "above", urdu: "اوپر" }, { word: "below", urdu: "نیچے" },
    { word: "near", urdu: "قریب" }, { word: "beside", urdu: "پہلو میں" }, { word: "across", urdu: "پار" },
    { word: "through", urdu: "کے ذریعے" }, { word: "over", urdu: "اوپر سے" }, { word: "inside", urdu: "اندر" },
    { word: "outside", urdu: "باہر" }, { word: "around", urdu: "گرد" }, { word: "among", urdu: "میں سے" },
    { word: "against", urdu: "خلاف" }, { word: "along", urdu: "ساتھ ساتھ" }, { word: "during", urdu: "دوران" },
    { word: "without", urdu: "بغیر" }, { word: "within", urdu: "کے اندر" }, { word: "beyond", urdu: "سے پرے" },
    { word: "throughout", urdu: "بھر میں" }, { word: "towards", urdu: "کی طرف" }, { word: "off", urdu: "سے دور" },
    { word: "since", urdu: "سے" }, { word: "for", urdu: "کے لیے" }, { word: "by", urdu: "کی طرف سے" },
    { word: "with", urdu: "کے ساتھ" }, { word: "like", urdu: "کی طرح" }, { word: "as", urdu: "جیسے" },
    { word: "than", urdu: "سے" }, { word: "of", urdu: "کا" }, { word: "to", urdu: "کو" },
    { word: "from", urdu: "سے" }, { word: "up", urdu: "اوپر" }, { word: "down", urdu: "نیچے" },
    { word: "into", urdu: "میں" }, { word: "via", urdu: "کے راستے" }, { word: "per", urdu: "فی" },
    { word: "plus", urdu: "علاوہ" }, { word: "minus", urdu: "کم" }, { word: "times", urdu: "ضرب" }
];

// Match Game Data
const matchData = [
    { word: "in", pic: "📦 IN the box" }, { word: "on", pic: "📚 ON the table" },
    { word: "under", pic: "🐱 UNDER the chair" }, { word: "behind", pic: "🚪 BEHIND the door" },
    { word: "in front of", pic: "🏃 IN FRONT OF the car" }, { word: "between", pic: "👫 BETWEEN two" },
    { word: "next to", pic: "🪑 NEXT TO the table" }, { word: "above", pic: "☁️ ABOVE the clouds" },
    { word: "below", pic: "🌊 BELOW the surface" }, { word: "near", pic: "🏠 NEAR the house" }
];

// Fill Data
const fillData = [
    { text: "The cat is ___ the box.", answer: "in" }, { text: "The book is ___ the table.", answer: "on" },
    { text: "The dog is ___ the chair.", answer: "under" }, { text: "The car is ___ the building.", answer: "behind" },
    { text: "The sun is ___ the clouds.", answer: "above" }, { text: "The fish is ___ the water.", answer: "below" }
];

// Drag Compare Data
const dragCompareData = [
    { word: "cat", correct: "on the mat" }, { word: "dog", correct: "under the table" },
    { word: "bird", correct: "above the tree" }, { word: "fish", correct: "in the water" },
    { word: "ball", correct: "behind the door" }
];

// Tricky Data
const trickyData = [
    { text: "The cat is sleeping ___ the bed (on top of)", answer: "on" },
    { text: "The fish is swimming ___ the water (inside)", answer: "in" },
    { text: "The mouse is hiding ___ the table (below)", answer: "under" }
];

// Quiz Data
const quizData = [
    { q: "The cat is ___ the box.", opt: ["in", "on", "under"], correct: "in" },
    { q: "The book is ___ the table.", opt: ["in", "on", "under"], correct: "on" },
    { q: "The dog is ___ the chair.", opt: ["in", "on", "under"], correct: "under" },
    { q: "The sun is ___ the clouds.", opt: ["above", "below", "under"], correct: "above" }
];

// ==================== 50 GRAMMAR QUESTIONS FOR CHATBOT ====================
const grammarQuestions = [
    { id: 1, q: "What is your name?", qRoman: "Aapka naam kya hai?", expected: ["name"], grammar: "Noun - A person's identity", correctExample: "My name is Ahmed" },
    { id: 2, q: "I ___ a student.", qRoman: "Main ___ student hoon.", expected: ["am"], grammar: "Verb 'to be' - 1st person singular", correctExample: "I am a student" },
    { id: 3, q: "She ___ to school everyday.", qRoman: "Woh roz ___ school jati hai.", expected: ["goes"], grammar: "Verb - 3rd person singular", correctExample: "She goes to school" },
    { id: 4, q: "The cat is ___ the box.", qRoman: "Billi box ___ hai.", expected: ["in"], grammar: "Preposition 'in' - inside", correctExample: "in" },
    { id: 5, q: "___ are my friends.", qRoman: "___ mere dost hain.", expected: ["they", "these", "those"], grammar: "Subjective plural pronoun", correctExample: "They are my friends" },
    { id: 6, q: "Give the book to ___.", qRoman: "Mujhe ___ book do.", expected: ["me"], grammar: "Objective pronoun", correctExample: "Give the book to me" },
    { id: 7, q: "He ___ playing cricket.", qRoman: "Woh cricket ___ raha hai.", expected: ["is"], grammar: "Verb 'to be' - present continuous", correctExample: "He is playing" },
    { id: 8, q: "They ___ gone to market.", qRoman: "Woh market ___ gaye hain.", expected: ["have"], grammar: "Auxiliary verb 'have'", correctExample: "They have gone" },
    { id: 9, q: "This is ___ orange.", qRoman: "Yeh ___ orange hai.", expected: ["an"], grammar: "Article 'an' - before vowel sound", correctExample: "an orange" },
    { id: 10, q: "___ is a beautiful day.", qRoman: "___ khoobsurat din hai.", expected: ["it", "this", "that"], grammar: "Demonstrative pronoun", correctExample: "It is a beautiful day" },
    { id: 11, q: "The children ___ playing.", qRoman: "Bache ___ rahe hain.", expected: ["are"], grammar: "Verb 'to be' - plural", correctExample: "The children are playing" },
    { id: 12, q: "Please sit ___ the chair.", qRoman: "Kursi ___ baith jao.", expected: ["on"], grammar: "Preposition 'on' - surface", correctExample: "on the chair" },
    { id: 13, q: "I ___ to school yesterday.", qRoman: "Main kal school ___ gaya.", expected: ["went"], grammar: "Past tense - irregular verb", correctExample: "I went to school" },
    { id: 14, q: "___ is my brother.", qRoman: "___ mera bhai hai.", expected: ["he", "this"], grammar: "Subjective pronoun - male", correctExample: "He is my brother" },
    { id: 15, q: "I have two ___ (child).", qRoman: "Mere do ___ hain.", expected: ["children"], grammar: "Irregular plural noun", correctExample: "children" },
    { id: 16, q: "The book is ___ the table.", qRoman: "Kitab table ___ hai.", expected: ["on"], grammar: "Preposition 'on'", correctExample: "on the table" },
    { id: 17, q: "She ___ very smart.", qRoman: "Woh bohat smart ___ hai.", expected: ["is"], grammar: "Verb 'to be' - 3rd person", correctExample: "She is very smart" },
    { id: 18, q: "___ are you?", qRoman: "Aap ___ ho?", expected: ["who"], grammar: "Interrogative pronoun", correctExample: "Who are you?" },
    { id: 19, q: "The dog is hiding ___ the bed.", qRoman: "Kutta bed ___ chupa hai.", expected: ["under"], grammar: "Preposition 'under'", correctExample: "under the bed" },
    { id: 20, q: "We ___ happy today.", qRoman: "Hum aaj ___ khush hain.", expected: ["are"], grammar: "Verb 'to be' - plural", correctExample: "We are happy" },
    { id: 21, q: "___ color is your car?", qRoman: "Aapki car ___ color hai?", expected: ["what"], grammar: "Interrogative adjective", correctExample: "What color" },
    { id: 22, q: "The sun rises ___ the east.", qRoman: "Sooraj east ___ nikalta hai.", expected: ["in"], grammar: "Preposition 'in' - direction", correctExample: "in the east" },
    { id: 23, q: "He ___ breakfast at 8am.", qRoman: "Woh 8 bajay ___ nasta karta hai.", expected: ["eats", "has"], grammar: "Verb - 3rd person singular", correctExample: "He eats breakfast" },
    { id: 24, q: "Please give the pen to ___.", qRoman: "Pen ___ do.", expected: ["her", "him", "me"], grammar: "Objective pronoun", correctExample: "to her" },
    { id: 25, q: "There are five ___ (man).", qRoman: "Paach ___ hain.", expected: ["men"], grammar: "Irregular plural - man to men", correctExample: "men" },
    { id: 26, q: "The bird flew ___ the sky.", qRoman: "Parinda aasman ___ udd gaya.", expected: ["in", "through"], grammar: "Preposition of place", correctExample: "in the sky" },
    { id: 27, q: "I ___ a new car last week.", qRoman: "Main nay parson ___ nayi car li.", expected: ["bought"], grammar: "Past tense - buy to bought", correctExample: "I bought" },
    { id: 28, q: "___ is your favorite food?", qRoman: "Aapka pasandida khana ___ hai?", expected: ["what"], grammar: "Interrogative pronoun", correctExample: "What is" },
    { id: 29, q: "The cat is sleeping ___ the sofa.", qRoman: "Billi sofa ___ so rahi hai.", expected: ["on"], grammar: "Preposition 'on'", correctExample: "on the sofa" },
    { id: 30, q: "My sister ___ a doctor.", qRoman: "Merri behan ___ doctor hai.", expected: ["is"], grammar: "Verb 'to be' - 3rd person", correctExample: "My sister is" },
    { id: 31, q: "___ book is this?", qRoman: "Yeh ___ book hai?", expected: ["whose"], grammar: "Possessive interrogative", correctExample: "Whose book" },
    { id: 32, q: "She is afraid ___ spiders.", qRoman: "Woh spiders ___ darti hai.", expected: ["of"], grammar: "Preposition 'of'", correctExample: "afraid of" },
    { id: 33, q: "We ___ watching a movie.", qRoman: "Hum movie ___ dekh rahe hain.", expected: ["are"], grammar: "Present continuous", correctExample: "We are watching" },
    { id: 34, q: "___ called you yesterday.", qRoman: "___ nay kal tumhe bulaya.", expected: ["someone", "she", "he"], grammar: "Subjective pronoun", correctExample: "She called" },
    { id: 35, q: "I have three ___ (tooth).", qRoman: "Mere teen ___ hain.", expected: ["teeth"], grammar: "Irregular plural - tooth to teeth", correctExample: "teeth" },
    { id: 36, q: "He is interested ___ music.", qRoman: "Woh music ___ interested hai.", expected: ["in"], grammar: "Preposition 'in'", correctExample: "interested in" },
    { id: 37, q: "___ you like ice cream?", qRoman: "___ tumhe ice cream pasand hai?", expected: ["do"], grammar: "Auxiliary verb 'do'", correctExample: "Do you like" },
    { id: 38, q: "This is the man ___ helped me.", qRoman: "Yeh woh aadmi hai ___ mujhe help ki.", expected: ["who"], grammar: "Relative pronoun - subject", correctExample: "who helped" },
    { id: 39, q: "The pen is ___ the drawer.", qRoman: "Pen drawer ___ hai.", expected: ["in"], grammar: "Preposition 'in'", correctExample: "in the drawer" },
    { id: 40, q: "She ___ reading a book now.", qRoman: "Woh ab book ___ rahi hai.", expected: ["is"], grammar: "Present continuous", correctExample: "She is reading" },
    { id: 41, q: "___ is your birthday?", qRoman: "Aapki birthday ___ hai?", expected: ["when"], grammar: "Interrogative adverb", correctExample: "When is" },
    { id: 42, q: "He is good ___ English.", qRoman: "Woh English ___ acha hai.", expected: ["at"], grammar: "Preposition 'at'", correctExample: "good at" },
    { id: 43, q: "They ___ to the park yesterday.", qRoman: "Woh kal park ___ gaye.", expected: ["went"], grammar: "Past tense - go to went", correctExample: "They went" },
    { id: 44, q: "___ is the woman I met.", qRoman: "Yeh woh aurat hai ___ main mila tha.", expected: ["who", "whom"], grammar: "Relative pronoun", correctExample: "whom I met" },
    { id: 45, q: "I have many ___ (book).", qRoman: "Mere paas bohat ___ hain.", expected: ["books"], grammar: "Regular plural", correctExample: "books" },
    { id: 46, q: "She is sitting ___ me.", qRoman: "Woh mere ___ baithi hai.", expected: ["beside", "next to"], grammar: "Preposition of place", correctExample: "beside me" },
    { id: 47, q: "I ___ finished my homework.", qRoman: "Main nay apna homework ___ kar liya.", expected: ["have"], grammar: "Present perfect", correctExample: "I have finished" },
    { id: 48, q: "___ are you so late?", qRoman: "Tum itnay late ___ ho?", expected: ["why"], grammar: "Interrogative adverb", correctExample: "Why are" },
    { id: 49, q: "This gift is for ___.", qRoman: "Yeh gift ___ liye hai.", expected: ["you", "her", "him"], grammar: "Objective pronoun", correctExample: "for you" },
    { id: 50, q: "Congratulations! What did you learn?", qRoman: "Mubarak! Aapne kya seekha?", expected: ["learned", "grammar", "preposition", "verb"], grammar: "Review question", correctExample: "I learned about prepositions" }
];

// ==================== NAVIGATION & STATE ====================
let currentModule = 1;
const totalModules = 8;

// Chatbot State
let chatState = {
    userName: "",
    currentIndex: 0,
    wrongAttempts: 0,
    score: 0,
    answered: 0,
    streak: 0,
    waitingForName: true,
    initialized: false
};

// Game States
let selectedMatchItem = null;
let matchMatched = {};
let fillIndex = 0;
let fillList = [];
let dragCompared = {};
let selectedDragWord = null;
let trickyIndex = 0;
let trickyList = [];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    createDots();
    setupNavigation();
    setupWordList();
    setupMatchGame();
    setupFillGame();
    setupDragCompareGame();
    setupTrickyGame();
    setupMixedQuiz();
    setupFinalQuiz();
    initModule7();
});

function updateProgress() {
    const percent = (currentModule / totalModules) * 100;
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = percent + '%';
}

function createDots() {
    const container = document.getElementById('moduleDots');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 1; i <= totalModules; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentModule) dot.classList.add('active');
        dot.addEventListener('click', () => showModule(`module${i}`));
        container.appendChild(dot);
    }
}

function showModule(moduleId) {
    document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
    const target = document.getElementById(moduleId);
    if (target) {
        target.classList.add('active');
        currentModule = parseInt(moduleId.replace('module', ''));
        updateProgress();
        updateActiveDot();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateActiveDot() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        if (i + 1 === currentModule) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

function setupNavigation() {
    document.querySelectorAll('.next-btn, .prev-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const next = btn.getAttribute('data-next');
            const prev = btn.getAttribute('data-prev');
            if (next) showModule(next);
            if (prev) showModule(prev);
        });
    });
}

function goHome() { window.location.href = '../index.html'; }
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

// ==================== MODULE 1 ====================
function setupWordList() {
    const container = document.getElementById('wordsGrid');
    if (!container) return;
    let html = '';
    prepositionsList.forEach(item => {
        html += `<div class="word-card" data-word="${item.word}">${item.word} <span class="urdu">(${item.urdu})</span></div>`;
    });
    container.innerHTML = html;
    document.querySelectorAll('.word-card').forEach(card => {
        card.addEventListener('click', () => speak(card.getAttribute('data-word')));
    });
}

// ==================== MODULE 2 ====================
function setupMatchGame() {
    const container = document.getElementById('prepositionMatchGame');
    const msgDiv = document.getElementById('prepositionMatchMessage');
    if (!container) return;
    
    matchData.forEach(item => { matchMatched[item.word] = false; });
    let matchedCount = 0;
    
    function render() {
        let leftHTML = '<div class="match-left-col">';
        let rightHTML = '<div class="match-right-col">';
        matchData.forEach(item => {
            if (matchMatched[item.word]) {
                leftHTML += `<div class="match-item matched">✅ ${item.word}</div>`;
                rightHTML += `<div class="match-item matched">✅ ${item.pic}</div>`;
            } else {
                leftHTML += `<div class="match-item" data-word="${item.word}">${item.word}</div>`;
                rightHTML += `<div class="match-item" data-pic="${item.word}">${item.pic}</div>`;
            }
        });
        leftHTML += '</div>'; rightHTML += '</div>';
        container.innerHTML = leftHTML + rightHTML;
        
        document.querySelectorAll('.match-left-col .match-item:not(.matched)').forEach(w => {
            w.addEventListener('click', () => {
                document.querySelectorAll('.match-item').forEach(el => el.classList.remove('selected'));
                w.classList.add('selected');
                selectedMatchItem = w;
            });
        });
        
        document.querySelectorAll('.match-right-col .match-item:not(.matched)').forEach(p => {
            p.addEventListener('click', () => {
                if (selectedMatchItem) {
                    const word = selectedMatchItem.getAttribute('data-word');
                    const picWord = p.getAttribute('data-pic');
                    if (word === picWord && !matchMatched[word]) {
                        matchMatched[word] = true;
                        matchedCount++;
                        msgDiv.innerHTML = `✅ Shabash! (${matchedCount}/${matchData.length})`;
                        msgDiv.style.background = '#4CAF50';
                        render();
                        if (matchedCount === matchData.length) msgDiv.innerHTML = '🎉 Mubarak! Sab match ho gaye! 🎉';
                    } else {
                        msgDiv.innerHTML = `❌ Ghalat! Try again!`;
                        msgDiv.style.background = '#f44336';
                        setTimeout(() => msgDiv.innerHTML = '', 1000);
                    }
                    selectedMatchItem.classList.remove('selected');
                    selectedMatchItem = null;
                }
            });
        });
    }
    render();
}

// ==================== MODULE 3 ====================
function setupFillGame() {
    fillList = [...fillData];
    fillIndex = 0;
    loadFill();
}

function loadFill() {
    const container = document.getElementById('fillPrepositionGame');
    const msgDiv = document.getElementById('fillPrepositionMessage');
    if (fillIndex >= fillList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Sab fill kar liye! 🎉</h3>';
        return;
    }
    const item = fillList[fillIndex];
    const options = ["in", "on", "under", "behind", "above", "below", "near", "next to"];
    container.innerHTML = `<div class="choice-question"><p>${item.text}</p><div class="choice-options">${options.map(opt => `<button class="choice-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.answer) {
                fillIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${fillIndex}/${fillList.length})`;
                msgDiv.style.background = '#4CAF50';
                loadFill();
            } else {
                msgDiv.innerHTML = `❌ Ghalat! Sahi answer "${item.answer}" hai.`;
                msgDiv.style.background = '#f44336';
                setTimeout(() => msgDiv.innerHTML = '', 1500);
            }
        });
    });
}

// ==================== MODULE 4 ====================
function setupDragCompareGame() {
    const container = document.getElementById('dragCompareGame');
    const msgDiv = document.getElementById('dragCompareMessage');
    if (!container) return;
    dragCompared = {};
    dragCompareData.forEach(item => { dragCompared[item.word] = false; });
    let dragCount = 0;
    
    function render() {
        let wordsHTML = '<div class="compare-words-col"><h3 style="color:cyan">📝 Words</h3>';
        let zonesHTML = '<div class="compare-zones-col"><h3 style="color:magenta">🎯 Drop Zones</h3>';
        dragCompareData.forEach(item => {
            if (dragCompared[item.word]) {
                wordsHTML += `<div class="compare-word matched">✅ ${item.word}</div>`;
                zonesHTML += `<div class="compare-zone filled">✅ ${item.correct}</div>`;
            } else {
                wordsHTML += `<div class="compare-word" data-word="${item.word}" data-correct="${item.correct}">${item.word}</div>`;
                zonesHTML += `<div class="compare-zone" data-correct="${item.correct}">⬅️ ${item.correct}</div>`;
            }
        });
        wordsHTML += '</div>'; zonesHTML += '</div>';
        container.innerHTML = wordsHTML + zonesHTML;
        
        document.querySelectorAll('.compare-word:not(.matched)').forEach(word => {
            word.addEventListener('click', () => {
                document.querySelectorAll('.compare-word').forEach(w => w.classList.remove('selected'));
                word.classList.add('selected');
                selectedDragWord = word;
            });
        });
        
        document.querySelectorAll('.compare-zone:not(.filled)').forEach(zone => {
            zone.addEventListener('click', () => {
                if (selectedDragWord) {
                    const wordCorrect = selectedDragWord.getAttribute('data-correct');
                    const zoneCorrect = zone.getAttribute('data-correct');
                    if (wordCorrect === zoneCorrect && !dragCompared[selectedDragWord.getAttribute('data-word')]) {
                        dragCompared[selectedDragWord.getAttribute('data-word')] = true;
                        dragCount++;
                        msgDiv.innerHTML = `✅ Shabash! (${dragCount}/${dragCompareData.length})`;
                        msgDiv.style.background = '#4CAF50';
                        render();
                    } else {
                        msgDiv.innerHTML = `❌ Ghalat! Try again!`;
                        msgDiv.style.background = '#f44336';
                        setTimeout(() => msgDiv.innerHTML = '', 1000);
                    }
                    selectedDragWord.classList.remove('selected');
                    selectedDragWord = null;
                }
            });
        });
    }
    render();
}

// ==================== MODULE 5 ====================
function setupTrickyGame() {
    trickyList = [...trickyData];
    trickyIndex = 0;
    loadTricky();
}

function loadTricky() {
    const container = document.getElementById('trickyGame');
    const msgDiv = document.getElementById('trickyMessage');
    if (trickyIndex >= trickyList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Sab tricky solve! 🎉</h3>';
        return;
    }
    const item = trickyList[trickyIndex];
    const options = ["in", "on", "under"];
    container.innerHTML = `<div class="choice-question"><p>${item.text}</p><div class="choice-options">${options.map(opt => `<button class="choice-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.answer) {
                trickyIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${trickyIndex}/${trickyList.length})`;
                msgDiv.style.background = '#4CAF50';
                loadTricky();
            } else {
                msgDiv.innerHTML = `❌ Ghalat! Sahi answer "${item.answer}" hai.`;
                msgDiv.style.background = '#f44336';
                setTimeout(() => msgDiv.innerHTML = '', 1500);
            }
        });
    });
}

// ==================== MODULE 6 ====================
function setupMixedQuiz() {
    const container = document.getElementById('mixedQuizContainer');
    if (!container) return;
    let quizHTML = '';
    quizData.forEach((q, idx) => {
        quizHTML += `<div class="quiz-question"><p>${idx+1}. ${q.q}</p><div class="quiz-options">${q.opt.map(opt => `<label class="quiz-option"><input type="radio" name="q${idx}" value="${opt}"><span>${opt}</span></label>`).join('')}</div></div>`;
    });
    container.innerHTML = quizHTML;
    document.getElementById('submitMixedQuiz')?.addEventListener('click', () => {
        let score = 0;
        quizData.forEach((q, idx) => {
            const selected = document.querySelector(`input[name="q${idx}"]:checked`);
            if (selected && selected.value === q.correct) score++;
        });
        const resultDiv = document.getElementById('mixedQuizResult');
        resultDiv.innerHTML = `🎉 Aapne ${score}/${quizData.length} sahi jawab diye! 🎉`;
        resultDiv.style.background = 'rgba(76,175,80,0.3)';
    });
}

// ==================== MODULE 7: ADVANCED CHATBOT ====================
function initModule7() {
    if (chatState.initialized) return;
    chatState.initialized = true;
    
    chatState = {
        userName: "", currentIndex: 0, wrongAttempts: 0, score: 0, answered: 0, streak: 0, waitingForName: true, initialized: true
    };
    
    updateChatScore();
    setupSpeechRecognition();
    
    const sendBtn = document.getElementById('sendBtn');
    const chatInput = document.getElementById('chatInput');
    if (sendBtn) {
        const newBtn = sendBtn.cloneNode(true);
        sendBtn.parentNode.replaceChild(newBtn, sendBtn);
        newBtn.addEventListener('click', sendChatMessage);
    }
    if (chatInput) {
        const newInput = chatInput.cloneNode(true);
        chatInput.parentNode.replaceChild(newInput, chatInput);
        newInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendChatMessage(); });
    }
}

function updateChatScore() {
    const scoreEl = document.getElementById('chatScore');
    const streakEl = document.getElementById('streakBadge');
    if (scoreEl) scoreEl.innerText = `Score: ${chatState.score}/${chatState.answered || 0}`;
    if (streakEl) streakEl.innerText = `🔥 ${chatState.streak}`;
}

function getGrammarBreakdown(word, question) {
    const w = word.toLowerCase();
    let analysis = `📖 GRAMMAR:\n`;
    if (w === "am") analysis += `"am" → Verb 'to be' | 1st Person Singular | Urdu: "hoon"\n`;
    else if (w === "is") analysis += `"is" → Verb 'to be' | 3rd Person Singular | Urdu: "hai"\n`;
    else if (w === "are") analysis += `"are" → Verb 'to be' | Plural | Urdu: "hain"\n`;
    else if (["in","on","under","beside","at","of","for"].includes(w)) 
        analysis += `"${w}" → PREPOSITION (Harf Jar) | Shows position/relation\n`;
    else if (["he","she","it","they","we","i"].includes(w))
        analysis += `"${w}" → SUBJECTIVE PRONOUN (فاعلی ضمیر)\n`;
    else if (["me","him","her","us","them"].includes(w))
        analysis += `"${w}" → OBJECTIVE PRONOUN (مفعولی ضمیر)\n`;
    else if (w === "children") analysis += `"children" → IRREGULAR PLURAL | Singular: child\n`;
    else if (w === "men") analysis += `"men" → IRREGULAR PLURAL | Singular: man\n`;
    else if (w === "teeth") analysis += `"teeth" → IRREGULAR PLURAL | Singular: tooth\n`;
    else if (w.endsWith("s")) analysis += `"${w}" → PLURAL NOUN (جمع)\n`;
    else analysis += `"${word}" → ${question?.grammar || "Common word"}\n`;
    
    analysis += `\n🔤 Type: ${question?.type || "word"} | 🕌 Urdu meaning included`;
    return analysis;
}

function sendChatMessage() {
    const inputBox = document.getElementById('chatInput');
    const messagesDiv = document.getElementById('chatMessages');
    let userText = inputBox.value.trim();
    if (!userText) return;
    
    messagesDiv.innerHTML += `<div class="user-message"><div class="message-content">${escapeHtml(userText)}</div></div>`;
    inputBox.value = "";
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    setTimeout(() => {
        let reply = "";
        
        if (chatState.waitingForName) {
            const nameMatch = userText.match(/my name is (\w+)/i) || userText.match(/i am (\w+)/i) || userText.match(/^(\w+)$/);
            if (nameMatch) {
                chatState.userName = nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1);
                chatState.waitingForName = false;
                reply = `🎉 Welcome ${chatState.userName}! 🎉\n\n📚 50 Grammar Questions!\n📖 Topics: Nouns, Verbs, Prepositions, Pronouns, Singular/Plural\n\n━━━━━━━━━━━━━━━━━━━━━━\n📝 Q1: ${grammarQuestions[0].q}\n💡 Example: "${grammarQuestions[0].correctExample}"\n━━━━━━━━━━━━━━━━━━━━━━`;
            } else {
                reply = `🤗 Please tell me your name.\n💬 Example: "My name is Ahmed"`;
            }
        } 
        else if (chatState.currentIndex >= grammarQuestions.length) {
            const percent = Math.round((chatState.score / chatState.answered) * 100);
            reply = `🎉🎉 CONGRATULATIONS ${chatState.userName}! 🎉🎉\n\n🏆 FINAL SCORE: ${chatState.score}/${chatState.answered}\n📊 PERCENTAGE: ${percent}%\n🔥 STREAK: ${chatState.streak}\n\n🌟 You mastered all grammar! Refresh to play again! 🌟`;
        }
        else {
            const currentQ = grammarQuestions[chatState.currentIndex];
            const isMatch = currentQ.expected.some(key => userText.toLowerCase().includes(key.toLowerCase()));
            
            if (isMatch) {
                chatState.score++;
                chatState.answered++;
                chatState.streak++;
                chatState.wrongAttempts = 0;
                
                reply = `✅ CORRECT! Great job!\n\n📊 Score: ${chatState.score}/${chatState.answered}\n🔥 Streak: ${chatState.streak}\n\n${getGrammarBreakdown(userText.toLowerCase(), currentQ)}\n\n📚 Example: "${currentQ.correctExample}"\n\n━━━━━━━━━━━━━━━━━━━━━━\n📝 Next: ${grammarQuestions[chatState.currentIndex + 1]?.q || "All done!"}\n━━━━━━━━━━━━━━━━━━━━━━`;
                chatState.currentIndex++;
            } 
            else if (chatState.wrongAttempts === 0) {
                chatState.wrongAttempts++;
                reply = `❌ Not correct.\n\n💡 TRY: "${currentQ.correctExample}"\n📖 Grammar: ${currentQ.grammar}\n\n🔄 You have 1 more try.`;
            }
            else {
                chatState.answered++;
                chatState.streak = 0;
                reply = `❌ Correct answer: ${currentQ.expected.join(" or ")}\n\n📖 Grammar: ${currentQ.grammar}\n💡 Example: "${currentQ.correctExample}"\n\n${getGrammarBreakdown(currentQ.expected[0], currentQ)}\n\n━━━━━━━━━━━━━━━━━━━━━━\n📝 Next: ${grammarQuestions[chatState.currentIndex + 1]?.q || "All done!"}\n━━━━━━━━━━━━━━━━━━━━━━`;
                chatState.currentIndex++;
                chatState.wrongAttempts = 0;
            }
        }
        
        messagesDiv.innerHTML += `<div class="bot-message"><span class="bot-icon">🤖</span><div class="message-content">${reply.replace(/\n/g, '<br>')}</div></div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        updateChatScore();
    }, 500);
}

function setupSpeechRecognition() {
    const micBtn = document.getElementById('micBtn');
    const voiceStatus = document.getElementById('voiceStatus');
    if (!micBtn) return;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        micBtn.style.display = 'none';
        if (voiceStatus) voiceStatus.innerText = '⚠️ Speech not supported';
        return;
    }
    
    let recognition = null;
    let isListening = false;
    
    micBtn.addEventListener('click', () => {
        if (isListening) {
            if (recognition) recognition.stop();
            return;
        }
        
        try {
            recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            
            recognition.onstart = () => {
                isListening = true;
                micBtn.classList.add('listening');
                if (voiceStatus) voiceStatus.innerText = '🎤 Listening... Speak now!';
            };
            
            recognition.onresult = (event) => {
                const spokenText = event.results[0][0].transcript;
                const inputBox = document.getElementById('chatInput');
                if (inputBox) {
                    inputBox.value = spokenText;
                    if (voiceStatus) voiceStatus.innerText = `✅ You said: "${spokenText}"`;
                    setTimeout(() => sendChatMessage(), 100);
                }
            };
            
            recognition.onerror = (event) => {
                if (voiceStatus) voiceStatus.innerText = `❌ Error: ${event.error}`;
                setTimeout(() => { if (voiceStatus) voiceStatus.innerText = ''; }, 2000);
            };
            
            recognition.onend = () => {
                isListening = false;
                micBtn.classList.remove('listening');
            };
            
            recognition.start();
        } catch(e) {
            if (voiceStatus) voiceStatus.innerText = '❌ Microphone access denied';
        }
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== MODULE 8 ====================
function setupFinalQuiz() {
    const container = document.getElementById('finalQuizContainer');
    if (!container) return;
    let quizHTML = '';
    const finalData = [...quizData, ...quizData.slice(0, 2)];
    finalData.forEach((q, idx) => {
        quizHTML += `<div class="quiz-question"><p>${idx+1}. ${q.q}</p><div class="quiz-options">${q.opt.map(opt => `<label class="quiz-option"><input type="radio" name="final${idx}" value="${opt}"><span>${opt}</span></label>`).join('')}</div></div>`;
    });
    container.innerHTML = quizHTML;
    
    document.getElementById('submitFinalQuiz')?.addEventListener('click', () => {
        let score = 0;
        finalData.forEach((q, idx) => {
            const selected = document.querySelector(`input[name="final${idx}"]:checked`);
            if (selected && selected.value === q.correct) score++;
        });
        const resultDiv = document.getElementById('finalQuizResult');
        resultDiv.innerHTML = `🎉 ${chatState.userName || 'Student'}, aapne ${score}/${finalData.length} sahi jawab diye! 🎉`;
        resultDiv.style.background = 'rgba(76,175,80,0.3)';
    });
}