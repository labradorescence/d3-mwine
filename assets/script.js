(function($) {
  $('.toggle-display').on('click', function() {
    var $target = $($(this).attr('data-target'));
    $target.show();
    $target.animate({
      left: 0
    });
  });
  $('.toggle-hide').on('click', function() {
    var $target = $($(this).attr('data-target'));
    $target.animate({
      left: '100%'
    },function() {
      $target.hide();
    });
  });
})(jQuery);