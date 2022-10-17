(function ($, Drupal, drupalSettings, window) {
  'use strict';
  Drupal.AjaxCommands.prototype.closeDialogOrRefreshPageCommand = function (ajax, response) {
    // Only the 'edit media' dialog?
    if ($('.ui-dialog').length == 1 && $(response.selector).length == 1) {
      window.location.reload();
    }
    else {
      Drupal.AjaxCommands.prototype.closeDialog(ajax, response);
    }
  };

}(jQuery, Drupal, drupalSettings, window));
