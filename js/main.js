document.addEventListener('DOMContentLoaded', () => {
  const subtitulo = document.querySelector('.historia-subtitulo');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        subtitulo.classList.add('visible');
      }
    });
  }, { threshold: 0.3 });

  if(subtitulo) observer.observe(subtitulo);
});
