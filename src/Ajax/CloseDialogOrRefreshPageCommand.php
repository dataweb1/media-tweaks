<?php

namespace Drupal\media_tweaks\Ajax;

use Drupal\Core\Ajax\CommandInterface;

/**
 * An Ajax Command that refreshes the current page.
 */
class CloseDialogOrRefreshPageCommand implements CommandInterface {

  /**
   * @var string $selector
   */
  private $selector;

  /**
   * @var bool $persist
   */
  private $persist;

  public function __construct($selector = NULL, $persist = FALSE) {
    $this->selector = $selector ? $selector : '#drupal-modal';
    $this->persist = $persist;
  }

  /**
   * {@inheritdoc}
   */
  public function render(): array {
    return [
      'command' => 'closeDialogOrRefreshPageCommand',
      'selector' => $this->selector,
      'persist' => $this->persist,
    ];
  }

}
