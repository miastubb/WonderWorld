let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
    countDisplay.textContent = count;
    if (count < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = '#2c3e50';
    }
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

updateDisplay();