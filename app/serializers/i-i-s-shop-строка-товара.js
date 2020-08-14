import { Serializer as СтрокаТовараSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shop-строка-товара';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтрокаТовараSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
