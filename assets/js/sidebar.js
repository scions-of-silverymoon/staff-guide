// Sidebar toggle and state persistence for Staff Guide
(function(){
  var toggle = document.getElementById('sidebar-toggle');
  var sidebar = document.getElementById('site-sidebar');
  var list = document.getElementById('sidebar-list');

  if (!toggle || !sidebar) return;

  function setCollapsed(collapsed) {
    if (collapsed) {
      sidebar.classList.add('collapsed');
      toggle.setAttribute('aria-expanded','false');
    } else {
      sidebar.classList.remove('collapsed');
      toggle.setAttribute('aria-expanded','true');
    }
  }

  // initialize from localStorage
  try {
    var saved = localStorage.getItem('staffguide_sidebar_collapsed');
    if (saved === 'true') setCollapsed(true);
  } catch(e) { /* ignore */ }

  toggle.addEventListener('click', function(){
    var collapsed = sidebar.classList.toggle('collapsed');
    toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    try { localStorage.setItem('staffguide_sidebar_collapsed', collapsed); } catch(e){}
  });

  // Close sidebar on small screens when a link is clicked
  list && list.addEventListener('click', function(e){
    if (e.target.tagName === 'A' && window.innerWidth < 800) {
      setCollapsed(true);
    }
  });
})();
