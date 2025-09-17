const quiz = [
  {
    q: "What is the capital of India?",
    opt: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    ans: "Delhi"
  },
  {
    q: "Which planet is called the Red Planet?",
    opt: ["Venus", "Mars", "Saturn", "Jupiter"],
    ans: "Mars"
  },
  {
    q: "Who wrote the National Anthem of India?",
    opt: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Jawaharlal Nehru"],
    ans: "Rabindranath Tagore"
  },
  {
    q: "Which is the largest mammal?",
    opt: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    ans: "Blue Whale"
  }
];

let curr = 0, score = 0;
const questionE1 = document.getElementById('question');
const optionsE1 = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const scoreE1 = document.getElementById('score');

function showQuestion() {
    questionE1.textContent = quiz[curr].q;
    optionsE1.innerHTML = '';
    quiz[curr].opt.forEach(opt => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = opt;
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + opt));
        optionsE1.appendChild(label);
    });
}

function getSelected() {
    const radios = document.getElementsByName('option');
    for (let radio of radios) if (radio.checked) return radio.value;
    return null;
}

nextBtn.onclick = function() {
    const sel = getSelected();
    if (!sel) {
        alert('Please select an answer');
        return;
    }
    if (sel === quiz[curr].ans) score++;
    curr++;
    if (curr < quiz.length) {
        showQuestion();
    } else {
        questionE1.style.display = "none";
        optionsE1.style.display = "none";
        nextBtn.style.display = "none";
        scoreE1.textContent = `Your Score: ${score} out of ${quiz.length}`;

    }
};

showQuestion();