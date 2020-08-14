import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  адрес: DS.attr('string')
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-shop-магазин.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-shop-магазин.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МагазинE', 'i-i-s-shop-магазин', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });

  modelClass.defineProjection('МагазинL', 'i-i-s-shop-магазин', {
    название: attr('Название', { index: 0 }),
    адрес: attr('Адрес', { index: 1 })
  });
};
