<?php
namespace Drupal\media_tweaks\Service;

use Drupal\Core\Link;
use Drupal\Core\Url;

class MediaTweaks {

  /**
   * @param $media_id
   * @param string $route_name
   * @param string $form_mode
   * @return array|mixed[]
   */
  public function getMediaFormLink($media_id, string $route_name = 'entity.media.canonical', string $form_mode = 'default') {
    $url = Url::fromRoute($route_name, [
      'media' => $media_id,
      'form_mode' => $form_mode,
      'no_redirect' => 1,
    ]);
    $link = Link::fromTextAndUrl('Edit', $url)->toRenderable();
    $link['#attributes'] = [
      'class' => [
        'media-library-item__edit',
        'icon-link',
      ]
    ];
    $link['#attached']['library'][] = 'media_tweaks/media_widget';

    return $link;
  }
}
