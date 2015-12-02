(function($){
  "use strict";
  $(document).ready(function(){
    $(".element").each(function(){
      var $this = $(this);
      $this.typed({
        strings: $this.attr('data-elements').split(','),
        typeSpeed: 75,
        backSpeed: 10,
        backDelay: 1000,
        loop: true
      })
    });
  });
})(jQuery);
