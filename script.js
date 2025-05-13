const API = 'http://localhost:5000';

document.getElementById('form').addEventListener('submit', async e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  await fetch(`${API}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  });
  document.getElementById('name').value = '';
  loadNames();
});

async function loadNames() {
  const res = await fetch(`${API}/list`);
  const data = await res.json();
  const ul = document.getElementById('lista');
  ul.innerHTML = '';
  data.forEach(([id, name]) => {
    const li = document.createElement('li');
    li.textContent = `${id}: ${name}`;
    ul.appendChild(li);
  });
}

loadNames();
