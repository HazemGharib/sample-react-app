import {render} from '@testing-library/react';
import {ProductItem} from '../types/Product';
import {Card} from './Card';
import {Chance} from 'chance';

const chance = new Chance();
const createFakeProduct = () => {
  const available = chance.bool(); 
  return {
    name: chance.string(),
    inStock: available,
    count: available? chance.integer({min: 0, max: 100}) : 0,
    price: `$${chance.integer({min: 1, max: 100})}`
  };
};

describe('Card', () => {
  test('Should render card items correctly', () => {
    const fakeProduct: ProductItem = createFakeProduct();

    const {getByText} = render(<Card item={fakeProduct} />);

    expect(getByText(fakeProduct.name)).toBeInTheDocument();
    expect(getByText(`${fakeProduct.price} - ${fakeProduct.count} item${fakeProduct.count !== 1 ? 's' : ''} available`)).toBeInTheDocument();
    expect(getByText(`${fakeProduct.inStock? 'In stock' : 'Out of stock'}`)).toBeInTheDocument();
  });

  test('Should render "No data available" when card\'s item is undefined', () => {
    const fakeProduct: ProductItem | undefined = undefined;

    const {getByText} = render(<Card item={fakeProduct} />);

    expect(getByText('No data available')).toBeInTheDocument();
  });
});
