import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('магазин', 'Магазинs');
inflector.irregular('продажа', 'Продажаs');
inflector.irregular('товара', 'Товараs');
inflector.irregular('товар', 'Товарs');

export default {};
