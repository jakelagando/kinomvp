document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const upload = document.getElementById('scan-upload');
  const fileStatus = document.getElementById('file-status');
  const form = document.getElementById('scan-form');
  const button = form.querySelector('button');

  upload.addEventListener('change', () => {
    const count = upload.files.length;
    fileStatus.textContent = count ? `${count} photo${count === 1 ? '' : 's'} selected` : 'No photos selected';
    fileStatus.classList.toggle('selected', count > 0);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const originalText = button.innerHTML;
    button.textContent = 'Analyzing your scan...';
    button.disabled = true;
    setTimeout(() => {
      button.innerHTML = 'View your sample results <span aria-hidden="true">→</span>';
      button.disabled = false;
      document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => { button.innerHTML = originalText; }, 3500);
    }, 900);
  });
});
