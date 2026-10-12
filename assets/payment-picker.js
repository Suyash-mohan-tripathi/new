(()=>{
  const selectors=[...document.querySelectorAll('[data-plan-choice]')];
  const panels=[...document.querySelectorAll('[data-plan-panel]')];
  if(!selectors.length||!panels.length)return;
  const allowed=new Set(selectors.map(b=>b.dataset.planChoice));
  const params=new URLSearchParams(window.location.search);
  const first=allowed.has(params.get('plan'))?params.get('plan'):'starter';
  function selectPlan(plan,updateAddress){
    if(!allowed.has(plan))return;
    selectors.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.planChoice===plan)));
    panels.forEach(p=>{p.hidden=p.dataset.planPanel!==plan});
    if(updateAddress){
      const url=new URL(location.href);
      url.searchParams.set('plan',plan);
      history.replaceState(null,'',url.pathname+url.search+url.hash);
    }
  }
  selectors.forEach(b=>b.addEventListener('click',()=>selectPlan(b.dataset.planChoice,true)));
  selectPlan(first,false);
})();