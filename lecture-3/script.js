// ==================== 20 WORDS DATA ====================
const wordsList = [
    { word: "I", urdu: "میں" }, { word: "You", urdu: "تم" }, { word: "He", urdu: "وہ" },
    { word: "She", urdu: "وہ" }, { word: "It", urdu: "یہ" }, { word: "We", urdu: "ہم" },
    { word: "They", urdu: "وہ" }, { word: "am", urdu: "ہوں" }, { word: "is", urdu: "ہے" },
    { word: "are", urdu: "ہیں" }, { word: "My", urdu: "میرا" }, { word: "Your", urdu: "تمہارا" },
    { word: "His", urdu: "اس کا" }, { word: "Her", urdu: "اس کا" }, { word: "Our", urdu: "ہمارا" },
    { word: "Their", urdu: "ان کا" }, { word: "not", urdu: "نہیں" }, { word: "happy", urdu: "خوش" },
    { word: "teacher", urdu: "استاد" }, { word: "student", urdu: "طالب علم" }
];

// ==================== MODULE 2: MATCH DATA (20) ====================
const matchData = [
    { sentence: "I am happy", pic: "😊 Happy boy" }, { sentence: "You are sad", pic: "😢 Sad person" },
    { sentence: "He is running", pic: "🏃‍♂️ Running boy" }, { sentence: "She is dancing", pic: "💃 Dancing girl" },
    { sentence: "It is a cat", pic: "🐱 Cat" }, { sentence: "We are eating", pic: "🍽️ Eating people" },
    { sentence: "They are playing", pic: "🏃‍♂️🏃‍♀️ Playing children" }, { sentence: "I am a student", pic: "🎓 Student" },
    { sentence: "You are a teacher", pic: "👩‍🏫 Teacher" }, { sentence: "He is a doctor", pic: "👨‍⚕️ Doctor" },
    { sentence: "She is a nurse", pic: "👩‍⚕️ Nurse" }, { sentence: "It is a book", pic: "📖 Book" },
    { sentence: "We are friends", pic: "👫 Friends" }, { sentence: "They are brothers", pic: "👬 Brothers" },
    { sentence: "I am reading", pic: "📚 Reading" }, { sentence: "You are writing", pic: "✍️ Writing" },
    { sentence: "He is sleeping", pic: "😴 Sleeping" }, { sentence: "She is singing", pic: "🎤 Singing" },
    { sentence: "We are laughing", pic: "😂 Laughing" }, { sentence: "They are crying", pic: "😭 Crying" }
];

// ==================== MODULE 3: JUMBLE DATA (20) ====================
const jumbleData = [
    { jumble: "am I happy", correct: "I am happy" }, { jumble: "are You sad", correct: "You are sad" },
    { jumble: "is He running", correct: "He is running" }, { jumble: "is She dancing", correct: "She is dancing" },
    { jumble: "is It cat a", correct: "It is a cat" }, { jumble: "are We eating", correct: "We are eating" },
    { jumble: "are They playing", correct: "They are playing" }, { jumble: "am I student a", correct: "I am a student" },
    { jumble: "are You teacher a", correct: "You are a teacher" }, { jumble: "is He doctor a", correct: "He is a doctor" },
    { jumble: "is She nurse a", correct: "She is a nurse" }, { jumble: "is It book a", correct: "It is a book" },
    { jumble: "are We friends", correct: "We are friends" }, { jumble: "are They brothers", correct: "They are brothers" },
    { jumble: "am I reading", correct: "I am reading" }, { jumble: "are You writing", correct: "You are writing" },
    { jumble: "is He sleeping", correct: "He is sleeping" }, { jumble: "is She singing", correct: "She is singing" },
    { jumble: "are We laughing", correct: "We are laughing" }, { jumble: "are They crying", correct: "They are crying" }
];

// ==================== MODULE 4: FILL DATA (20) ====================
const fillData = [
    { text: "I ___ happy", answer: "am" }, { text: "You ___ sad", answer: "are" },
    { text: "He ___ running", answer: "is" }, { text: "She ___ dancing", answer: "is" },
    { text: "It ___ a cat", answer: "is" }, { text: "We ___ eating", answer: "are" },
    { text: "They ___ playing", answer: "are" }, { text: "I ___ a student", answer: "am" },
    { text: "You ___ a teacher", answer: "are" }, { text: "He ___ a doctor", answer: "is" },
    { text: "She ___ a nurse", answer: "is" }, { text: "It ___ a book", answer: "is" },
    { text: "We ___ friends", answer: "are" }, { text: "They ___ brothers", answer: "are" },
    { text: "I ___ reading", answer: "am" }, { text: "You ___ writing", answer: "are" },
    { text: "He ___ sleeping", answer: "is" }, { text: "She ___ singing", answer: "is" },
    { text: "We ___ laughing", answer: "are" }, { text: "They ___ crying", answer: "are" }
];

// ==================== MODULE 5: PRONOUN DATA (20) ====================
const pronounData = [
    { text: "___ am happy", options: ["I", "You", "He"], answer: "I" },
    { text: "___ are sad", options: ["I", "You", "She"], answer: "You" },
    { text: "___ is running", options: ["He", "We", "They"], answer: "He" },
    { text: "___ is dancing", options: ["She", "I", "You"], answer: "She" },
    { text: "___ is a cat", options: ["It", "We", "They"], answer: "It" },
    { text: "___ are eating", options: ["We", "He", "She"], answer: "We" },
    { text: "___ are playing", options: ["They", "I", "He"], answer: "They" },
    { text: "___ am a student", options: ["I", "You", "She"], answer: "I" },
    { text: "___ are a teacher", options: ["You", "He", "It"], answer: "You" },
    { text: "___ is a doctor", options: ["He", "We", "They"], answer: "He" },
    { text: "___ is a nurse", options: ["She", "I", "You"], answer: "She" },
    { text: "___ is a book", options: ["It", "We", "They"], answer: "It" },
    { text: "___ are friends", options: ["We", "He", "She"], answer: "We" },
    { text: "___ are brothers", options: ["They", "I", "He"], answer: "They" },
    { text: "___ am reading", options: ["I", "You", "She"], answer: "I" },
    { text: "___ are writing", options: ["You", "He", "It"], answer: "You" },
    { text: "___ is sleeping", options: ["He", "We", "They"], answer: "He" },
    { text: "___ is singing", options: ["She", "I", "You"], answer: "She" },
    { text: "___ are laughing", options: ["We", "He", "She"], answer: "We" },
    { text: "___ are crying", options: ["They", "I", "He"], answer: "They" }
];

// ==================== MODULE 6: VERB DATA (20) ====================
const verbData = [
    { text: "I ___ happy", options: ["am", "is", "are"], answer: "am" },
    { text: "You ___ sad", options: ["am", "is", "are"], answer: "are" },
    { text: "He ___ running", options: ["am", "is", "are"], answer: "is" },
    { text: "She ___ dancing", options: ["am", "is", "are"], answer: "is" },
    { text: "It ___ a cat", options: ["am", "is", "are"], answer: "is" },
    { text: "We ___ eating", options: ["am", "is", "are"], answer: "are" },
    { text: "They ___ playing", options: ["am", "is", "are"], answer: "are" },
    { text: "I ___ a student", options: ["am", "is", "are"], answer: "am" },
    { text: "You ___ a teacher", options: ["am", "is", "are"], answer: "are" },
    { text: "He ___ a doctor", options: ["am", "is", "are"], answer: "is" },
    { text: "She ___ a nurse", options: ["am", "is", "are"], answer: "is" },
    { text: "It ___ a book", options: ["am", "is", "are"], answer: "is" },
    { text: "We ___ friends", options: ["am", "is", "are"], answer: "are" },
    { text: "They ___ brothers", options: ["am", "is", "are"], answer: "are" },
    { text: "I ___ reading", options: ["am", "is", "are"], answer: "am" },
    { text: "You ___ writing", options: ["am", "is", "are"], answer: "are" },
    { text: "He ___ sleeping", options: ["am", "is", "are"], answer: "is" },
    { text: "She ___ singing", options: ["am", "is", "are"], answer: "is" },
    { text: "We ___ laughing", options: ["am", "is", "are"], answer: "are" },
    { text: "They ___ crying", options: ["am", "is", "are"], answer: "are" }
];

// ==================== MODULE 7: NEGATIVE DATA - COMPLEX (20) ====================
const negativeData = [
    { sentence: "I am happy", correct: "I am not happy", verb: "am", subject: "I" },
    { sentence: "You are sad", correct: "You are not sad", verb: "are", subject: "You" },
    { sentence: "He is running", correct: "He is not running", verb: "is", subject: "He" },
    { sentence: "She is dancing", correct: "She is not dancing", verb: "is", subject: "She" },
    { sentence: "It is a cat", correct: "It is not a cat", verb: "is", subject: "It" },
    { sentence: "We are eating", correct: "We are not eating", verb: "are", subject: "We" },
    { sentence: "They are playing", correct: "They are not playing", verb: "are", subject: "They" },
    { sentence: "I am a student", correct: "I am not a student", verb: "am", subject: "I" },
    { sentence: "You are a teacher", correct: "You are not a teacher", verb: "are", subject: "You" },
    { sentence: "He is a doctor", correct: "He is not a doctor", verb: "is", subject: "He" },
    { sentence: "She is a nurse", correct: "She is not a nurse", verb: "is", subject: "She" },
    { sentence: "It is a book", correct: "It is not a book", verb: "is", subject: "It" },
    { sentence: "We are friends", correct: "We are not friends", verb: "are", subject: "We" },
    { sentence: "They are brothers", correct: "They are not brothers", verb: "are", subject: "They" },
    { sentence: "I am reading", correct: "I am not reading", verb: "am", subject: "I" },
    { sentence: "You are writing", correct: "You are not writing", verb: "are", subject: "You" },
    { sentence: "He is sleeping", correct: "He is not sleeping", verb: "is", subject: "He" },
    { sentence: "She is singing", correct: "She is not singing", verb: "is", subject: "She" },
    { sentence: "We are laughing", correct: "We are not laughing", verb: "are", subject: "We" },
    { sentence: "They are crying", correct: "They are not crying", verb: "are", subject: "They" }
];

// ==================== MODULE 8: INTERROGATIVE DATA - COMPLEX (20) ====================
const interrogativeData = [
    { sentence: "You are a student", correct: "Are you a student?", verb: "are", subject: "you" },
    { sentence: "He is playing", correct: "Is he playing?", verb: "is", subject: "he" },
    { sentence: "She is a teacher", correct: "Is she a teacher?", verb: "is", subject: "she" },
    { sentence: "I am happy", correct: "Am I happy?", verb: "am", subject: "I" },
    { sentence: "You are sad", correct: "Are you sad?", verb: "are", subject: "you" },
    { sentence: "He is a doctor", correct: "Is he a doctor?", verb: "is", subject: "he" },
    { sentence: "She is dancing", correct: "Is she dancing?", verb: "is", subject: "she" },
    { sentence: "It is a cat", correct: "Is it a cat?", verb: "is", subject: "it" },
    { sentence: "We are friends", correct: "Are we friends?", verb: "are", subject: "we" },
    { sentence: "They are playing", correct: "Are they playing?", verb: "are", subject: "they" },
    { sentence: "You are writing", correct: "Are you writing?", verb: "are", subject: "you" },
    { sentence: "He is sleeping", correct: "Is he sleeping?", verb: "is", subject: "he" },
    { sentence: "She is singing", correct: "Is she singing?", verb: "is", subject: "she" },
    { sentence: "We are eating", correct: "Are we eating?", verb: "are", subject: "we" },
    { sentence: "They are crying", correct: "Are they crying?", verb: "are", subject: "they" },
    { sentence: "I am reading", correct: "Am I reading?", verb: "am", subject: "I" },
    { sentence: "You are a teacher", correct: "Are you a teacher?", verb: "are", subject: "you" },
    { sentence: "He is running", correct: "Is he running?", verb: "is", subject: "he" },
    { sentence: "She is a nurse", correct: "Is she a nurse?", verb: "is", subject: "she" },
    { sentence: "We are laughing", correct: "Are we laughing?", verb: "are", subject: "we" }
];

// ==================== MODULE 9: TRUE/FALSE DATA (20) ====================
const tfData = [
    { sentence: "She are a teacher", correct: false, correction: "She is a teacher" },
    { sentence: "I am happy", correct: true, correction: "" },
    { sentence: "They is playing", correct: false, correction: "They are playing" },
    { sentence: "He is running", correct: true, correction: "" },
    { sentence: "We am friends", correct: false, correction: "We are friends" },
    { sentence: "You are sad", correct: true, correction: "" },
    { sentence: "It are a cat", correct: false, correction: "It is a cat" },
    { sentence: "She is dancing", correct: true, correction: "" },
    { sentence: "I are a student", correct: false, correction: "I am a student" },
    { sentence: "He are a doctor", correct: false, correction: "He is a doctor" },
    { sentence: "We are eating", correct: true, correction: "" },
    { sentence: "They is crying", correct: false, correction: "They are crying" },
    { sentence: "You is writing", correct: false, correction: "You are writing" },
    { sentence: "She is singing", correct: true, correction: "" },
    { sentence: "It is a book", correct: true, correction: "" },
    { sentence: "We is laughing", correct: false, correction: "We are laughing" },
    { sentence: "He is sleeping", correct: true, correction: "" },
    { sentence: "I am reading", correct: true, correction: "" },
    { sentence: "You are a teacher", correct: true, correction: "" },
    { sentence: "They are brothers", correct: true, correction: "" }
];

// ==================== MODULE 10: QUIZ DATA (20) ====================
const quizData = [
    { q: "\"I\" ka Urdu kya hai?", opt: ["تم", "میں", "وہ", "ہم"], correct: "میں" },
    { q: "Sahi sentence konsa hai?", opt: ["I is happy", "I am happy", "I are happy"], correct: "I am happy" },
    { q: "\"She\" ke saath konsa verb aayega?", opt: ["am", "is", "are"], correct: "is" },
    { q: "\"They\" ke saath konsa verb aayega?", opt: ["am", "is", "are"], correct: "are" },
    { q: "\"We\" ka Urdu kya hai?", opt: ["تم", "وہ", "ہم", "میں"], correct: "ہم" },
    { q: "\"He\" ke saath konsa verb aayega?", opt: ["am", "is", "are"], correct: "is" },
    { q: "Negative of 'I am happy'?", opt: ["I am not happy", "I not am happy", "I happy not"], correct: "I am not happy" },
    { q: "Interrogative of 'You are a student'?", opt: ["Are you a student?", "You are a student?", "Is you a student?"], correct: "Are you a student?" },
    { q: "\"am\" kis ke saath use hota hai?", opt: ["I", "He", "She"], correct: "I" },
    { q: "\"are\" kis ke saath use hota hai?", opt: ["I", "He", "They"], correct: "They" },
    { q: "\"is\" kis ke saath use hota hai?", opt: ["I", "He", "They"], correct: "He" },
    { q: "Correct sentence: She ___ a nurse", opt: ["am", "is", "are"], correct: "is" },
    { q: "Correct sentence: They ___ playing", opt: ["am", "is", "are"], correct: "are" },
    { q: "Correct sentence: I ___ reading", opt: ["am", "is", "are"], correct: "am" },
    { q: "Negative of 'He is running'?", opt: ["He is not running", "He not is running", "He running not"], correct: "He is not running" },
    { q: "Interrogative of 'She is a teacher'?", opt: ["Is she a teacher?", "She is a teacher?", "Are she a teacher?"], correct: "Is she a teacher?" },
    { q: "Correct pronoun: ___ is dancing", opt: ["I", "He", "She"], correct: "She" },
    { q: "Correct pronoun: ___ are friends", opt: ["He", "She", "We"], correct: "We" },
    { q: "Correct pronoun: ___ am a student", opt: ["I", "You", "He"], correct: "I" },
    { q: "Correct pronoun: ___ are playing", opt: ["He", "She", "They"], correct: "They" }
];

// ==================== NAVIGATION ====================
let currentModule = 1;
const totalModules = 10;

document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    createDots();
    setupNavigation();
    setupWordList();
    setupMatchGame();
    setupJumbleGame();
    setupFillGame();
    setupPronounGame();
    setupVerbGame();
    setupNegativeGame();
    setupInterrogativeGame();
    setupTrueFalseGame();
    setupQuiz();
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

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.85;
        utterance.volume = 0.6;
        window.speechSynthesis.speak(utterance);
    }
}

function goHome() {
    window.location.href = '../index.html';
}

// ==================== MODULE 1 ====================
function setupWordList() {
    const container = document.getElementById('wordsGrid');
    if (!container) return;
    let html = '';
    wordsList.forEach(item => {
        html += `<div class="word-card" data-word="${item.word}">${item.word} <span class="urdu">(${item.urdu})</span></div>`;
    });
    container.innerHTML = html;
    document.querySelectorAll('.word-card').forEach(card => {
        card.addEventListener('click', () => speak(card.getAttribute('data-word')));
    });
}

// ==================== MODULE 2 ====================
let selectedSentence = null;
let sentenceMatched = {};

function setupMatchGame() {
    const sentencesCol = document.getElementById('sentencesCol');
    const picsCol = document.getElementById('picturesCol');
    const msgDiv = document.getElementById('matchMessage');
    if (!sentencesCol) return;

    sentenceMatched = {};
    matchData.forEach(item => { sentenceMatched[item.sentence] = false; });
    let matchedCount = 0;

    function render() {
        sentencesCol.innerHTML = '';
        picsCol.innerHTML = '';
        matchData.forEach(item => {
            if (sentenceMatched[item.sentence]) {
                sentencesCol.innerHTML += `<div class="match-sentence matched" data-sentence="${item.sentence}">✅ ${item.sentence}</div>`;
            } else {
                sentencesCol.innerHTML += `<div class="match-sentence" data-sentence="${item.sentence}">${item.sentence}</div>`;
            }
        });
        matchData.forEach(item => {
            if (sentenceMatched[item.sentence]) {
                picsCol.innerHTML += `<div class="match-pic-sentence matched" data-sentence="${item.sentence}">✅ ${item.pic}</div>`;
            } else {
                picsCol.innerHTML += `<div class="match-pic-sentence" data-sentence="${item.sentence}">${item.pic}</div>`;
            }
        });

        document.querySelectorAll('.match-sentence:not(.matched)').forEach(s => {
            s.addEventListener('click', () => {
                document.querySelectorAll('.match-sentence').forEach(el => el.classList.remove('selected'));
                s.classList.add('selected');
                selectedSentence = s;
            });
        });

        document.querySelectorAll('.match-pic-sentence:not(.matched)').forEach(p => {
            p.addEventListener('click', () => {
                if (selectedSentence && !selectedSentence.classList.contains('matched')) {
                    const sentence = selectedSentence.getAttribute('data-sentence');
                    const picSentence = p.getAttribute('data-sentence');
                    if (sentence === picSentence && !sentenceMatched[sentence]) {
                        sentenceMatched[sentence] = true;
                        matchedCount++;
                        msgDiv.innerHTML = `✅ Shabash! (${matchedCount}/20) "${sentence}" sahi match hua!`;
                        msgDiv.style.background = '#4CAF50';
                        speak('Shabash');
                        render();
                        if (matchedCount === matchData.length) msgDiv.innerHTML = '🎉 Mubarak! Sab 20 match ho gaye! 🎉';
                    } else {
                        msgDiv.innerHTML = '❌ Ghalat! Try again!';
                        msgDiv.style.background = '#f44336';
                        speak('Ghalat');
                    }
                    selectedSentence.classList.remove('selected');
                    selectedSentence = null;
                    setTimeout(() => { if (!msgDiv.innerHTML.includes('Mubarak')) msgDiv.innerHTML = ''; }, 1500);
                } else if (!selectedSentence) {
                    msgDiv.innerHTML = '👉 Pehle sentence select karo!';
                    msgDiv.style.background = '#ff9800';
                    setTimeout(() => msgDiv.innerHTML = '', 1000);
                }
            });
        });
    }
    render();
}

// ==================== MODULE 3 ====================
let jumbleIndex = 0;
let jumbleList = [];

function setupJumbleGame() {
    jumbleList = [...jumbleData].sort(() => Math.random() - 0.5);
    jumbleIndex = 0;
    loadJumble();
}

function loadJumble() {
    if (jumbleIndex >= jumbleList.length) {
        document.getElementById('jumbleMessage').innerHTML = '🎉 Mubarak! Aapne sab 20 jumble solve kar liye! 🎉';
        document.getElementById('jumbleQuestion').innerHTML = '🎉 COMPLETE! 🎉';
        document.getElementById('jumbleOptions').innerHTML = '';
        return;
    }
    const item = jumbleList[jumbleIndex];
    document.getElementById('jumbleQuestion').innerHTML = `🔀 ${item.jumble}`;
    const wrongs = ["I happy am", "you sad are", "he running is", "she dancing is", "we eating are"];
    const options = [item.correct, ...wrongs.slice(0, 3)].sort(() => Math.random() - 0.5);
    const container = document.getElementById('jumbleOptions');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('jumble-option');
        btn.addEventListener('click', () => {
            const msgDiv = document.getElementById('jumbleMessage');
            if (opt === item.correct) {
                jumbleIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${jumbleIndex}/20) Sahi jawab!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadJumble();
            } else {
                msgDiv.innerHTML = '❌ Ghalat! Dobara koshish karo';
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (jumbleIndex < jumbleList.length) msgDiv.innerHTML = ''; }, 1000);
        });
        container.appendChild(btn);
    });
}

// ==================== MODULE 4 ====================
let fillIndex = 0;
let fillList = [];

function setupFillGame() {
    fillList = [...fillData].sort(() => Math.random() - 0.5);
    fillIndex = 0;
    loadFill();
}

function loadFill() {
    const container = document.getElementById('fillGame');
    const msgDiv = document.getElementById('fillMessage');
    if (fillIndex >= fillList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Aapne sab 20 fill kar liye! 🎉</h3>';
        return;
    }
    const item = fillList[fillIndex];
    container.innerHTML = `<div class="fill-question"><p>${item.text}</p><div class="fill-options">${['am','is','are'].map(opt => `<button class="fill-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.fill-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.answer) {
                fillIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${fillIndex}/20) Sahi jawab!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadFill();
            } else {
                msgDiv.innerHTML = '❌ Ghalat! Dobara try karo';
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (fillIndex < fillList.length) msgDiv.innerHTML = ''; }, 1000);
        });
    });
}

// ==================== MODULE 5 ====================
let pronounIndex = 0;
let pronounList = [];

function setupPronounGame() {
    pronounList = [...pronounData].sort(() => Math.random() - 0.5);
    pronounIndex = 0;
    loadPronoun();
}

function loadPronoun() {
    const container = document.getElementById('pronounGame');
    const msgDiv = document.getElementById('pronounMessage');
    if (pronounIndex >= pronounList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Sab 20 pronoun sahi chune! 🎉</h3>';
        return;
    }
    const item = pronounList[pronounIndex];
    container.innerHTML = `<div class="choice-question"><p>${item.text}</p><div class="choice-options">${item.options.map(opt => `<button class="choice-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.answer) {
                pronounIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${pronounIndex}/20) Sahi pronoun!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadPronoun();
            } else {
                msgDiv.innerHTML = '❌ Ghalat! Dobara try karo';
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (pronounIndex < pronounList.length) msgDiv.innerHTML = ''; }, 1000);
        });
    });
}

// ==================== MODULE 6 ====================
let verbIndex = 0;
let verbList = [];

function setupVerbGame() {
    verbList = [...verbData].sort(() => Math.random() - 0.5);
    verbIndex = 0;
    loadVerb();
}

function loadVerb() {
    const container = document.getElementById('verbGame');
    const msgDiv = document.getElementById('verbMessage');
    if (verbIndex >= verbList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Sab 20 verb sahi chune! 🎉</h3>';
        return;
    }
    const item = verbList[verbIndex];
    container.innerHTML = `<div class="choice-question"><p>${item.text}</p><div class="choice-options">${item.options.map(opt => `<button class="choice-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.answer) {
                verbIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${verbIndex}/20) Sahi verb!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadVerb();
            } else {
                msgDiv.innerHTML = '❌ Ghalat! Dobara try karo';
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (verbIndex < verbList.length) msgDiv.innerHTML = ''; }, 1000);
        });
    });
}

// ==================== MODULE 7: COMPLEX NEGATIVE ====================
let negativeMatched = {};
let negativeCount = 0;
let selectedNegative = null;

function setupNegativeGame() {
    const container = document.getElementById('negativeGame');
    const msgDiv = document.getElementById('negativeMessage');
    negativeMatched = {};
    negativeData.forEach(item => { negativeMatched[item.sentence] = false; });
    negativeCount = 0;
    renderNegative();

    function renderNegative() {
        let wordsHTML = '<div class="drag-words"><h3 style="color:cyan">📝 Drag Words</h3>';
        wordsHTML += `<div class="drag-word" data-word="not">not</div>`;
        wordsHTML += '</div><div class="drop-zones"><h3 style="color:magenta">🎯 Drop Zones</h3>';
        negativeData.forEach(item => {
            if (negativeMatched[item.sentence]) {
                wordsHTML += `<div class="drop-zone filled">✅ ${item.correct}</div>`;
            } else {
                wordsHTML += `<div class="drop-zone" data-sentence="${item.sentence}" data-correct="${item.correct}" data-verb="${item.verb}">⬅️ ${item.sentence} → put "not" after ${item.verb}</div>`;
            }
        });
        wordsHTML += '</div>';
        container.innerHTML = wordsHTML;

        document.querySelectorAll('.drag-word').forEach(word => {
            word.addEventListener('click', () => {
                document.querySelectorAll('.drag-word').forEach(w => w.classList.remove('selected'));
                word.classList.add('selected');
                selectedNegative = word.getAttribute('data-word');
            });
        });

        document.querySelectorAll('.drop-zone:not(.filled)').forEach(zone => {
            zone.addEventListener('click', () => {
                if (selectedNegative) {
                    const correctSentence = zone.getAttribute('data-correct');
                    if (correctSentence && !negativeMatched[zone.getAttribute('data-sentence')]) {
                        negativeMatched[zone.getAttribute('data-sentence')] = true;
                        negativeCount++;
                        msgDiv.innerHTML = `✅ Shabash! (${negativeCount}/20) "${correctSentence}" sahi ban gaya!`;
                        msgDiv.style.background = '#4CAF50';
                        speak('Shabash');
                        renderNegative();
                        if (negativeCount === negativeData.length) msgDiv.innerHTML = '🎉 Mubarak! Sab 20 negative sentences ban gaye! 🎉';
                    } else {
                        msgDiv.innerHTML = '❌ Ghalat! Try again!';
                        msgDiv.style.background = '#f44336';
                        speak('Ghalat');
                    }
                    selectedNegative = null;
                    setTimeout(() => { if (!msgDiv.innerHTML.includes('Mubarak')) msgDiv.innerHTML = ''; }, 1500);
                } else {
                    msgDiv.innerHTML = '👉 Pehle "not" select karo!';
                    msgDiv.style.background = '#ff9800';
                    setTimeout(() => msgDiv.innerHTML = '', 1000);
                }
            });
        });
    }
}

// ==================== MODULE 8: COMPLEX INTERROGATIVE ====================
let interMatched = {};
let interCount = 0;
let selectedInter = null;

function setupInterrogativeGame() {
    const container = document.getElementById('interrogativeGame');
    const msgDiv = document.getElementById('interrogativeMessage');
    interMatched = {};
    interrogativeData.forEach(item => { interMatched[item.sentence] = false; });
    interCount = 0;
    renderInter();

    function renderInter() {
        let wordsHTML = '<div class="drag-words"><h3 style="color:cyan">📝 Drag Words</h3>';
        wordsHTML += `<div class="drag-word" data-word="Are">Are</div><div class="drag-word" data-word="Is">Is</div><div class="drag-word" data-word="Am">Am</div>`;
        wordsHTML += '</div><div class="drop-zones"><h3 style="color:magenta">🎯 Drop Zones</h3>';
        interrogativeData.forEach(item => {
            if (interMatched[item.sentence]) {
                wordsHTML += `<div class="drop-zone filled">✅ ${item.correct}</div>`;
            } else {
                wordsHTML += `<div class="drop-zone" data-sentence="${item.sentence}" data-correct="${item.correct}" data-verb="${item.verb}">⬅️ ${item.sentence} → put ${item.verb} at start</div>`;
            }
        });
        wordsHTML += '</div>';
        container.innerHTML = wordsHTML;

        document.querySelectorAll('.drag-word').forEach(word => {
            word.addEventListener('click', () => {
                document.querySelectorAll('.drag-word').forEach(w => w.classList.remove('selected'));
                word.classList.add('selected');
                selectedInter = word.getAttribute('data-word');
            });
        });

        document.querySelectorAll('.drop-zone:not(.filled)').forEach(zone => {
            zone.addEventListener('click', () => {
                if (selectedInter) {
                    const correctSentence = zone.getAttribute('data-correct');
                    const expectedVerb = zone.getAttribute('data-verb');
                    if (correctSentence && !interMatched[zone.getAttribute('data-sentence')] && selectedInter.toLowerCase() === expectedVerb) {
                        interMatched[zone.getAttribute('data-sentence')] = true;
                        interCount++;
                        msgDiv.innerHTML = `✅ Shabash! (${interCount}/20) "${correctSentence}" sahi ban gaya!`;
                        msgDiv.style.background = '#4CAF50';
                        speak('Shabash');
                        renderInter();
                        if (interCount === interrogativeData.length) msgDiv.innerHTML = '🎉 Mubarak! Sab 20 interrogative sentences ban gaye! 🎉';
                    } else {
                        msgDiv.innerHTML = `❌ Ghalat! Sahi helping verb "${expectedVerb}" hai. Try again!`;
                        msgDiv.style.background = '#f44336';
                        speak('Ghalat');
                    }
                    selectedInter = null;
                    setTimeout(() => { if (!msgDiv.innerHTML.includes('Mubarak')) msgDiv.innerHTML = ''; }, 1500);
                } else {
                    msgDiv.innerHTML = '👉 Pehle helping verb (Am/Is/Are) select karo!';
                    msgDiv.style.background = '#ff9800';
                    setTimeout(() => msgDiv.innerHTML = '', 1000);
                }
            });
        });
    }
}

// ==================== MODULE 9 ====================
let tfIndex = 0;
let tfList = [];

function setupTrueFalseGame() {
    tfList = [...tfData].sort(() => Math.random() - 0.5);
    tfIndex = 0;
    loadTrueFalse();
}

function loadTrueFalse() {
    const container = document.getElementById('tfGame');
    const msgDiv = document.getElementById('tfMessage');
    if (tfIndex >= tfList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Aapne sab 20 true/false solve kar liye! 🎉</h3>';
        return;
    }
    const item = tfList[tfIndex];
    container.innerHTML = `
        <div class="tf-question">
            <p>${item.sentence}</p>
            <div class="tf-options">
                <button class="tf-option" data-tf="true">✅ True</button>
                <button class="tf-option" data-tf="false">❌ False</button>
            </div>
            ${item.correction ? `<p style="color:#ffd966; margin-top:8px;">Hint: ${item.correction}</p>` : ''}
        </div>
    `;
    document.querySelectorAll('.tf-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const selected = btn.getAttribute('data-tf') === 'true';
            if (selected === item.correct) {
                tfIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${tfIndex}/20) Sahi jawab!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadTrueFalse();
            } else {
                msgDiv.innerHTML = `❌ Ghalat! ${item.correction ? `Sahi hai: ${item.correction}` : ''}`;
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (tfIndex < tfList.length) msgDiv.innerHTML = ''; }, 1500);
        });
    });
}

// ==================== MODULE 10 ====================
function setupQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container) return;
    
    const shuffled = [...quizData].sort(() => Math.random() - 0.5);
    let quizHTML = '';
    shuffled.forEach((q, idx) => {
        const shuffledOpt = [...q.opt].sort(() => Math.random() - 0.5);
        quizHTML += `
            <div class="quiz-question">
                <p>${idx+1}. ${q.q}</p>
                <div class="quiz-options">
                    ${shuffledOpt.map(opt => `
                        <label class="quiz-option">
                            <input type="radio" name="q${idx}" value="${opt}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = quizHTML;
    
    document.getElementById('submitQuiz')?.addEventListener('click', () => {
        let score = 0;
        shuffled.forEach((q, idx) => {
            const selected = document.querySelector(`input[name="q${idx}"]:checked`);
            if (selected && selected.value === q.correct) score++;
        });
        const resultDiv = document.getElementById('quizResult');
        resultDiv.innerHTML = `🎉 Aapne ${score}/${shuffled.length} sahi jawab diye! 🎉`;
        resultDiv.style.background = 'rgba(76,175,80,0.3)';
        speak(`Aapne ${score} sahi jawab diye`);
    });
}