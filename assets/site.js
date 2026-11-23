const progress = document.querySelector('.reading-progress span');
const prose = document.querySelector('.prose');
if (progress && prose) {
  const updateProgress = () => {
    const start = prose.offsetTop;
    const total = Math.max(1, prose.offsetHeight - window.innerHeight);
    progress.style.width = `${Math.max(0, Math.min(100, ((window.scrollY - start) / total) * 100))}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
}

const tocLinks = [...document.querySelectorAll('.toc-sidebar a')];

document.querySelectorAll('.prose pre > code').forEach((code) => {
  const block = document.createElement('div');
  block.className = 'code-block';
  const pre = code.parentElement;
  pre.before(block);
  block.append(pre);
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'code-copy';
  button.textContent = '复制';
  button.setAttribute('aria-label', '复制代码');
  const status = document.createElement('span');
  status.className = 'copy-status';
  status.setAttribute('role', 'status');
  block.append(button, status);
  let reset;
  button.addEventListener('click', async () => {
    clearTimeout(reset);
    button.disabled = true;
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = '已复制';
      status.textContent = '代码已复制';
    } catch {
      button.textContent = '复制失败';
      status.textContent = '无法访问剪贴板，请手动选择代码复制';
    } finally {
      button.disabled = false;
      reset = setTimeout(() => {
        button.textContent = '复制';
        status.textContent = '';
      }, 3000);
    }
  });
});

if ('IntersectionObserver' in window && tocLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of tocLinks) {
        if (decodeURIComponent(link.hash.slice(1)) === entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-90px 0px -65% 0px' });
  document.querySelectorAll('.prose h2, .prose h3').forEach((heading) => observer.observe(heading));
}
