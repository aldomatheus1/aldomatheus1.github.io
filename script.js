(() => {
  const enButton=document.querySelector('[data-language="en"]'),frButton=document.querySelector('[data-language="fr"]'),elements=[...document.querySelectorAll('[data-en][data-fr]')],menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');
  const chooseLanguage=language=>{
    const lang=language==='fr'?'fr':'en';
    document.documentElement.lang=lang;
    elements.forEach(el=>{el.textContent=el.dataset[lang]});
    enButton.setAttribute('aria-pressed',String(lang==='en'));frButton.setAttribute('aria-pressed',String(lang==='fr'));
    document.querySelector('.hero-actions .btn-outline').href=lang==='fr'?'assets/CV_Aldo_Francais.pdf':'assets/CV_Aldo_English.pdf';
    document.title=lang==='fr'?'Aldo Matheus | Génie électrique & Électronique':'Aldo Matheus | Electrical Engineering & Electronics';
    try{localStorage.setItem('aldo-language',lang)}catch(e){}
  };
  enButton.addEventListener('click',()=>chooseLanguage('en'));
  frButton.addEventListener('click',()=>chooseLanguage('fr'));
  try{if(localStorage.getItem('aldo-language')==='fr')chooseLanguage('fr')}catch(e){}
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
  if('IntersectionObserver' in window){const links=[...nav.querySelectorAll('a[href^="#"]')],sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);const obs=new IntersectionObserver(entries=>{const item=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(item)links.forEach(a=>a.classList.toggle('active',a.hash==='#'+item.target.id))},{rootMargin:'-20% 0px -60% 0px',threshold:0});sections.forEach(s=>obs.observe(s))}
})();
