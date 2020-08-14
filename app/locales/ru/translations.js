import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Shop',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Shop',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Shop',
          title: 'Shop'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        shop: {
          caption: 'Shop',
          title: 'Shop',
          'i-i-s-shop-продажа-l': {
            caption: 'Продажа',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-shop-магазин-l': {
            caption: 'Магазин',
            title: 'Магазин'
          },
          'i-i-s-shop-товар-l': {
            caption: 'Товар',
            title: 'Товар'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
