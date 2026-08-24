(() => {
  function particles(){
    if(!document.body || document.querySelector('.ui-particle')) return;
    for(let i=0;i<16;i++){
      const p=document.createElement('span');
      p.className='ui-particle';
      p.style.left=(Math.random()*100)+'vw';
      p.style.top=(35+Math.random()*65)+'vh';
      p.style.setProperty('--ui-dx',((Math.random()-.5)*160)+'px');
      p.style.setProperty('--ui-duration',(5.5+Math.random()*4.5)+'s');
      p.style.animationDelay=(-Math.random()*8)+'s';
      document.body.appendChild(p);
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',particles,{once:true});
  else particles();
})();
