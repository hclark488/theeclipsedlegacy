const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const trigger=document.getElementById('archiveTrigger');
const glitch=document.getElementById('archiveGlitch');
trigger?.addEventListener('click',()=>{glitch.classList.add('show');setTimeout(()=>glitch.classList.remove('show'),2600)});
