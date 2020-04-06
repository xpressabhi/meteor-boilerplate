// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';
import moment from 'moment';

import {
  WebApp
} from 'meteor/webapp';
WebApp.addHtmlAttributeHook(() => ({
  lang: 'en'
}));


import {
  onPageLoad
} from 'meteor/server-render';

function createMetaTag(property, content) {
  return `<meta property="${property}" content="${content}">`;
}

onPageLoad((sink) => {
  const {
    pathname
  } = sink.request.url;
  const meteorHost = Meteor.absoluteUrl();
  const siteName = 'meterojs boilerplate';
  const defaultImage = 'https://res.cloudinary.com/xpsabhi/image/upload/v1584545524/Screenshot_2020-03-18_at_9.01.23_PM.png';
  let title = 'Meteor boilerplate';
  let description = `${title} Meteor boilerplate`;
  const keywords = 'Meteor';
  const fullUrl = meteorHost + pathname.replace(/^\/+/g, '');
  const path = pathname.split('/');
  switch (path[1]) {
    case 'path':
      title = `Path`;
      break;
    default:
      title = 'Meteor';
      description = `Meteor`;
  }
  sink.appendToHead(`<title>${title} | ${siteName}</title>`);
  sink.appendToHead(`<meta name="keywords" content="${keywords}">`);
  sink.appendToHead(`<meta name="description" content="${description}">`);
  sink.appendToHead(createMetaTag('keywords', keywords));
  sink.appendToHead(createMetaTag('description', description));
  sink.appendToHead(createMetaTag('og:locale', 'en_US'));
  sink.appendToHead(createMetaTag('og:type', 'website'));
  sink.appendToHead(createMetaTag('og:title', title));
  sink.appendToHead(createMetaTag('og:description', description));
  sink.appendToHead(createMetaTag('og:url', fullUrl));
  sink.appendToHead(createMetaTag('og:image', defaultImage));
  sink.appendToHead(createMetaTag('og:site_name', siteName));
});