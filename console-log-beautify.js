window.addEventListener("load", function(){
  if(document.querySelectorAll('a.model-link.inside.breadcrumbBarAnchor[href*="ita-sportsdata"]').length > 1){
    document.querySelectorAll('span.pipeline-new-node').forEach((x) => x.style.display = 'none');
    console.log('Console log beautified');
  }
});
