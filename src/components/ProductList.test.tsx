import {findByTestId, render, screen} from '@testing-library/react';
import {ProductItem} from '../types/Product';
import {ProductList} from './ProductList';

describe('ProductList', () => {
  afterAll(() => {
    screen.queryByText('Clear filters')?.click();
  });

  test('Should render filter buttons', () => {
    const {getByText} = render(<ProductList />);
    expect(getByText('Available only')).toBeInTheDocument();
    expect(getByText('Unavailable only')).toBeInTheDocument();
    expect(getByText('Expensive only')).toBeInTheDocument();
    expect(getByText('Cheap only')).toBeInTheDocument();
    expect(getByText('Clear filters')).toBeInTheDocument();
  });

  test('Should filter available products correctly', () => {
    render(<ProductList />);
    screen.queryByText('Available only')?.click();
    const products = screen.getByTestId('product-list')?.children;
    expect(products.length).toBe(7);
  });

  test('Should filter unavailable products correctly', () => {
    render(<ProductList />);
    screen.queryByText('Unavailable only')?.click();
    const products = screen.getByTestId('product-list')?.children;
    expect(products.length).toBe(1);
  });

  test('Should filter expensive products correctly', () => {
    render(<ProductList />);
    screen.queryByText('Expensive only')?.click();
    const products = screen.getByTestId('product-list')?.children;
    expect(products.length).toBe(4);
  });

  test('Should filter cheap products correctly', () => {
    render(<ProductList />);
    screen.queryByText('Cheap only')?.click();
    const products = screen.getByTestId('product-list')?.children;
    expect(products.length).toBe(4);
  });
});
