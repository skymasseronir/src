window.addEventListener("load", function(){
  if(document.querySelectorAll('a.model-link.inside.breadcrumbBarAnchor[href*="ita-sportsdata"]').length > 1){
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = '.pipeline-new-node { display: none; }';
      document.getElementsByTagName('head')[0].appendChild(style);
      console.log('Console log beautified');
  }
});

