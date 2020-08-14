import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товар: DS.belongsTo('i-i-s-shop-товар', { inverse: null, async: false }),
  продажа: DS.belongsTo('i-i-s-shop-продажа', { inverse: 'строкаТовара', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-shop-строка-товара.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товар: {
    descriptionKey: 'models.i-i-s-shop-строка-товара.validations.товар.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  продажа: {
    descriptionKey: 'models.i-i-s-shop-строка-товара.validations.продажа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтрокаТовараE', 'i-i-s-shop-строка-товара', {
    количество: attr('Количество', { index: 0 }),
    товар: belongsTo('i-i-s-shop-товар', 'Товар', {
      название: attr('Название', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'название' })
  });
};
