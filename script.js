function toggleMenu(){ document.body.classList.toggle('mobile-open'); }
function dismissBanner(){
  const el = document.getElementById('uc-banner');
  if(el){ el.style.display = 'none'; localStorage.setItem('ucBannerDismissed','1'); }
}
(function(){
  if(localStorage.getItem('ucBannerDismissed') === '1'){
    const el = document.getElementById('uc-banner');
    if(el) el.style.display = 'none';
  }
})();
