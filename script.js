const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mainNav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('#mainNav a').forEach(a=>{
  a.addEventListener('click',()=>nav.classList.remove('open'));
});

document.querySelector('#quoteForm')?.addEventListener('submit', e=>{
  e.preventDefault();
  const msg=document.querySelector('#formMessage');
  msg.textContent='Demo submitted successfully. Connect this form to WPForms, Contact Form 7 or your preferred WordPress form service.';
  e.target.reset();
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity='1';
      entry.target.style.transform='translateY(0)';
    }
  });
},{threshold:.08});

document.querySelectorAll('.product-card,.service,.project,.feature-list>div').forEach(el=>{
  el.style.opacity='0';
  el.style.transform='translateY(16px)';
  el.style.transition='opacity .55s ease, transform .55s ease';
  observer.observe(el);
});