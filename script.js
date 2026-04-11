const summaryEl = document.getElementById('summary');
const gridEl = document.getElementById('films-grid');
const template = document.getElementById('film-card-template');

const labels = {
  semiverificato: 'Semiverificato',
  da_verificare: 'Da verificare'
};

function buildSummary(films) {
  const total = films.length;
  const semi = films.filter((film) => film.verification_status === 'semiverificato').length;
  const todo = films.filter((film) => film.verification_status === 'da_verificare').length;
  const platforms = new Set(films.map((film) => film.platform)).size;

  const cards = [
    { value: total, label: 'film nel dataset iniziale' },
    { value: semi, label: 'semiverificati' },
    { value: todo, label: 'da verificare' },
    { value: platforms, label: 'piattaforme coperte' }
  ];

  summaryEl.innerHTML = cards
    .map((card) => `<div class="summary-card"><strong>${card.value}</strong><span>${card.label}</span></div>`)
    .join('');
}

function renderFilms(films) {
  films.forEach((film) => {
    const node = template.content.cloneNode(true);
    node.querySelector('h3').textContent = film.title;
    node.querySelector('.meta').textContent = `${film.director}, ${film.year}`;
    node.querySelector('.platform').textContent = film.platform;

    const status = node.querySelector('.status');
    status.textContent = labels[film.verification_status] || film.verification_status;
    status.dataset.status = film.verification_status;

    node.querySelector('.audio').textContent = film.audio_verification.evidence;
    node.querySelector('.quality').textContent = film.quality_verification.evidence;
    node.querySelector('.poster-status').textContent = film.poster.status === 'needs_generation_prompt'
      ? 'Prompt pronto per generazione copertina'
      : film.poster.status;
    node.querySelector('.notes').textContent = film.notes;

    const link = node.querySelector('.watch-link');
    link.href = film.source_url;
    link.textContent = `Apri su ${film.platform}`;

    gridEl.appendChild(node);
  });
}

async function main() {
  const response = await fetch('./data/films.json');
  const films = await response.json();
  buildSummary(films);
  renderFilms(films);
}

main().catch((error) => {
  summaryEl.innerHTML = `<div class="summary-card"><strong>Errore</strong><span>${error.message}</span></div>`;
});
