app.initializers.add('serakoi/flarum-discord-theme', () => {
  app.extensionData.for('serakoi-flarumdiscordtheme').registerSetting({
    setting: 'serakoi-flarumdiscordtheme.coordinates',
    name: 'authorBadgeText',
    type: 'text',
    label: app.translator.trans('flarum-discord-theme.admin.settings.authorBadge.label'),
    help: app.translator.trans('flarum-discord-theme.admin.settings.authorBadge.help'),
  });
});
