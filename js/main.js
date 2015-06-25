
    $(".see-more-toggle.downloadables").click(function(){
        $(".primary-content.white-papers").toggleClass("more-revealer");
        $(".row.lower").toggleClass("row-hider");
        $(".see-more-toggle.downloadables").addClass('row-hider')
        $('html,body').animate({
        scrollTop: $(".second-row.downloadable").offset().top-500},
        'slow');
    });

    $(".see-more-toggle.articles").click(function(){
        $(".primary-content.articles").toggleClass("more-revealer");
        $(".article.lower").toggleClass("article-hider");
        $(".see-more-toggle.articles").addClass('article-hider')
        $('html,body').animate({
        scrollTop: $(".article.lower").offset().top-500},
        'slow');
    });

       $(".top-cta").click(function(){
        $('html,body').animate({
        scrollTop: $(".single-article").offset().top},
        'slow');
    });
   

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-100
        }, 1000);
        return false;
      }
    }
  });
});
