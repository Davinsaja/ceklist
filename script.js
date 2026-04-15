const TAGS = {
  work:     { label: 'Kerja',      cls: 'tag-work' },
  personal: { label: 'Personal',   cls: 'tag-personal' },
  urgent:   { label: 'Mendesak',   cls: 'tag-urgent' },
  health:   { label: 'Kesehatan',  cls: 'tag-health' },
};

let tasks = [
  { id: 1, text: 'Review laporan bulanan Q1',  cat: 'work',     done: false },
  { id: 2, text: 'Jadwalkan meeting tim',       cat: 'work',     done: false },
  { id: 3, text: 'Beli kebutuhan rumah',        cat: 'personal', done: false },
  { id: 4, text: 'Submit proposal proyek',      cat: 'urgent',   done: false },
  { id: 5, text: 'Olahraga pagi 30 menit',      cat: 'health',   done: true  },
  { id: 6, text: 'Bayar tagihan listrik',        cat: 'personal', done: true  },
];
let nextId = 7;
let currentFilter = 'all';

function setFilter(f, el) {
  currentFilter = f;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  render();
}

function addTask() {
  const inp = document.getElementById('task-input');
  const cat = document.getElementById('cat-select').value;
  const text = inp.value.trim();
  if (!text) return;
  tasks.unshift({ id: nextId++, text, cat, done: false });
  inp.value = '';
  render();
}

function toggle(id) {
  const t = tasks.find(x => x.id === id);
  if (t) t.done = !t.done;
  render();
}

function del(id) {
  tasks = tasks.filter(x => x.id !== id);
  render();
}

function clearDone() {
  tasks = tasks.filter(x => !x.done);
  render();
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function makeItem(t) {
  const tag = TAGS[t.cat];
  const div = document.createElement('div');
  div.className = 'task-item' + (t.done ? ' done-item' : '');
  div.innerHTML = `
    <div class="task-cb${t.done ? ' checked' : ''}" onclick="toggle(${t.id})"></div>
    <div class="task-text${t.done ? ' striked' : ''}">${escHtml(t.text)}</div>
    <span class="tag ${tag.cls}">${tag.label}</span>
    <button class="delete-btn" onclick="del(${t.id})" title="Hapus">&#x2715;</button>
  `;
  return div;
}

function render() {
  const total   = tasks.length;
  const done    = tasks.filter(x => x.done).length;
  const pending = total - done;

  document.getElementById('s-total').textContent   = total;
  document.getElementById('s-done').textContent    = done;
  document.getElementById('s-pending').textContent = pending;

  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('pct-lbl').textContent       = pct + '%';
  document.getElementById('prog-fill').style.width     = pct + '%';

  let filtered = tasks;
  if (currentFilter === 'pending') filtered = tasks.filter(x => !x.done);
  else if (currentFilter === 'done')    filtered = tasks.filter(x =>  x.done);
  else if (currentFilter === 'urgent')  filtered = tasks.filter(x => x.cat === 'urgent');

  const pendingItems = filtered.filter(x => !x.done);
  const doneItems    = filtered.filter(x =>  x.done);

  const pl = document.getElementById('pending-list');
  const dl = document.getElementById('done-list');
  pl.innerHTML = '';
  dl.innerHTML = '';

  if (pendingItems.length === 0)
    pl.innerHTML = '<div class="empty">Tidak ada tugas yang tertunda &#x1F389;</div>';
  else
    pendingItems.forEach(t => pl.appendChild(makeItem(t)));

  if (doneItems.length === 0)
    dl.innerHTML = '<div class="empty">Belum ada tugas yang diselesaikan</div>';
  else
    doneItems.forEach(t => dl.appendChild(makeItem(t)));

  document.getElementById('pending-title').textContent =
    `Belum selesai (${pendingItems.length})`;
  document.getElementById('done-title').textContent =
    `Sudah selesai (${doneItems.length})`;

  document.getElementById('done-section').style.display =
    currentFilter === 'pending' ? 'none' : '';
  document.getElementById('pending-section').style.display =
    currentFilter === 'done' ? 'none' : '';
}

document.getElementById('task-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') addTask();
});

render();
