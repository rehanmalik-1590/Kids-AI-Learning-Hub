// Module Navigation
let currentModule = 1;
const totalModules = 10;

// Voice setup - Clear male voice only
let voice = null;

function initVoice() {
    if ('speechSynthesis' in window) {
        const voices = window.speechSynthesis.getVoices();
        // Try to get Urdu voice first
        voice = voices.find(v => v.lang === 'ur-PK' || v.lang === 'ur-IN' || v.lang.startsWith('ur'));
        // If no Urdu voice, use English male voice
        if (!voice) {
            voice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google'));
        }
        if (!voice) {
            voice = voices.find(v => v.lang === 'en-US');
        }
    }
}

// Call this after voices loaded
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = initVoice;
    setTimeout(initVoice, 100);
}

// Clear and simple voice function
function speak(text, isUrdu = true) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        if (isUrdu) {
            utterance.lang = 'ur-PK';
        } else {
            utterance.lang = 'en-US';
        }
        utterance.rate = 0.85;  // Slow rate for clarity
        utterance.pitch = 1;     // Normal pitch
        utterance.volume = 1;    // Full volume
        if (voice) utterance.voice = voice;
        window.speechSynthesis.speak(utterance);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    createDots();
    setupNavigation();
    setupTouchLetters();
    setupGame();
    setupQuiz();
    setupVoiceButtons();
    setupMatchGame();
    setupVowelsVoice();
    setupCapitalSmallVoice();
    setupRandomButton();
});

function updateProgress() {
    const percent = (currentModule / totalModules) * 100;
    const fill = document.getElementById('progressBarFill');
    if (fill) fill.style.width = percent + '%';
}

function createDots() {
    const container = document.getElementById('navDots');
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
    dots.forEach((dot, idx) => {
        if (idx + 1 === currentModule) dot.classList.add('active');
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

// Voice Buttons for Modules
function setupVoiceButtons() {
    document.querySelectorAll('.voice-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const moduleId = btn.getAttribute('data-voice');
            const moduleDiv = document.getElementById(moduleId);
            if (!moduleDiv) return;
            
            let textToSpeak = '';
            const urduText = moduleDiv.querySelector('.urdu-text')?.innerText || '';
            const engText = moduleDiv.querySelector('.english-text')?.innerText || '';
            
            if (moduleId === 'module1') {
                textToSpeak = urduText + '۔ ' + engText;
            } else if (moduleId === 'module5') {
                const hint = moduleDiv.querySelector('.urdu-hint')?.innerText || '';
                textToSpeak = hint + '۔ ' + engText;
            } else if (moduleId === 'module10') {
                textToSpeak = 'اب آپ فائنل کوئز میں ہیں۔ دس سوالات ہیں۔ ہر سوال کو غور سے پڑھیں اور صحیح جواب منتخب کریں۔ گڈ لک۔';
            } else {
                textToSpeak = urduText + '۔ ' + engText;
            }
            speak(textToSpeak, true);
        });
    });
}

// Touch Letters - ONLY on letter click
function setupTouchLetters() {
    const tiles = document.querySelectorAll('.letter-tile, .float-tile, .emoji-tile, .voice-letter');
    tiles.forEach(tile => {
        tile.addEventListener('click', (e) => {
            e.stopPropagation();
            const letter = tile.getAttribute('data-letter') || tile.innerText[0];
            const urdu = tile.getAttribute('data-urdu') || '';
            const eng = tile.getAttribute('data-eng') || '';
            const text = `${letter} - ${urdu}. ${eng}`;
            speak(text, true);
        });
    });
}

// Module 5 Match Game - Fixed with Shabash/Wrong messages
let selectedMatchItem = null;

function setupMatchGame() {
    const letters = document.querySelectorAll('.match-letter');
    const pictures = document.querySelectorAll('.match-pic');
    const msgDiv = document.getElementById('matchMessage');
    
    const matches = {
        'P': 'penguin',
        'Q': 'queen',
        'R': 'rabbit'
    };
    
    let matchedCount = 0;
    const totalMatches = 3;
    
    function resetSelection() {
        if (selectedMatchItem) {
            selectedMatchItem.classList.remove('selected');
            selectedMatchItem = null;
        }
    }
    
    letters.forEach(letter => {
        letter.addEventListener('click', (e) => {
            e.stopPropagation();
            if (letter.classList.contains('matched')) return;
            
            if (selectedMatchItem === null) {
                resetSelection();
                letter.classList.add('selected');
                selectedMatchItem = letter;
                if (msgDiv) {
                    msgDiv.innerHTML = '✅ اب تصویر کو ٹچ کریں | Now tap the picture';
                    msgDiv.style.background = 'rgba(0,255,255,0.3)';
                }
            } else if (selectedMatchItem.classList.contains('match-letter')) {
                resetSelection();
                letter.classList.add('selected');
                selectedMatchItem = letter;
            }
        });
    });
    
    pictures.forEach(pic => {
        pic.addEventListener('click', (e) => {
            e.stopPropagation();
            if (pic.classList.contains('matched')) return;
            
            if (selectedMatchItem && selectedMatchItem.classList.contains('match-letter')) {
                const letter = selectedMatchItem.getAttribute('data-letter');
                const picture = pic.getAttribute('data-pic');
                
                if (matches[letter] === picture) {
                    matchedCount++;
                    selectedMatchItem.classList.add('matched');
                    pic.classList.add('matched');
                    selectedMatchItem.style.background = '#4CAF50';
                    pic.style.background = '#4CAF50';
                    selectedMatchItem.style.color = 'white';
                    pic.style.color = 'white';
                    
                    if (msgDiv) {
                        msgDiv.innerHTML = `🎉 شاباش! ${letter} صحیح مل گیا! 🎉`;
                        msgDiv.style.background = '#4CAF50';
                        msgDiv.style.color = 'white';
                    }
                    // Speak "Shabash! Well done!"
                    speak(`شاباش! ${letter} صحیح مل گیا۔ Well done!`, true);
                    resetSelection();
                    
                    if (matchedCount === totalMatches) {
                        if (msgDiv) {
                            msgDiv.innerHTML = '🏆 مبارک ہو! آپ نے سب صحیح ملایا! 🏆';
                        }
                        speak('مبارک ہو! آپ نے سب صحیح ملایا! Congratulations!', true);
                    }
                } else {
                    if (msgDiv) {
                        msgDiv.innerHTML = `❌ غلط! دوبارہ کوشش کرو! ❌`;
                        msgDiv.style.background = '#f44336';
                        msgDiv.style.color = 'white';
                    }
                    // Speak "Wrong! Try again!"
                    speak(`غلط! دوبارہ کوشش کرو۔ Wrong! Try again!`, true);
                    resetSelection();
                }
            } else {
                if (msgDiv) {
                    msgDiv.innerHTML = '👉 پہلے حرف کو ٹچ کرو! 👈';
                    msgDiv.style.background = '#ff9800';
                }
                speak('پہلے حرف کو ٹچ کرو۔ First tap a letter.', true);
            }
        });
    });
}

// Module 7 Vowels Voice
function setupVowelsVoice() {
    document.querySelectorAll('.vowel-neon').forEach(v => {
        v.addEventListener('click', (e) => {
            e.stopPropagation();
            const vowel = v.getAttribute('data-vowel');
            speak(`${vowel} is a vowel. ${vowel} ایک حرف علت ہے۔`, false);
        });
    });
}

// Module 8 Capital & Small Voice
function setupCapitalSmallVoice() {
    document.querySelectorAll('.capital-box, .small-box').forEach(box => {
        box.addEventListener('click', (e) => {
            e.stopPropagation();
            const letter = box.getAttribute('data-letter');
            const type = box.getAttribute('data-type');
            if (type === 'capital') {
                speak(`Capital ${letter.toUpperCase()}`, false);
            } else {
                speak(`Small ${letter}`, false);
            }
        });
    });
}

// Module 8 Random Button - Changes existing boxes
function setupRandomButton() {
    const randomBtn = document.getElementById('randomLetterBtn');
    const container = document.getElementById('caseNewContainer');
    
    if (randomBtn && container) {
        randomBtn.addEventListener('click', () => {
            const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
            
            // Pick 3 random different letters
            const shuffled = [...letters];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            const randomLetters = shuffled.slice(0, 3);
            
            // Build new HTML with random letters
            let newHTML = '';
            randomLetters.forEach(letter => {
                const smallLetter = letter.toLowerCase();
                newHTML += `
                    <div class="capital-box" data-letter="${letter}" data-type="capital">${letter} <span class="capital-label">Capital ${letter}</span></div>
                    <div class="small-box" data-letter="${smallLetter}" data-type="small">${smallLetter} <span class="small-label">small ${smallLetter}</span></div>
                `;
            });
            
            container.innerHTML = newHTML;
            
            // Re-attach click events for new boxes
            document.querySelectorAll('.capital-box, .small-box').forEach(box => {
                box.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const letter = box.getAttribute('data-letter');
                    const type = box.getAttribute('data-type');
                    if (type === 'capital') {
                        speak(`Capital ${letter.toUpperCase()}`, false);
                    } else {
                        speak(`Small ${letter}`, false);
                    }
                });
            });
            
            // Speak confirmation
            speak('نئے حروف آگئے ہیں۔ انہیں ٹچ کریں۔ New letters appear. Tap them.', true);
        });
    }
}

// Module 9 Game - Fixed with Shabash/Wrong messages
function setupGame() {
    const gameDiv = document.getElementById('gameOptions');
    if (!gameDiv) return;
    
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    function newQuestion() {
        const correct = letters[Math.floor(Math.random() * letters.length)];
        const enQuestion = document.getElementById('gameQuestionEn');
        const urQuestion = document.getElementById('gameQuestionUr');
        
        if (enQuestion) enQuestion.innerHTML = `Find letter "${correct}"`;
        if (urQuestion) urQuestion.innerHTML = `${correct} حرف ڈھونڈو`;
        
        const wrongs = letters.filter(l => l !== correct).sort(() => 0.5 - Math.random()).slice(0, 3);
        const options = [correct, ...wrongs].sort(() => 0.5 - Math.random());
        
        gameDiv.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.innerText = opt;
            btn.classList.add('game-option');
            btn.addEventListener('click', () => {
                if (opt === correct) {
                    const msg = document.getElementById('gameMsg');
                    if (msg) {
                        msg.innerHTML = '🎉 شاباش! صحیح جواب! 🎉';
                        msg.style.background = '#4CAF50';
                        msg.style.color = 'white';
                    }
                    speak(`شاباش! ${correct} صحیح جواب ہے۔ Well done!`, true);
                    setTimeout(newQuestion, 1500);
                } else {
                    const msg = document.getElementById('gameMsg');
                    if (msg) {
                        msg.innerHTML = `❌ غلط! دوبارہ کوشش کرو! ❌`;
                        msg.style.background = '#f44336';
                        msg.style.color = 'white';
                    }
                    speak(`غلط! دوبارہ کوشش کرو۔ Wrong! Try again!`, true);
                }
            });
            gameDiv.appendChild(btn);
        });
    }
    newQuestion();
}

// Module 10 Quiz - Clear voice
function setupQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) return;
    
    const questions = [
        { q: "Alphabet 'A' ke baad konsa letter aata hai?", opt: ["B", "C", "D", "E"], correct: "B" },
        { q: "Letter 'C' kis cheez ki taraf ishara karta hai?", opt: ["Dog - کتا", "Cat - بلی", "Car - گاڑی", "Cake - کیک"], correct: "Cat - بلی" },
        { q: "Vowels mein se konsa letter hai?", opt: ["B", "C", "E", "D"], correct: "E" },
        { q: "'M' ke baad konsa letter aata hai?", opt: ["L", "N", "O", "K"], correct: "N" },
        { q: "Small letter 'b' ka capital kya hai?", opt: ["D", "P", "B", "R"], correct: "B" },
        { q: "Alphabet 'Z' kis picture ke liye hai?", opt: ["Zebra - زیبرا", "Zoo - چڑیا گھر", "Zip - زپ", "Zigzag"], correct: "Zebra - زیبرا" },
        { q: "In mein se konsa vowel nahi hai?", opt: ["A", "E", "I", "K"], correct: "K" },
        { q: "Letter 'S' kis cheez ke liye hai?", opt: ["Tiger", "Sun - سورج", "Moon", "Star"], correct: "Sun - سورج" },
        { q: "Alphabet 'F' ke baad konsa letter hai?", opt: ["E", "G", "H", "D"], correct: "G" },
        { q: "Alphabet 'P' ka small letter kya hai?", opt: ["b", "d", "p", "q"], correct: "p" }
    ];
    
    let quizHTML = '';
    questions.forEach((q, idx) => {
        quizHTML += `
            <div class="quiz-question" data-qidx="${idx}">
                <p>${idx+1}. ${q.q}</p>
                <div class="quiz-options">
                    ${q.opt.map(opt => `
                        <label class="quiz-option">
                            <input type="radio" name="q${idx}" value="${opt}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
                <button class="voice-btn-small" data-vq="${idx}">🔊 Read this question</button>
            </div>
        `;
    });
    quizContainer.innerHTML = quizHTML;
    
    // Voice for each question - clear and simple
    document.querySelectorAll('[data-vq]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = parseInt(btn.getAttribute('data-vq'));
            if (questions[idx]) {
                speak(questions[idx].q, true);
            }
        });
    });
    
    document.getElementById('submitQuiz')?.addEventListener('click', () => {
        let score = 0;
        questions.forEach((q, idx) => {
            const selected = document.querySelector(`input[name="q${idx}"]:checked`);
            if (selected && selected.value === q.correct) score++;
        });
        
        const resultDiv = document.getElementById('quizResult');
        const percent = (score / questions.length) * 100;
        let msg = '';
        if (percent === 100) msg = '🎉 PERFECT! You are a GENIUS! 🎉';
        else if (percent >= 70) msg = `👍 Good! ${score}/10 correct! 👍`;
        else if (percent >= 50) msg = `😊 ${score}/10 correct. Try again! 😊`;
        else msg = `📚 ${score}/10 correct. Review lesson and try again! 📚`;
        
        resultDiv.innerHTML = msg;
        resultDiv.style.background = 'rgba(0,255,255,0.3)';
        resultDiv.style.color = 'white';
        speak(`Aap ne ${score} mein se ${questions.length} sahih jawab diye. ${msg}`, true);
        
        if (percent === 100) celebrateConfetti();
    });
}

function celebrateConfetti() {
    for (let i = 0; i < 80; i++) {
        const conf = document.createElement('div');
        conf.style.position = 'fixed';
        conf.style.width = '12px';
        conf.style.height = '12px';
        conf.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        conf.style.left = Math.random() * window.innerWidth + 'px';
        conf.style.top = '-10px';
        conf.style.borderRadius = '50%';
        conf.style.pointerEvents = 'none';
        conf.style.zIndex = '9999';
        document.body.appendChild(conf);
        conf.animate([{ transform: 'translateY(0px)' }, { transform: `translateY(${window.innerHeight}px) rotate(360deg)` }], { duration: 1500 + Math.random() * 1000, easing: 'ease-out' });
        setTimeout(() => conf.remove(), 2000);
    }
}