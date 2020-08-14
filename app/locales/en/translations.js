import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISShopМагазинLForm from './forms/i-i-s-shop-магазин-l';
import IISShopПродажаLForm from './forms/i-i-s-shop-продажа-l';
import IISShopТоварLForm from './forms/i-i-s-shop-товар-l';
import IISShopМагазинEForm from './forms/i-i-s-shop-магазин-e';
import IISShopПродажаEForm from './forms/i-i-s-shop-продажа-e';
import IISShopТоварEForm from './forms/i-i-s-shop-товар-e';
import IISShopМагазинModel from './models/i-i-s-shop-магазин';
import IISShopПродажаModel from './models/i-i-s-shop-продажа';
import IISShopСтрокаТовараModel from './models/i-i-s-shop-строка-товара';
import IISShopТоварModel from './models/i-i-s-shop-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-shop-магазин': IISShopМагазинModel,
    'i-i-s-shop-продажа': IISShopПродажаModel,
    'i-i-s-shop-строка-товара': IISShopСтрокаТовараModel,
    'i-i-s-shop-товар': IISShopТоварModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        shop: {
          caption: 'shop',
          title: 'shop',
          'i-i-s-shop-продажа-l': {
            caption: 'i-i-s-shop-продажа-l',
            title: 'i-i-s-shop-продажа-l'
          }
        },
        справочники: {
          caption: 'справочники',
          title: 'справочники',
          'i-i-s-shop-магазин-l': {
            caption: 'i-i-s-shop-магазин-l',
            title: 'i-i-s-shop-магазин-l'
          },
          'i-i-s-shop-товар-l': {
            caption: 'i-i-s-shop-товар-l',
            title: 'i-i-s-shop-товар-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-shop-магазин-l': IISShopМагазинLForm,
    'i-i-s-shop-продажа-l': IISShopПродажаLForm,
    'i-i-s-shop-товар-l': IISShopТоварLForm,
    'i-i-s-shop-магазин-e': IISShopМагазинEForm,
    'i-i-s-shop-продажа-e': IISShopПродажаEForm,
    'i-i-s-shop-товар-e': IISShopТоварEForm
  },

});

export default translations;
