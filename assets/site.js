const menu=document.getElementById('menu'),links=document.getElementById('nav-links');menu.onclick=()=>{let open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open);menu.textContent=open?'Close':'Menu'};links.querySelectorAll('a').forEach(a=>a.onclick=()=>{menu.setAttribute('aria-expanded','false');links.classList.remove('open');menu.textContent='Menu'});document.getElementById('copy-email').onclick=async()=>{try{await navigator.clipboard.writeText('chris.lasko@pandwbmw.com');document.getElementById('copy-status').textContent='Email address copied. Paste it into your email app.'}catch{document.getElementById('copy-status').textContent='Copy unavailable. The address is chris.lasko@pandwbmw.com.'}};

const filters=document.querySelectorAll('[data-filter]');filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));let n=0;document.querySelectorAll('.project').forEach(c=>{c.hidden=b.dataset.filter!=='all'&&c.dataset.category!==b.dataset.filter;if(!c.hidden)n++});document.getElementById('work-count').textContent='Showing '+n+' '+(n===1?'project':'projects')+'.'}));
document.querySelector('[data-lot-demo-video]')?.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const frame = document.createElement('iframe');
  frame.title = 'Lot Relay: A Better Way to Move Cars Around the Dealership';
  frame.src = 'https://www.youtube-nocookie.com/embed/Bha3udObP60?autoplay=1&playsinline=1';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.allow = 'autoplay; encrypted-media; picture-in-picture';
  frame.allowFullscreen = true;
  event.currentTarget.replaceWith(frame);
  frame.focus();
});
