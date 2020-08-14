import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  магазин: DS.belongsTo('i-i-s-shop-магазин', { inverse: null, async: false }),
  строкаТовара: DS.hasMany('i-i-s-shop-строка-товара', { inverse: 'продажа', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-shop-продажа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  магазин: {
    descriptionKey: 'models.i-i-s-shop-продажа.validations.магазин.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строкаТовара: {
    descriptionKey: 'models.i-i-s-shop-продажа.validations.строкаТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПродажаE', 'i-i-s-shop-продажа', {
    дата: attr('Дата', { index: 0 }),
    магазин: belongsTo('i-i-s-shop-магазин', 'Магазин', {
      название: attr('Название', { index: 2 })
    }, { index: 1 }),
    строкаТовара: hasMany('i-i-s-shop-строка-товара', 'Строка товара', {
      количество: attr('Количество', { index: 0 }),
      товар: belongsTo('i-i-s-shop-товар', 'Товар', {
        название: attr('Название', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('ПродажаL', 'i-i-s-shop-продажа', {
    дата: attr('Дата', { index: 0 }),
    магазин: belongsTo('i-i-s-shop-магазин', 'Название', {
      название: attr('Название', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
