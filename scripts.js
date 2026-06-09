// ── Copy to clipboard ─────────────────────────────────────────
function copyCode(btn) {
  const pre = btn.closest('.code-block').querySelector('pre code');
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  });
}

function copyPrompt(btn) {
  const text = btn.closest('.prompt-box').querySelector('.prompt-text').innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy prompt'; btn.classList.remove('copied'); }, 2000);
  });
}

// ── Mobile sidebar toggle ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }

  // Mark active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar nav a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
});
