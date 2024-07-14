import { View } from 'react-native';
import products from '../../../assets/data/products';
import ProductListItem from './../../components/ProductListItem';

export default function TabOneScreen() {
  return (
    <View>
      <ProductListItem product={products[3]} />
      <ProductListItem product={products[1]} />
    </View>
  );
}
