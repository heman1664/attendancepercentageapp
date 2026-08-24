(() => {
  function particles(){
    if(!document.body || document.querySelector('.u-particle')) return;
    for(let i=0;i<12;i++){
      const p=document.createElement('i');
      p.className='u-particle';
      p.style.cssText=`position:fixed;width:2px;height:2px;border-radius:50%;background:rgba(255,255,255,.48);box-shadow:0 0 7px rgba(139,92,246,.55);left:${Math.random()*100}vw;top:${45+Math.random()*55}vh;pointer-events:none;z-index:-1;opacity:0;animation:uParticle ${5+Math.random()*4}s linear ${-Math.random()*7}s infinite;`;
      document.body.appendChild(p);
    }
    const st=document.createElement('style');
    st.textContent='@keyframes uParticle{0%{transform:translate3d(0,35px,0) scale(.4);opacity:0}12%{opacity:.5}65%{opacity:.22}100%{transform:translate3d(var(--x,0px),-130px,0) scale(1);opacity:0}}';
    document.head.appendChild(st);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',particles,{once:true});
  else particles();
})();
