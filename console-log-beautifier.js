window.addEventListener("load", function(){
  if(document.querySelectorAll('a.model-link.inside.breadcrumbBarAnchor[href*="ita-sportsdata"]').length > 1){
    //document.querySelectorAll('span.pipeline-new-node').forEach((x) => x.style.display = 'none');
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.pipeline-new-node { display: none; }';
    document.getElementsByTagName('head')[0].appendChild(style);
    console.log('Console log beautified');
  }
});
