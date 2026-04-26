// ==================== 20 WORDS DATA ====================
const wordsList = [
    { word: "cat", urdu: "بلی", pic: "🐱 Cat - بلی", jumble: "tca", fill: "c_t", fillAnswer: "a" },
    { word: "bat", urdu: "چمگادڑ", pic: "🦇 Bat - چمگادڑ", jumble: "bta", fill: "b_t", fillAnswer: "a" },
    { word: "dog", urdu: "کتا", pic: "🐕 Dog - کتا", jumble: "gdo", fill: "d_g", fillAnswer: "o" },
    { word: "rat", urdu: "چوہا", pic: "🐀 Rat - چوہا", jumble: "tra", fill: "r_t", fillAnswer: "a" },
    { word: "sun", urdu: "سورج", pic: "☀️ Sun - سورج", jumble: "nus", fill: "s_n", fillAnswer: "u" },
    { word: "moon", urdu: "چاند", pic: "🌙 Moon - چاند", jumble: "noom", fill: "m_n", fillAnswer: "oo" },
    { word: "star", urdu: "ستارہ", pic: "⭐ Star - ستارہ", jumble: "rats", fill: "st_r", fillAnswer: "a" },
    { word: "fish", urdu: "مچھلی", pic: "🐟 Fish - مچھلی", jumble: "hisf", fill: "f_sh", fillAnswer: "i" },
    { word: "bird", urdu: "پرندہ", pic: "🐦 Bird - پرندہ", jumble: "ribd", fill: "b_rd", fillAnswer: "i" },
    { word: "ant", urdu: "چیونٹی", pic: "🐜 Ant - چیونٹی", jumble: "nta", fill: "a_t", fillAnswer: "n" },
    { word: "car", urdu: "گاڑی", pic: "🚗 Car - گاڑی", jumble: "rca", fill: "c_r", fillAnswer: "a" },
    { word: "bus", urdu: "بس", pic: "🚌 Bus - بس", jumble: "sub", fill: "b_s", fillAnswer: "u" },
    { word: "apple", urdu: "سیب", pic: "🍎 Apple - سیب", jumble: "ppale", fill: "ap_le", fillAnswer: "p" },
    { word: "mango", urdu: "آم", pic: "🥭 Mango - آم", jumble: "gomna", fill: "ma_go", fillAnswer: "n" },
    { word: "grape", urdu: "انگور", pic: "🍇 Grape - انگور", jumble: "peg ar", fill: "gr_pe", fillAnswer: "a" },
    { word: "lion", urdu: "شیر", pic: "🦁 Lion - شیر", jumble: "noil", fill: "li_n", fillAnswer: "o" },
    { word: "tiger", urdu: "ببر شیر", pic: "🐯 Tiger - ببر شیر", jumble: "giret", fill: "ti_er", fillAnswer: "g" },
    { word: "elephant", urdu: "ہاتھی", pic: "🐘 Elephant - ہاتھی", jumble: "phantele", fill: "el_phant", fillAnswer: "e" },
    { word: "zebra", urdu: "زیبرا", pic: "🦓 Zebra - زیبرا", jumble: "breza", fill: "ze_ra", fillAnswer: "b" },
    { word: "monkey", urdu: "بندر", pic: "🐒 Monkey - بندر", jumble: "kynome", fill: "mon_ey", fillAnswer: "k" }
];

// ==================== NAVIGATION ====================
let currentModule = 1;
const totalModules = 6;

document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    createDots();
    setupNavigation();
    setupWordList();
    setupMatchGame();
    setupJumbleGame();
    setupFillGame();
    setupDragGame();
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

// ==================== MODULE 1: WORD LIST ====================
function setupWordList() {
    const container = document.getElementById('wordsGrid');
    if (!container) return;
    
    let html = '';
    wordsList.forEach(item => {
        html += `<div class="word-card" data-word="${item.word}">${item.word} <span class="urdu">(${item.urdu})</span></div>`;
    });
    container.innerHTML = html;
    
    document.querySelectorAll('.word-card').forEach(card => {
        card.addEventListener('click', () => {
            const word = card.getAttribute('data-word');
            speak(word);
        });
    });
}

// ==================== MODULE 2: MATCH GAME ====================
let selectedMatch = null;
let matchMatched = {};

function setupMatchGame() {
    const container = document.getElementById('matchGame');
    const msgDiv = document.getElementById('matchMessage');
    if (!container) return;
    
    matchMatched = {};
    wordsList.forEach(item => { matchMatched[item.word] = false; });
    let matchedCount = 0;
    
    function render() {
        const shuffledWords = [...wordsList].sort(() => Math.random() - 0.5);
        const shuffledPics = [...wordsList].sort(() => Math.random() - 0.5);
        
        let wordsHTML = '<div class="match-words-col">';
        let picsHTML = '<div class="match-pictures-col">';
        
        shuffledWords.forEach(item => {
            if (matchMatched[item.word]) {
                wordsHTML += `<div class="match-word matched" data-word="${item.word}">✅ ${item.word}</div>`;
            } else {
                wordsHTML += `<div class="match-word" data-word="${item.word}">${item.word}</div>`;
            }
        });
        
        shuffledPics.forEach(item => {
            if (matchMatched[item.word]) {
                picsHTML += `<div class="match-pic matched" data-word="${item.word}">✅ ${item.pic}</div>`;
            } else {
                picsHTML += `<div class="match-pic" data-word="${item.word}">${item.pic}</div>`;
            }
        });
        
        wordsHTML += '</div>';
        picsHTML += '</div>';
        container.innerHTML = wordsHTML + picsHTML;
        
        document.querySelectorAll('.match-word:not(.matched)').forEach(w => {
            w.addEventListener('click', () => {
                document.querySelectorAll('.match-word').forEach(el => el.classList.remove('selected'));
                w.classList.add('selected');
                selectedMatch = w;
            });
        });
        
        document.querySelectorAll('.match-pic:not(.matched)').forEach(p => {
            p.addEventListener('click', () => {
                if (selectedMatch && !selectedMatch.classList.contains('matched')) {
                    const word = selectedMatch.getAttribute('data-word');
                    const picWord = p.getAttribute('data-word');
                    
                    if (word === picWord && !matchMatched[word]) {
                        matchMatched[word] = true;
                        matchedCount++;
                        msgDiv.innerHTML = `✅ Shabash! "${word}" sahi match hua! (${matchedCount}/20)`;
                        msgDiv.style.background = '#4CAF50';
                        speak('Shabash');
                        render();
                        if (matchedCount === wordsList.length) {
                            msgDiv.innerHTML = '🎉 Mubarak! Aapne sab 20 words match kar liye! 🎉';
                        }
                    } else {
                        msgDiv.innerHTML = `❌ Ghalat! Try again!`;
                        msgDiv.style.background = '#f44336';
                        speak('Ghalat');
                    }
                    selectedMatch.classList.remove('selected');
                    selectedMatch = null;
                    setTimeout(() => {
                        if (!msgDiv.innerHTML.includes('Mubarak')) msgDiv.innerHTML = '';
                    }, 1500);
                } else if (!selectedMatch) {
                    msgDiv.innerHTML = '👉 Pehle word select karo!';
                    msgDiv.style.background = '#ff9800';
                    setTimeout(() => msgDiv.innerHTML = '', 1000);
                }
            });
        });
    }
    render();
}

// ==================== MODULE 3: JUMBLED LETTERS ====================
let jumbleIndex = 0;
let jumbleWords = [];

function setupJumbleGame() {
    jumbleWords = [...wordsList].sort(() => Math.random() - 0.5);
    jumbleIndex = 0;
    loadJumbleQuestion();
}

function loadJumbleQuestion() {
    if (jumbleIndex >= jumbleWords.length) {
        document.getElementById('jumbleMessage').innerHTML = '🎉 Mubarak! Aapne sab jumble solve kar liye! 🎉';
        document.getElementById('jumbleQuestion').innerHTML = '🎉 COMPLETE! 🎉';
        document.getElementById('jumbleOptions').innerHTML = '';
        return;
    }
    
    const item = jumbleWords[jumbleIndex];
    document.getElementById('jumbleQuestion').innerHTML = `🔀 ${item.jumble.toUpperCase()}`;
    
    const wrongs = [];
    while (wrongs.length < 3) {
        const random = jumbleWords[Math.floor(Math.random() * jumbleWords.length)];
        if (random.word !== item.word && !wrongs.includes(random.word)) {
            wrongs.push(random.word);
        }
    }
    const options = [item.word, ...wrongs].sort(() => Math.random() - 0.5);
    
    const container = document.getElementById('jumbleOptions');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('jumble-option');
        btn.addEventListener('click', () => {
            const msgDiv = document.getElementById('jumbleMessage');
            if (opt === item.word) {
                jumbleIndex++;
                msgDiv.innerHTML = '✅ Shabash! Sahi jawab!';
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadJumbleQuestion();
            } else {
                msgDiv.innerHTML = '❌ Ghalat! Dobara koshish karo';
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => {
                if (jumbleIndex < jumbleWords.length) msgDiv.innerHTML = '';
            }, 1000);
        });
        container.appendChild(btn);
    });
}

// ==================== MODULE 4: FILL IN BLANKS ====================
let fillIndex = 0;
let fillWords = [];

function setupFillGame() {
    fillWords = [...wordsList].sort(() => Math.random() - 0.5);
    fillIndex = 0;
    loadFillQuestion();
}

function loadFillQuestion() {
    const container = document.getElementById('fillGame');
    const msgDiv = document.getElementById('fillMessage');
    
    if (fillIndex >= fillWords.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Aapne sab fill blanks kar liye! 🎉</h3>';
        return;
    }
    
    const item = fillWords[fillIndex];
    container.innerHTML = `
        <div class="fill-question">
            <p>${item.fill.toUpperCase()}</p>
            <div class="fill-options">
                ${['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'oo', 'ee', 'aa'].map(opt => `
                    <button class="fill-option" data-opt="${opt}">${opt}</button>
                `).join('')}
            </div>
        </div>
    `;
    
    document.querySelectorAll('.fill-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const selected = btn.getAttribute('data-opt');
            if (selected === item.fillAnswer) {
                fillIndex++;
                msgDiv.innerHTML = '✅ Shabash! Sahi jawab!';
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadFillQuestion();
            } else {
                msgDiv.innerHTML = '❌ Ghalat! Dobara try karo';
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => {
                if (fillIndex < fillWords.length) msgDiv.innerHTML = '';
            }, 1000);
        });
    });
}

// ==================== MODULE 5: DRAG & DROP ====================
let dragMatched = {};
let dragMatchedCount = 0;
let selectedDragWord = null;

function setupDragGame() {
    const container = document.getElementById('dragGame');
    const msgDiv = document.getElementById('dragMessage');
    if (!container) return;
    
    dragMatched = {};
    wordsList.forEach(item => { dragMatched[item.word] = false; });
    dragMatchedCount = 0;
    renderDragGame();
    
    function renderDragGame() {
        const unmatched = wordsList.filter(item => !dragMatched[item.word]);
        const matched = wordsList.filter(item => dragMatched[item.word]);
        
        let wordsHTML = '<div class="drag-words"><h3 style="color:cyan">📝 Words</h3>';
        unmatched.forEach(item => {
            wordsHTML += `<div class="drag-word" data-word="${item.word}">${item.word}</div>`;
        });
        matched.forEach(item => {
            wordsHTML += `<div class="drag-word matched" data-word="${item.word}">✅ ${item.word}</div>`;
        });
        wordsHTML += '</div>';
        
        let dropHTML = '<div class="drop-zones"><h3 style="color:magenta">🎯 Drop Zones</h3>';
        wordsList.forEach(item => {
            if (dragMatched[item.word]) {
                dropHTML += `<div class="drop-zone filled" data-match="${item.word}">✅ ${item.pic}</div>`;
            } else {
                dropHTML += `<div class="drop-zone" data-match="${item.word}">⬅️ ${item.pic}</div>`;
            }
        });
        dropHTML += '</div>';
        
        container.innerHTML = wordsHTML + dropHTML;
        
        document.querySelectorAll('.drag-word:not(.matched)').forEach(word => {
            word.addEventListener('click', () => {
                document.querySelectorAll('.drag-word').forEach(w => w.classList.remove('selected'));
                word.classList.add('selected');
                selectedDragWord = word.getAttribute('data-word');
                msgDiv.innerHTML = `👉 Selected: "${selectedDragWord}". Tap correct drop zone!`;
                msgDiv.style.background = 'rgba(0,255,255,0.3)';
            });
        });
        
        document.querySelectorAll('.drop-zone:not(.filled)').forEach(zone => {
            zone.addEventListener('click', () => {
                if (selectedDragWord) {
                    const zoneMatch = zone.getAttribute('data-match');
                    if (selectedDragWord === zoneMatch && !dragMatched[selectedDragWord]) {
                        dragMatched[selectedDragWord] = true;
                        dragMatchedCount++;
                        msgDiv.innerHTML = `✅ Shabash! "${selectedDragWord}" sahi match hua! (${dragMatchedCount}/20)`;
                        msgDiv.style.background = '#4CAF50';
                        speak('Shabash');
                        renderDragGame();
                        if (dragMatchedCount === wordsList.length) {
                            msgDiv.innerHTML = '🎉 Mubarak! Aapne sab 20 words drag-drop kar liye! 🎉';
                        }
                    } else {
                        msgDiv.innerHTML = `❌ Ghalat! Try again!`;
                        msgDiv.style.background = '#f44336';
                        speak('Ghalat');
                    }
                    selectedDragWord = null;
                    setTimeout(() => {
                        if (!msgDiv.innerHTML.includes('Mubarak')) msgDiv.innerHTML = '';
                    }, 1500);
                } else {
                    msgDiv.innerHTML = '👉 Pehle word select karo!';
                    msgDiv.style.background = '#ff9800';
                    setTimeout(() => msgDiv.innerHTML = '', 1000);
                }
            });
        });
    }
}

// ==================== MODULE 6: QUIZ ====================
function setupQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container) return;
    
    const quizQuestions = wordsList.map(item => ({
        q: `"${item.word}" ka Urdu kya hai?`,
        opt: [item.urdu, wordsList[Math.floor(Math.random() * wordsList.length)].urdu, wordsList[Math.floor(Math.random() * wordsList.length)].urdu, wordsList[Math.floor(Math.random() * wordsList.length)].urdu],
        correct: item.urdu
    }));
    
    // Remove duplicate options in each question
    quizQuestions.forEach(q => {
        q.opt = [...new Set(q.opt)];
        while (q.opt.length < 4) {
            q.opt.push(wordsList[Math.floor(Math.random() * wordsList.length)].urdu);
        }
        q.opt = q.opt.sort(() => Math.random() - 0.5);
    });
    
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5);
    
    let quizHTML = '';
    shuffled.forEach((q, idx) => {
        quizHTML += `
            <div class="quiz-question">
                <p>${idx+1}. ${q.q}</p>
                <div class="quiz-options">
                    ${q.opt.map(opt => `
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