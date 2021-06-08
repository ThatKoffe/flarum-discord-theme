<?php

/*
 * This file is part of serakoi/flarum-discord-theme.
 *
 * Copyright (c) 2021 Seer.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Serakoi\FlarumDiscordTheme;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        
        ->css(__DIR__.'/resources/less/forum.less'),
    
    new Extend\Locales(__DIR__ . '/resources/locale')
];
