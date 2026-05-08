
(function(){
  const toast = document.getElementById('demo-toast');
  let timer = null;
  function showToast(title, sub){
    if(!toast) return;
    toast.innerHTML = title + (sub ? '<small>'+sub+'</small>' : '');
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(()=>toast.classList.remove('show'), 2100);
  }
  document.addEventListener('click', function(e){
    const link = e.target.closest('a[href]');
    if(link) return;
    const btn = e.target.closest('button,[data-demo-action],[data-demo-card]');
    if(!btn) return;
    const text = (btn.getAttribute('data-demo-action') || btn.innerText || btn.getAttribute('title') || 'Demo-Element').trim().replace(/\s+/g,' ');
    if(btn.getAttribute('data-demo-print') === 'true'){
      showToast('Druck-/PDF-Export wäre hier aktiv.', 'In der Demo wird nur die UI simuliert.');
      setTimeout(()=>{ try { window.print(); } catch(e){} }, 250);
      return;
    }
    showToast('Pseudo-interaktiv: ' + text, 'Finale App: hier öffnet sich echte Logik, Filterung oder Detailansicht.');
  });
  document.addEventListener('change', function(e){
    if(e.target.matches('.switch input,input[type="checkbox"],input[type="radio"],select')){
      showToast('Demo-Einstellung geändert.', 'Keine echten Daten werden verarbeitet.');
    }
  });
})();
