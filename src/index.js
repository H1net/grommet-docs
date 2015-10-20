// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

require('./lib/modernizr');

if (! Modernizr.flexbox ||
  ! Modernizr.rgba) {
  alert('Unfortunately, your browser appears to be too old. ' +
    'We recommend the latest version of Chrome, Firefox, Safari, or Internet Explorer. ' +
    'If you are using the latest Internet Explorer, you will need to turn off Compatibility Mode.');
}

var React = require('react');
var Router = require('react-router');

var themeGroups = /docs\/([^\/]+)\/?/.exec(window.location.pathname);

var theme = '';
if (themeGroups && themeGroups.length > 1) {
  theme = themeGroups[1];
  var possibleThemes = 'aruba,hpe,hpinc';
  if (possibleThemes.indexOf(theme) === -1) {
    theme = '';
  }
}

var themeLink = document.getElementById('theme-link');
var themeUrl = '/docs/' + (theme === '' ? 'vanilla' : theme) + '.min.css';
themeLink.setAttribute('href', themeUrl);

var rootPath = '/docs/' + (theme === '' ? '' : theme + '/');

var routes = require('./routes')(rootPath);
var router = Router.create({routes: routes, location: Router.HistoryLocation});

router.run(function (Handler) {
  var element = document.getElementById('content');
  var locale = window.navigator.userLanguage || window.navigator.language;
  React.render(<Handler locales={locale} />, element);
  // scroll to top of document when navigating
  var docElements = document.querySelectorAll('.docs__doc');
  if (docElements.length > 0) {
    docElements[0].scrollTop = 0;
  }
});

document.body.classList.remove('loading');
