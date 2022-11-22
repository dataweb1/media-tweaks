(function ($) {
  Drupal.media_entity_form = Drupal.media_entity_form || {};

  Drupal.behaviors.media_entity_form = {
    attach: function (context) {
      console.log('ok?');
      // Move 'Rename file' to joing the 'delete' button in Claro.
      $('.form-managed-file [name$="_remove_button"]').appendTo('.form-managed-file__main');
      $('.form-managed-file .file').appendTo('.image-preview__img-wrapper');
      $('.form-managed-file .file a').attr('target', '_blank');
    }
  };

})(jQuery);
