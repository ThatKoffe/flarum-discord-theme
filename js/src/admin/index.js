// Big thanks to: https://discuss.flarum.org/u/Justoverclock for helping!
import app from 'flarum/app';

app.initializers.add('serakoi/flarum-discord-theme', () => {
  app.extensionData.for('serakoi/flarum-discord-theme').registerSetting({
    setting: 'serakoi-flarumdiscordtheme.authorbadgetext',
    name: 'authorBadgeText',
    type: 'text',
    label: app.translator.trans('flarum-discord-theme.admin.settings.authorBadge.label'),
    help: app.translator.trans('flarum-discord-theme.admin.settings.authorBadge.help'),
  });
});
