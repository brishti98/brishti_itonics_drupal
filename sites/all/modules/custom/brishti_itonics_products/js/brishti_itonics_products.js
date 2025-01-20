(function ($) {
  Drupal.behaviors.brishtiItonicsProducts = {
    attach: function (context, settings) {
      try {
        $('.multiselect', context).once('multiselect').multiselect();
      } catch(e) {
        console.error('Multiselect error:', e);
      }
    }
  };
})(jQuery);
