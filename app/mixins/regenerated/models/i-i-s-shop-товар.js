import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  описание: DS.attr('string')
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-shop-товар.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-shop-товар.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-shop-товар', {
    название: attr('Название', { index: 0 }),
    описание: attr('Описание', { index: 1 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-shop-товар', {
    название: attr('Название', { index: 0 }),
    описание: attr('Описание', { index: 1 })
  });
};
