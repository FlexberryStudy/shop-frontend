import { Serializer as МагазинSerializer } from
  '../mixins/regenerated/serializers/i-i-s-shop-магазин';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МагазинSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
