function getNum(key) {
  return parseInt(localStorage.getItem(key) || "0", 10);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function quizAttempts(id) {
  return getNum(`attempts_${id}`);
}

function renderHome() {
  setText("totalAttempts", getNum("totalAttempts"));
  setText("quizCount", QUIZZES.length);

  const completed = QUIZZES.reduce((sum, quiz) => sum + quizAttempts(quiz.id), 0);
  setText("completedCount", completed);

  const scores = QUIZZES.map(q => getNum(`best_${q.id}`)).filter(n => n > 0);
  setText("bestScore", scores.length ? `${Math.max(...scores)}%` : "—");

  const grid = document.getElementById("quizGrid");
  if (!grid) return;

  grid.innerHTML = QUIZZES.map(quiz => `
    <article class="quiz-card">
      <div class="quiz-card-top">
        <span class="tag">${quiz.category}</span>
        <span class="difficulty">${quiz.difficulty}</span>
      </div>
      <h3>${quiz.title}</h3>
      <p>${quiz.description}</p>
      <div class="quiz-meta">
        <span>${quiz.questions.length} questions</span>
        <span>${quizAttempts(quiz.id)} attempts</span>
      </div>
      <a class="button primary full" href="quiz.html?id=${quiz.id}">Start test</a>
    </article>
  `).join("");
}

renderHome();