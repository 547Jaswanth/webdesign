let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;
let startedTyping = false;

const setText = (text) => {
    document.getElementById('text').innerText = text;
    document.getElementById('textarea').value = '';
    document.getElementById('textarea').style.borderColor = '';
    stopTimer();
    resetTimer();
    startedTyping = false;
};

const startTimer = () => {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        milliseconds += 1;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds += 1;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
        }
        document.getElementById('min').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('sec').innerText = seconds.toString().padStart(2, '0');
        document.getElementById('m-sec').innerText = milliseconds.toString().padStart(2, '0');
    }, 10);
};

const stopTimer = () => {
    clearInterval(timer);
    isRunning = false;
};

const resetTimer = () => {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('min').innerText = '00';
    document.getElementById('sec').innerText = '00';
    document.getElementById('m-sec').innerText = '00';
};

const checkText = () => {
    const textToMatch = document.getElementById('text').innerText;
    const textEntered = document.getElementById('textarea').value;

    if (!startedTyping) {
        startTimer();
        startedTyping = true;
    }

    if (textEntered === textToMatch) {
        stopTimer();
        document.getElementById('textarea').style.borderColor = 'green';
    } else if (textToMatch.startsWith(textEntered)) {
        document.getElementById('textarea').style.borderColor = '';
        if (!isRunning) startTimer();
    } else {
        document.getElementById('textarea').style.borderColor = 'red';
        if (!isRunning) startTimer();
    }
};

document.getElementById('textarea').addEventListener('input', checkText);
