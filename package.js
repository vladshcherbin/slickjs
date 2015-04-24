Package.describe({
  name: 'shcherbin:slickjs',
  version: '1.5.2',
  summary: 'Slick js skeleton wrapper for meteor. Create beautiful carousels and sliders with ease!',
  git: 'https://github.com/VladShcherbin/slickjs',
  documentation: 'readme.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('jquery', 'client');
  api.addFiles([
    'vendor/slick/slick.js',
    'vendor/slick/slick.css'
  ], 'client');
});