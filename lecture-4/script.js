// ==================== 40 WORDS DATA ====================
const wordsList = [
    { word: "apple", urdu: "سیب", firstLetter: "a", type: "vowel" },
    { word: "banana", urdu: "کیلا", firstLetter: "b", type: "consonant" },
    { word: "cat", urdu: "بلی", firstLetter: "c", type: "consonant" },
    { word: "dog", urdu: "کتا", firstLetter: "d", type: "consonant" },
    { word: "elephant", urdu: "ہاتھی", firstLetter: "e", type: "vowel" },
    { word: "flower", urdu: "پھول", firstLetter: "f", type: "consonant" },
    { word: "goat", urdu: "بکری", firstLetter: "g", type: "consonant" },
    { word: "hat", urdu: "ٹوپی", firstLetter: "h", type: "consonant" },
    { word: "ice", urdu: "برف", firstLetter: "i", type: "vowel" },
    { word: "jug", urdu: "گھڑا", firstLetter: "j", type: "consonant" },
    { word: "kite", urdu: "پتنگ", firstLetter: "k", type: "consonant" },
    { word: "lion", urdu: "شیر", firstLetter: "l", type: "consonant" },
    { word: "monkey", urdu: "بندر", firstLetter: "m", type: "consonant" },
    { word: "nest", urdu: "گھونسلہ", firstLetter: "n", type: "consonant" },
    { word: "orange", urdu: "سنترہ", firstLetter: "o", type: "vowel" },
    { word: "pen", urdu: "قلم", firstLetter: "p", type: "consonant" },
    { word: "queen", urdu: "ملکہ", firstLetter: "q", type: "consonant" },
    { word: "rat", urdu: "چوہا", firstLetter: "r", type: "consonant" },
    { word: "sun", urdu: "سورج", firstLetter: "s", type: "consonant" },
    { word: "table", urdu: "میز", firstLetter: "t", type: "consonant" },
    { word: "umbrella", urdu: "چھتری", firstLetter: "u", type: "vowel" },
    { word: "van", urdu: "وین", firstLetter: "v", type: "consonant" },
    { word: "watch", urdu: "گھڑی", firstLetter: "w", type: "consonant" },
    { word: "xray", urdu: "ایکس رے", firstLetter: "x", type: "consonant" },
    { word: "yak", urdu: "یاک", firstLetter: "y", type: "consonant" },
    { word: "zebra", urdu: "زیبرا", firstLetter: "z", type: "consonant" },
    { word: "ant", urdu: "چیونٹی", firstLetter: "a", type: "vowel" },
    { word: "ball", urdu: "گیند", firstLetter: "b", type: "consonant" },
    { word: "car", urdu: "گاڑی", firstLetter: "c", type: "consonant" },
    { word: "duck", urdu: "بطخ", firstLetter: "d", type: "consonant" },
    { word: "egg", urdu: "انڈہ", firstLetter: "e", type: "vowel" },
    { word: "fish", urdu: "مچھلی", firstLetter: "f", type: "consonant" },
    { word: "gun", urdu: "بندوق", firstLetter: "g", type: "consonant" },
    { word: "hen", urdu: "مرغی", firstLetter: "h", type: "consonant" },
    { word: "ink", urdu: "روشنائی", firstLetter: "i", type: "vowel" },
    { word: "jar", urdu: "برتن", firstLetter: "j", type: "consonant" },
    { word: "king", urdu: "بادشاہ", firstLetter: "k", type: "consonant" },
    { word: "lamp", urdu: "چراغ", firstLetter: "l", type: "consonant" },
    { word: "moon", urdu: "چاند", firstLetter: "m", type: "consonant" },
    { word: "net", urdu: "جال", firstLetter: "n", type: "consonant" }
];

// ==================== ARTICLE MATCH DATA (20) ====================
const articleMatchData = [
    { word: "apple", article: "An" }, { word: "banana", article: "A" }, { word: "cat", article: "A" },
    { word: "dog", article: "A" }, { word: "elephant", article: "An" }, { word: "flower", article: "A" },
    { word: "goat", article: "A" }, { word: "hat", article: "A" }, { word: "ice", article: "An" },
    { word: "jug", article: "A" }, { word: "kite", article: "A" }, { word: "lion", article: "A" },
    { word: "monkey", article: "A" }, { word: "nest", article: "A" }, { word: "orange", article: "An" },
    { word: "pen", article: "A" }, { word: "queen", article: "A" }, { word: "rat", article: "A" },
    { word: "sun", article: "A" }, { word: "umbrella", article: "An" }
];

// ==================== FILL ARTICLE DATA (20) ====================
const fillArticleData = [
    { text: "___ apple", answer: "An" }, { text: "___ banana", answer: "A" }, { text: "___ cat", answer: "A" },
    { text: "___ dog", answer: "A" }, { text: "___ elephant", answer: "An" }, { text: "___ flower", answer: "A" },
    { text: "___ goat", answer: "A" }, { text: "___ hat", answer: "A" }, { text: "___ ice cream", answer: "An" },
    { text: "___ jug", answer: "A" }, { text: "___ kite", answer: "A" }, { text: "___ lion", answer: "A" },
    { text: "___ monkey", answer: "A" }, { text: "___ nest", answer: "A" }, { text: "___ orange", answer: "An" },
    { text: "___ pen", answer: "A" }, { text: "___ queen", answer: "A" }, { text: "___ rat", answer: "A" },
    { text: "___ sun", answer: "A" }, { text: "___ umbrella", answer: "An" }
];

// ==================== VOWEL/CONSONANT SORT DATA (20) ====================
const sortData = [
    { word: "apple", type: "vowel" }, { word: "banana", type: "consonant" }, { word: "cat", type: "consonant" },
    { word: "dog", type: "consonant" }, { word: "elephant", type: "vowel" }, { word: "flower", type: "consonant" },
    { word: "goat", type: "consonant" }, { word: "hat", type: "consonant" }, { word: "ice", type: "vowel" },
    { word: "jug", type: "consonant" }, { word: "kite", type: "consonant" }, { word: "lion", type: "consonant" },
    { word: "monkey", type: "consonant" }, { word: "nest", type: "consonant" }, { word: "orange", type: "vowel" },
    { word: "pen", type: "consonant" }, { word: "queen", type: "consonant" }, { word: "umbrella", type: "vowel" },
    { word: "ant", type: "vowel" }, { word: "egg", type: "vowel" }
];

// ==================== PLURAL FORMATION DATA (20) ====================
const pluralFormData = [
    { singular: "cat", plural: "cats", rule: "add s" }, { singular: "dog", plural: "dogs", rule: "add s" },
    { singular: "bus", plural: "buses", rule: "add es" }, { singular: "box", plural: "boxes", rule: "add es" },
    { singular: "baby", plural: "babies", rule: "y to ies" }, { singular: "city", plural: "cities", rule: "y to ies" },
    { singular: "leaf", plural: "leaves", rule: "f to ves" }, { singular: "wolf", plural: "wolves", rule: "f to ves" },
    { singular: "potato", plural: "potatoes", rule: "add es" }, { singular: "tomato", plural: "tomatoes", rule: "add es" },
    { singular: "day", plural: "days", rule: "add s" }, { singular: "key", plural: "keys", rule: "add s" },
    { singular: "brush", plural: "brushes", rule: "add es" }, { singular: "church", plural: "churches", rule: "add es" },
    { singular: "lady", plural: "ladies", rule: "y to ies" }, { singular: "story", plural: "stories", rule: "y to ies" },
    { singular: "knife", plural: "knives", rule: "f to ves" }, { singular: "wife", plural: "wives", rule: "f to ves" },
    { singular: "hero", plural: "heroes", rule: "add es" }, { singular: "zero", plural: "zeroes", rule: "add es" }
];

// ==================== IRREGULAR PLURAL DATA (20) ====================
const irregularData = [
    { singular: "man", plural: "men" }, { singular: "woman", plural: "women" }, { singular: "child", plural: "children" },
    { singular: "tooth", plural: "teeth" }, { singular: "foot", plural: "feet" }, { singular: "mouse", plural: "mice" },
    { singular: "goose", plural: "geese" }, { singular: "ox", plural: "oxen" }, { singular: "person", plural: "people" },
    { singular: "fish", plural: "fish" }, { singular: "sheep", plural: "sheep" }, { singular: "deer", plural: "deer" },
    { singular: "leaf", plural: "leaves" }, { singular: "wolf", plural: "wolves" }, { singular: "knife", plural: "knives" },
    { singular: "life", plural: "lives" }, { singular: "calf", plural: "calves" }, { singular: "elf", plural: "elves" },
    { singular: "loaf", plural: "loaves" }, { singular: "thief", plural: "thieves" }
];

// ==================== DRAG PLURAL DATA (20) ====================
const dragPluralData = [
    { singular: "cat", plural: "cats" }, { singular: "dog", plural: "dogs" }, { singular: "bus", plural: "buses" },
    { singular: "box", plural: "boxes" }, { singular: "baby", plural: "babies" }, { singular: "city", plural: "cities" },
    { singular: "leaf", plural: "leaves" }, { singular: "wolf", plural: "wolves" }, { singular: "man", plural: "men" },
    { singular: "woman", plural: "women" }, { singular: "child", plural: "children" }, { singular: "tooth", plural: "teeth" },
    { singular: "foot", plural: "feet" }, { singular: "mouse", plural: "mice" }, { singular: "goose", plural: "geese" },
    { singular: "fish", plural: "fish" }, { singular: "sheep", plural: "sheep" }, { singular: "deer", plural: "deer" },
    { singular: "potato", plural: "potatoes" }, { singular: "tomato", plural: "tomatoes" }
];

// ==================== SINGULAR FORM DATA (plural to singular) (20) ====================
const singularFormData = [
    { plural: "cats", singular: "cat" }, { plural: "dogs", singular: "dog" }, { plural: "buses", singular: "bus" },
    { plural: "boxes", singular: "box" }, { plural: "babies", singular: "baby" }, { plural: "cities", singular: "city" },
    { plural: "leaves", singular: "leaf" }, { plural: "wolves", singular: "wolf" }, { plural: "men", singular: "man" },
    { plural: "women", singular: "woman" }, { plural: "children", singular: "child" }, { plural: "teeth", singular: "tooth" },
    { plural: "feet", singular: "foot" }, { plural: "mice", singular: "mouse" }, { plural: "geese", singular: "goose" },
    { plural: "potatoes", singular: "potato" }, { plural: "tomatoes", singular: "tomato" }, { plural: "knives", singular: "knife" },
    { plural: "lives", singular: "life" }, { plural: "wives", singular: "wife" }
];

// ==================== CORRECT FORM DATA (20) ====================
const correctFormData = [
    { text: "I have ___ apple", options: ["a", "an", "the"], answer: "an" },
    { text: "___ sun is hot", options: ["A", "An", "The"], answer: "The" },
    { text: "She has ___ cat", options: ["a", "an", "the"], answer: "a" },
    { text: "He is ___ honest man", options: ["a", "an", "the"], answer: "an" },
    { text: "___ moon shines at night", options: ["A", "An", "The"], answer: "The" },
    { text: "I want ___ apple", options: ["a", "an", "the"], answer: "an" },
    { text: "___ dog is barking", options: ["A", "An", "The"], answer: "The" },
    { text: "She ate ___ orange", options: ["a", "an", "the"], answer: "an" },
    { text: "He is ___ doctor", options: ["a", "an", "the"], answer: "a" },
    { text: "___ Earth is round", options: ["A", "An", "The"], answer: "The" },
    { text: "I have ___ car", options: ["a", "an", "the"], answer: "a" },
    { text: "She is ___ engineer", options: ["a", "an", "the"], answer: "an" }
];

// ==================== SENTENCE FIX DATA (20) ====================
const sentenceFixData = [
    { text: "She have a cat", correct: "She has a cat" },
    { text: "He go to school", correct: "He goes to school" },
    { text: "I has a book", correct: "I have a book" },
    { text: "They is playing", correct: "They are playing" },
    { text: "She are a teacher", correct: "She is a teacher" },
    { text: "He play football", correct: "He plays football" },
    { text: "We was happy", correct: "We were happy" },
    { text: "She do her work", correct: "She does her work" },
    { text: "He have a car", correct: "He has a car" },
    { text: "They was sleeping", correct: "They were sleeping" }
];

// ==================== ODD ONE OUT DATA (20) ====================
const oddOneData = [
    { words: ["cat", "dog", "apple", "bird"], odd: "apple", reason: "fruit" },
    { words: ["red", "blue", "run", "green"], odd: "run", reason: "verb" },
    { words: ["happy", "sad", "angry", "table"], odd: "table", reason: "noun" },
    { words: ["apple", "mango", "orange", "car"], odd: "car", reason: "vehicle" },
    { words: ["teacher", "doctor", "nurse", "school"], odd: "school", reason: "place" }
];

// ==================== ERROR DETECTION DATA (20) ====================
const errorData = [
    { sentence: "She go to market", error: "go", correct: "goes" },
    { sentence: "He play cricket", error: "play", correct: "plays" },
    { sentence: "I has a pen", error: "has", correct: "have" },
    { sentence: "They is running", error: "is", correct: "are" },
    { sentence: "She are singing", error: "are", correct: "is" },
    { sentence: "He go to school daily", error: "go", correct: "goes" }
];

// ==================== NAVIGATION ====================
let currentModule = 1;
const totalModules = 15;

document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    createDots();
    setupNavigation();
    setupWordList();
    setupArticleMatchGame();
    setupFillArticleGame();
    setupSortGame();
    setupPluralFormGame();
    setupIrregularGame();
    setupDragPluralGame();
    setupSingularFormGame();
    setupCorrectFormGame();
    setupSentenceFixGame();
    setupOddOneGame();
    setupArticleQuiz();
    setupPluralQuiz();
    setupErrorGame();
    setupFinalQuiz();
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

// ==================== MODULE 2: ARTICLE MATCH ====================
let selectedArticleWord = null;
let articleMatched = {};

function setupArticleMatchGame() {
    const container = document.getElementById('articleMatchGame');
    const msgDiv = document.getElementById('articleMatchMessage');
    if (!container) return;

    articleMatched = {};
    articleMatchData.forEach(item => { articleMatched[item.word] = false; });
    let matchedCount = 0;

    function render() {
        const shuffledWords = [...articleMatchData].sort(() => Math.random() - 0.5);
        const articles = ["A", "An"];
        
        let wordsHTML = '<div class="article-words-col">';
        let articlesHTML = '<div class="article-articles-col">';
        
        shuffledWords.forEach(item => {
            if (articleMatched[item.word]) {
                wordsHTML += `<div class="article-word matched" data-word="${item.word}">✅ ${item.word}</div>`;
            } else {
                wordsHTML += `<div class="article-word" data-word="${item.word}">${item.word}</div>`;
            }
        });
        
        articles.forEach(art => {
            articlesHTML += `<div class="article-item" data-article="${art}">${art}</div>`;
        });
        
        wordsHTML += '</div>';
        articlesHTML += '</div>';
        container.innerHTML = wordsHTML + articlesHTML;

        document.querySelectorAll('.article-word:not(.matched)').forEach(w => {
            w.addEventListener('click', () => {
                document.querySelectorAll('.article-word').forEach(el => el.classList.remove('selected'));
                w.classList.add('selected');
                selectedArticleWord = w;
            });
        });

        document.querySelectorAll('.article-item').forEach(a => {
            a.addEventListener('click', () => {
                if (selectedArticleWord && !selectedArticleWord.classList.contains('matched')) {
                    const word = selectedArticleWord.getAttribute('data-word');
                    const selectedArticle = a.getAttribute('data-article');
                    const correctArticle = articleMatchData.find(item => item.word === word)?.article;
                    
                    if (selectedArticle === correctArticle && !articleMatched[word]) {
                        articleMatched[word] = true;
                        matchedCount++;
                        msgDiv.innerHTML = `✅ Shabash! "${selectedArticle} ${word}" sahi match hua! (${matchedCount}/20)`;
                        msgDiv.style.background = '#4CAF50';
                        speak('Shabash');
                        render();
                        if (matchedCount === articleMatchData.length) msgDiv.innerHTML = '🎉 Mubarak! Sab 20 match ho gaye! 🎉';
                    } else {
                        msgDiv.innerHTML = `❌ Ghalat! "${word}" ke liye "${correctArticle}" sahi hai. Try again!`;
                        msgDiv.style.background = '#f44336';
                        speak('Ghalat');
                    }
                    selectedArticleWord.classList.remove('selected');
                    selectedArticleWord = null;
                    setTimeout(() => { if (!msgDiv.innerHTML.includes('Mubarak')) msgDiv.innerHTML = ''; }, 1500);
                } else if (!selectedArticleWord) {
                    msgDiv.innerHTML = '👉 Pehle word select karo!';
                    msgDiv.style.background = '#ff9800';
                    setTimeout(() => msgDiv.innerHTML = '', 1000);
                }
            });
        });
    }
    render();
}

// ==================== MODULE 3: FILL ARTICLE ====================
let fillArticleIndex = 0;
let fillArticleList = [];

function setupFillArticleGame() {
    fillArticleList = [...fillArticleData].sort(() => Math.random() - 0.5);
    fillArticleIndex = 0;
    loadFillArticle();
}

function loadFillArticle() {
    const container = document.getElementById('fillArticleGame');
    const msgDiv = document.getElementById('fillArticleMessage');
    if (fillArticleIndex >= fillArticleList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Aapne sab 20 fill kar liye! 🎉</h3>';
        return;
    }
    const item = fillArticleList[fillArticleIndex];
    container.innerHTML = `<div class="choice-question"><p>${item.text}</p><div class="choice-options">${['A', 'An', 'The'].map(opt => `<button class="choice-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.answer) {
                fillArticleIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${fillArticleIndex}/20) Sahi jawab!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadFillArticle();
            } else {
                msgDiv.innerHTML = '❌ Ghalat! Dobara try karo';
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (fillArticleIndex < fillArticleList.length) msgDiv.innerHTML = ''; }, 1000);
        });
    });
}

// ==================== MODULE 4: SORT GAME ====================
let selectedSortWord = null;
let sortMatched = {};

function setupSortGame() {
    const container = document.getElementById('sortGame');
    const msgDiv = document.getElementById('sortMessage');
    if (!container) return;

    sortMatched = {};
    sortData.forEach(item => { sortMatched[item.word] = false; });
    let matchedCount = 0;

    function render() {
        const shuffledWords = [...sortData].sort(() => Math.random() - 0.5);
        
        let wordsHTML = '<div class="sort-words-col">';
        let zonesHTML = '<div class="sort-zones-col"><div class="sort-zone" data-zone="vowel">🔊 Vowels (A, E, I, O, U)</div><div class="sort-zone" data-zone="consonant">🔊 Consonants (Rest)</div></div>';
        
        shuffledWords.forEach(item => {
            if (sortMatched[item.word]) {
                wordsHTML += `<div class="sort-word sorted" data-word="${item.word}">✅ ${item.word}</div>`;
            } else {
                wordsHTML += `<div class="sort-word" data-word="${item.word}" data-type="${item.type}">${item.word}</div>`;
            }
        });
        
        wordsHTML += '</div>';
        container.innerHTML = wordsHTML + zonesHTML;

        document.querySelectorAll('.sort-word:not(.sorted)').forEach(w => {
            w.addEventListener('click', () => {
                document.querySelectorAll('.sort-word').forEach(el => el.classList.remove('selected'));
                w.classList.add('selected');
                selectedSortWord = w;
            });
        });

        document.querySelectorAll('.sort-zone').forEach(zone => {
            zone.addEventListener('click', () => {
                if (selectedSortWord && !selectedSortWord.classList.contains('sorted')) {
                    const word = selectedSortWord.getAttribute('data-word');
                    const wordType = selectedSortWord.getAttribute('data-type');
                    const zoneType = zone.getAttribute('data-zone');
                    
                    if (wordType === zoneType && !sortMatched[word]) {
                        sortMatched[word] = true;
                        matchedCount++;
                        msgDiv.innerHTML = `✅ Shabash! "${word}" sahi zone mein gaya! (${matchedCount}/20)`;
                        msgDiv.style.background = '#4CAF50';
                        speak('Shabash');
                        render();
                        if (matchedCount === sortData.length) msgDiv.innerHTML = '🎉 Mubarak! Sab 20 sort ho gaye! 🎉';
                    } else {
                        msgDiv.innerHTML = `❌ Ghalat! "${word}" ${wordType === 'vowel' ? 'vowel hai' : 'consonant hai'}. Try again!`;
                        msgDiv.style.background = '#f44336';
                        speak('Ghalat');
                    }
                    selectedSortWord.classList.remove('selected');
                    selectedSortWord = null;
                    setTimeout(() => { if (!msgDiv.innerHTML.includes('Mubarak')) msgDiv.innerHTML = ''; }, 1500);
                } else if (!selectedSortWord) {
                    msgDiv.innerHTML = '👉 Pehle word select karo!';
                    msgDiv.style.background = '#ff9800';
                    setTimeout(() => msgDiv.innerHTML = '', 1000);
                }
            });
        });
    }
    render();
}

// ==================== MODULE 5: PLURAL FORMATION ====================
let pluralFormIndex = 0;
let pluralFormList = [];

function setupPluralFormGame() {
    pluralFormList = [...pluralFormData].sort(() => Math.random() - 0.5);
    pluralFormIndex = 0;
    loadPluralForm();
}

function loadPluralForm() {
    const container = document.getElementById('pluralFormGame');
    const msgDiv = document.getElementById('pluralFormMessage');
    if (pluralFormIndex >= pluralFormList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Aapne sab 20 plural forms bana liye! 🎉</h3>';
        return;
    }
    const item = pluralFormList[pluralFormIndex];
    const options = [item.plural, item.singular + "s", item.singular + "es", item.singular + "ies"].slice(0, 4);
    container.innerHTML = `<div class="choice-question"><p>${item.singular} ka plural kya hai? (Hint: ${item.rule})</p><div class="choice-options">${options.map(opt => `<button class="choice-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.plural) {
                pluralFormIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${pluralFormIndex}/20) Sahi jawab!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadPluralForm();
            } else {
                msgDiv.innerHTML = `❌ Ghalat! Sahi answer "${item.plural}" hai. ${item.rule}`;
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (pluralFormIndex < pluralFormList.length) msgDiv.innerHTML = ''; }, 1000);
        });
    });
}

// ==================== MODULE 6: IRREGULAR PLURAL MATCH ====================
let selectedIrregular = null;
let irregularMatched = {};

function setupIrregularGame() {
    const container = document.getElementById('irregularGame');
    const msgDiv = document.getElementById('irregularMessage');
    if (!container) return;

    irregularMatched = {};
    irregularData.forEach(item => { irregularMatched[item.singular] = false; });
    let matchedCount = 0;

    function render() {
        const shuffledLeft = [...irregularData].sort(() => Math.random() - 0.5);
        const shuffledRight = [...irregularData].sort(() => Math.random() - 0.5);
        
        let leftHTML = '<div class="match-left-col">';
        let rightHTML = '<div class="match-right-col">';
        
        shuffledLeft.forEach(item => {
            if (irregularMatched[item.singular]) {
                leftHTML += `<div class="match-item matched" data-singular="${item.singular}">✅ ${item.singular}</div>`;
            } else {
                leftHTML += `<div class="match-item" data-singular="${item.singular}">${item.singular}</div>`;
            }
        });
        
        shuffledRight.forEach(item => {
            if (irregularMatched[item.singular]) {
                rightHTML += `<div class="match-item matched" data-plural="${item.plural}">✅ ${item.plural}</div>`;
            } else {
                rightHTML += `<div class="match-item" data-plural="${item.plural}">${item.plural}</div>`;
            }
        });
        
        leftHTML += '</div>';
        rightHTML += '</div>';
        container.innerHTML = leftHTML + rightHTML;

        document.querySelectorAll('.match-left-col .match-item:not(.matched)').forEach(l => {
            l.addEventListener('click', () => {
                document.querySelectorAll('.match-item').forEach(el => el.classList.remove('selected'));
                l.classList.add('selected');
                selectedIrregular = l;
            });
        });

        document.querySelectorAll('.match-right-col .match-item:not(.matched)').forEach(r => {
            r.addEventListener('click', () => {
                if (selectedIrregular && !selectedIrregular.classList.contains('matched')) {
                    const singular = selectedIrregular.getAttribute('data-singular');
                    const plural = r.getAttribute('data-plural');
                    const correctPlural = irregularData.find(item => item.singular === singular)?.plural;
                    
                    if (plural === correctPlural && !irregularMatched[singular]) {
                        irregularMatched[singular] = true;
                        matchedCount++;
                        msgDiv.innerHTML = `✅ Shabash! "${singular} → ${plural}" sahi match hua! (${matchedCount}/20)`;
                        msgDiv.style.background = '#4CAF50';
                        speak('Shabash');
                        render();
                        if (matchedCount === irregularData.length) msgDiv.innerHTML = '🎉 Mubarak! Sab 20 irregular plurals match ho gaye! 🎉';
                    } else {
                        msgDiv.innerHTML = `❌ Ghalat! "${singular}" ka plural "${correctPlural}" hai. Try again!`;
                        msgDiv.style.background = '#f44336';
                        speak('Ghalat');
                    }
                    selectedIrregular.classList.remove('selected');
                    selectedIrregular = null;
                    setTimeout(() => { if (!msgDiv.innerHTML.includes('Mubarak')) msgDiv.innerHTML = ''; }, 1500);
                } else if (!selectedIrregular) {
                    msgDiv.innerHTML = '👉 Pehle singular word select karo!';
                    msgDiv.style.background = '#ff9800';
                    setTimeout(() => msgDiv.innerHTML = '', 1000);
                }
            });
        });
    }
    render();
}

// ==================== MODULE 7: DRAG PLURAL ====================
let dragPluralMatched = {};
let dragPluralCount = 0;
let selectedDragPlural = null;

function setupDragPluralGame() {
    const container = document.getElementById('dragPluralGame');
    const msgDiv = document.getElementById('dragPluralMessage');
    if (!container) return;

    dragPluralMatched = {};
    dragPluralData.forEach(item => { dragPluralMatched[item.singular] = false; });
    dragPluralCount = 0;
    renderDragPlural();

    function renderDragPlural() {
        const unmatched = dragPluralData.filter(item => !dragPluralMatched[item.singular]);
        const matched = dragPluralData.filter(item => dragPluralMatched[item.singular]);
        
        let wordsHTML = '<div class="drag-words"><h3 style="color:cyan">📝 Singular Words</h3>';
        unmatched.forEach(item => {
            wordsHTML += `<div class="drag-word" data-singular="${item.singular}" data-plural="${item.plural}">${item.singular}</div>`;
        });
        matched.forEach(item => {
            wordsHTML += `<div class="drag-word matched" data-singular="${item.singular}">✅ ${item.singular}</div>`;
        });
        wordsHTML += '</div>';
        
        let dropHTML = '<div class="drop-zones"><h3 style="color:magenta">🎯 Drop Plural Here</h3>';
        dragPluralData.forEach(item => {
            if (dragPluralMatched[item.singular]) {
                dropHTML += `<div class="drop-zone filled" data-plural="${item.plural}">✅ ${item.plural}</div>`;
            } else {
                dropHTML += `<div class="drop-zone" data-plural="${item.plural}">⬅️ ${item.plural}</div>`;
            }
        });
        dropHTML += '</div>';
        
        container.innerHTML = wordsHTML + dropHTML;

        document.querySelectorAll('.drag-words .drag-word:not(.matched)').forEach(word => {
            word.addEventListener('click', () => {
                document.querySelectorAll('.drag-word').forEach(w => w.classList.remove('selected'));
                word.classList.add('selected');
                selectedDragPlural = word;
            });
        });

        document.querySelectorAll('.drop-zone:not(.filled)').forEach(zone => {
            zone.addEventListener('click', () => {
                if (selectedDragPlural && !selectedDragPlural.classList.contains('matched')) {
                    const singular = selectedDragPlural.getAttribute('data-singular');
                    const correctPlural = selectedDragPlural.getAttribute('data-plural');
                    const zonePlural = zone.getAttribute('data-plural');
                    
                    if (zonePlural === correctPlural && !dragPluralMatched[singular]) {
                        dragPluralMatched[singular] = true;
                        dragPluralCount++;
                        msgDiv.innerHTML = `✅ Shabash! "${singular} → ${correctPlural}" sahi gaya! (${dragPluralCount}/20)`;
                        msgDiv.style.background = '#4CAF50';
                        speak('Shabash');
                        renderDragPlural();
                        if (dragPluralCount === dragPluralData.length) msgDiv.innerHTML = '🎉 Mubarak! Sab 20 drag-drop ho gaye! 🎉';
                    } else {
                        msgDiv.innerHTML = `❌ Ghalat! "${singular}" ka plural "${correctPlural}" hai. Try again!`;
                        msgDiv.style.background = '#f44336';
                        speak('Ghalat');
                    }
                    selectedDragPlural.classList.remove('selected');
                    selectedDragPlural = null;
                    setTimeout(() => { if (!msgDiv.innerHTML.includes('Mubarak')) msgDiv.innerHTML = ''; }, 1500);
                } else if (!selectedDragPlural) {
                    msgDiv.innerHTML = '👉 Pehle singular word select karo!';
                    msgDiv.style.background = '#ff9800';
                    setTimeout(() => msgDiv.innerHTML = '', 1000);
                }
            });
        });
    }
}

// ==================== MODULE 8: SINGULAR FORM (Plural to Singular) ====================
let singularFormIndex = 0;
let singularFormList = [];

function setupSingularFormGame() {
    singularFormList = [...singularFormData].sort(() => Math.random() - 0.5);
    singularFormIndex = 0;
    loadSingularForm();
}

function loadSingularForm() {
    const container = document.getElementById('singularFormGame');
    const msgDiv = document.getElementById('singularFormMessage');
    if (singularFormIndex >= singularFormList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Aapne sab 20 singular forms bana liye! 🎉</h3>';
        return;
    }
    const item = singularFormList[singularFormIndex];
    const options = [item.singular, item.singular + "s", item.singular + "es", "different"].slice(0, 4);
    container.innerHTML = `<div class="choice-question"><p>${item.plural} ka singular kya hai?</p><div class="choice-options">${options.map(opt => `<button class="choice-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.singular) {
                singularFormIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${singularFormIndex}/20) Sahi jawab!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadSingularForm();
            } else {
                msgDiv.innerHTML = `❌ Ghalat! Sahi answer "${item.singular}" hai.`;
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (singularFormIndex < singularFormList.length) msgDiv.innerHTML = ''; }, 1000);
        });
    });
}

// ==================== MODULE 9: CORRECT FORM ====================
let correctFormIndex = 0;
let correctFormList = [];

function setupCorrectFormGame() {
    correctFormList = [...correctFormData].sort(() => Math.random() - 0.5);
    correctFormIndex = 0;
    loadCorrectForm();
}

function loadCorrectForm() {
    const container = document.getElementById('correctFormGame');
    const msgDiv = document.getElementById('correctFormMessage');
    if (correctFormIndex >= correctFormList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Aapne sab 20 correct forms kar liye! 🎉</h3>';
        return;
    }
    const item = correctFormList[correctFormIndex];
    container.innerHTML = `<div class="choice-question"><p>${item.text}</p><div class="choice-options">${item.options.map(opt => `<button class="choice-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.answer) {
                correctFormIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${correctFormIndex}/20) Sahi jawab!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadCorrectForm();
            } else {
                msgDiv.innerHTML = '❌ Ghalat! Dobara try karo';
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (correctFormIndex < correctFormList.length) msgDiv.innerHTML = ''; }, 1000);
        });
    });
}

// ==================== MODULE 10: SENTENCE FIX ====================
let sentenceFixIndex = 0;
let sentenceFixList = [];

function setupSentenceFixGame() {
    sentenceFixList = [...sentenceFixData].sort(() => Math.random() - 0.5);
    sentenceFixIndex = 0;
    loadSentenceFix();
}

function loadSentenceFix() {
    const container = document.getElementById('sentenceFixGame');
    const msgDiv = document.getElementById('sentenceFixMessage');
    if (sentenceFixIndex >= sentenceFixList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Aapne sab 20 sentences fix kar liye! 🎉</h3>';
        return;
    }
    const item = sentenceFixList[sentenceFixIndex];
    const options = [item.correct, item.text, item.text.replace("a", "the"), item.text.replace("have", "has")].slice(0, 4);
    container.innerHTML = `<div class="choice-question"><p>Fix the sentence: "${item.text}"</p><div class="choice-options">${options.map(opt => `<button class="choice-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.correct) {
                sentenceFixIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${sentenceFixIndex}/20) Sahi jawab!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadSentenceFix();
            } else {
                msgDiv.innerHTML = `❌ Ghalat! Sahi sentence "${item.correct}" hai.`;
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (sentenceFixIndex < sentenceFixList.length) msgDiv.innerHTML = ''; }, 1000);
        });
    });
}

// ==================== MODULE 11: ODD ONE OUT ====================
let oddOneIndex = 0;
let oddOneList = [];

function setupOddOneGame() {
    oddOneList = [...oddOneData].sort(() => Math.random() - 0.5);
    oddOneIndex = 0;
    loadOddOne();
}

function loadOddOne() {
    const container = document.getElementById('oddOneGame');
    const msgDiv = document.getElementById('oddOneMessage');
    if (oddOneIndex >= oddOneList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Aapne sab 20 odd one out kar liye! 🎉</h3>';
        return;
    }
    const item = oddOneList[oddOneIndex];
    container.innerHTML = `<div class="choice-question"><p>Choose the odd one out: ${item.words.join(", ")}</p><div class="choice-options">${item.words.map(opt => `<button class="choice-option" data-opt="${opt}">${opt}</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.odd) {
                oddOneIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${oddOneIndex}/20) "${item.odd}" sahi hai (${item.reason})!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadOddOne();
            } else {
                msgDiv.innerHTML = `❌ Ghalat! "${item.odd}" odd one out hai kyunki ye ${item.reason} hai.`;
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (oddOneIndex < oddOneList.length) msgDiv.innerHTML = ''; }, 1000);
        });
    });
}

// ==================== MODULE 12: ARTICLE QUIZ ====================
function setupArticleQuiz() {
    const container = document.getElementById('articleQuizContainer');
    if (!container) return;
    
    const quizQuestions = fillArticleData.map(item => ({
        q: item.text,
        opt: ["A", "An", "The"],
        correct: item.answer
    }));
    
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 20);
    let quizHTML = '';
    shuffled.forEach((q, idx) => {
        quizHTML += `
            <div class="quiz-question">
                <p>${idx+1}. ${q.q}</p>
                <div class="quiz-options">
                    ${q.opt.map(opt => `
                        <label class="quiz-option">
                            <input type="radio" name="articleq${idx}" value="${opt}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = quizHTML;
    
    document.getElementById('submitArticleQuiz')?.addEventListener('click', () => {
        let score = 0;
        shuffled.forEach((q, idx) => {
            const selected = document.querySelector(`input[name="articleq${idx}"]:checked`);
            if (selected && selected.value === q.correct) score++;
        });
        const resultDiv = document.getElementById('articleQuizResult');
        resultDiv.innerHTML = `🎉 Aapne ${score}/${shuffled.length} sahi jawab diye! 🎉`;
        resultDiv.style.background = 'rgba(76,175,80,0.3)';
        speak(`Aapne ${score} sahi jawab diye`);
    });
}

// ==================== MODULE 13: PLURAL QUIZ ====================
function setupPluralQuiz() {
    const container = document.getElementById('pluralQuizContainer');
    if (!container) return;
    
    const quizQuestions = pluralFormData.map(item => ({
        q: `${item.singular} ka plural kya hai?`,
        opt: [item.plural, item.singular + "s", item.singular + "es", item.singular + "ies"],
        correct: item.plural
    }));
    
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 20);
    let quizHTML = '';
    shuffled.forEach((q, idx) => {
        quizHTML += `
            <div class="quiz-question">
                <p>${idx+1}. ${q.q}</p>
                <div class="quiz-options">
                    ${q.opt.map(opt => `
                        <label class="quiz-option">
                            <input type="radio" name="pluralq${idx}" value="${opt}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = quizHTML;
    
    document.getElementById('submitPluralQuiz')?.addEventListener('click', () => {
        let score = 0;
        shuffled.forEach((q, idx) => {
            const selected = document.querySelector(`input[name="pluralq${idx}"]:checked`);
            if (selected && selected.value === q.correct) score++;
        });
        const resultDiv = document.getElementById('pluralQuizResult');
        resultDiv.innerHTML = `🎉 Aapne ${score}/${shuffled.length} sahi jawab diye! 🎉`;
        resultDiv.style.background = 'rgba(76,175,80,0.3)';
        speak(`Aapne ${score} sahi jawab diye`);
    });
}

// ==================== MODULE 14: ERROR DETECTION ====================
let errorIndex = 0;
let errorList = [];

function setupErrorGame() {
    errorList = [...errorData].sort(() => Math.random() - 0.5);
    errorIndex = 0;
    loadError();
}

function loadError() {
    const container = document.getElementById('errorGame');
    const msgDiv = document.getElementById('errorMessage');
    if (errorIndex >= errorList.length) {
        container.innerHTML = '<h3 style="color:#4CAF50; text-align:center;">🎉 Mubarak! Aapne sab 20 errors detect kar liye! 🎉</h3>';
        return;
    }
    const item = errorList[errorIndex];
    const options = [item.error, item.correct, item.error + "ed", item.error + "ing"];
    container.innerHTML = `<div class="choice-question"><p>Find the error in: "${item.sentence}"<br>Which word is wrong?</p><div class="choice-options">${options.map(opt => `<button class="choice-option" data-opt="${opt}">"${opt}"</button>`).join('')}</div></div>`;
    document.querySelectorAll('.choice-option').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.getAttribute('data-opt') === item.error) {
                errorIndex++;
                msgDiv.innerHTML = `✅ Shabash! (${errorIndex}/20) "${item.error}" error hai, sahi hai "${item.correct}"!`;
                msgDiv.style.background = '#4CAF50';
                speak('Shabash');
                loadError();
            } else {
                msgDiv.innerHTML = `❌ Ghalat! Error "${item.error}" hai, sahi "${item.correct}" hona chahiye.`;
                msgDiv.style.background = '#f44336';
                speak('Ghalat');
            }
            setTimeout(() => { if (errorIndex < errorList.length) msgDiv.innerHTML = ''; }, 1500);
        });
    });
}

// ==================== MODULE 15: FINAL QUIZ ====================
function setupFinalQuiz() {
    const container = document.getElementById('finalQuizContainer');
    if (!container) return;
    
    const articles = fillArticleData.map(item => ({ q: item.text, opt: ["A", "An", "The"], correct: item.answer }));
    const plurals = pluralFormData.map(item => ({ q: `${item.singular} ka plural?`, opt: [item.plural, item.singular + "s", item.singular + "es"], correct: item.plural }));
    
    const mixed = [...articles, ...plurals].sort(() => Math.random() - 0.5).slice(0, 20);
    let quizHTML = '';
    mixed.forEach((q, idx) => {
        quizHTML += `
            <div class="quiz-question">
                <p>${idx+1}. ${q.q}</p>
                <div class="quiz-options">
                    ${q.opt.map(opt => `
                        <label class="quiz-option">
                            <input type="radio" name="finalq${idx}" value="${opt}">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = quizHTML;
    
    document.getElementById('submitFinalQuiz')?.addEventListener('click', () => {
        let score = 0;
        mixed.forEach((q, idx) => {
            const selected = document.querySelector(`input[name="finalq${idx}"]:checked`);
            if (selected && selected.value === q.correct) score++;
        });
        const resultDiv = document.getElementById('finalQuizResult');
        resultDiv.innerHTML = `🎉 Aapne ${score}/${mixed.length} sahi jawab diye! 🎉`;
        resultDiv.style.background = 'rgba(76,175,80,0.3)';
        speak(`Aapne ${score} sahi jawab diye`);
    });
}