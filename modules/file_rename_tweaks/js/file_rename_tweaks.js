(function ($) {
  Drupal.rename_file_tweaks = Drupal.rename_file_tweaks || {};

  Drupal.behaviors.rename_file_tweaks = {
    attach: function (context) {
      // Move 'Rename file' to joing the 'delete' button in Claro.
      $('.button-file-rename').appendTo('.form-managed-file__main');

    }
  };

})(jQuery);
