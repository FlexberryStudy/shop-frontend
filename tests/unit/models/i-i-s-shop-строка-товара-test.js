import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-shop-строка-товара', 'Unit | Model | i-i-s-shop-строка-товара', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-shop-магазин',
    'model:i-i-s-shop-продажа',
    'model:i-i-s-shop-строка-товара',
    'model:i-i-s-shop-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
