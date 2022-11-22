(function ($) {
  Drupal.rename_file_tweaks = Drupal.rename_file_tweaks || {};

  Drupal.behaviors.rename_file_tweaks = {
    attach: function (context) {
      // Move 'Rename file' to joing the 'delete' button in Claro.

      $('.button-file-rename').once().each(function() {
        if ($('.media-library-add-form-wrapper').length > 0) {
          let w = $(this).closest('details');
          console.log(w.length);

          $(this).appendTo(w.find('.form-item-name'));
        }
        else {
          let w = $(this).parent().find('.form-managed-file__meta-wrapper');
          $(this).appendTo(w.find('.file--image'));
        }
      });

    }
  };

})(jQuery);
