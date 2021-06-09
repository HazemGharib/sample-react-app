import {useCallback, useEffect, useMemo, useState} from 'react';
import styled from 'styled-components';
import {ProductItem} from '../types/Product';
import {Card} from './Card';

const Container = styled.div`
  margin: 0 auto;
  width: 100rem;
`;
const FilterContainer = styled.div`
  width: fit-content;
  margin: 2rem auto;
`;
const FilterButton = styled.button`
  margin: 1rem;
`;

export const ProductList: React.FC = () => {
  const [listItems, setListItems] = useState<ProductItem[]>([]);

  const getItemPrice = (item: ProductItem) => item?.price.split('$')[1] as unknown as number;
  const filterAvailableItems = () => setListItems(items.filter(item => item?.inStock));
  const filterUnavailableItems = () => setListItems(items.filter(item => !item?.inStock));
  const filterExpensiveItems = () => setListItems(items.filter(item => getItemPrice(item) >= 5));
  const filterCheapItems = () => setListItems(items.filter(item => getItemPrice(item) < 5));

  const items = useMemo((): ProductItem[] => [
    {name: 'Item 1', price: '$1', count: 10, inStock: true},
    {name: 'Item 2', price: '$3', count: 11, inStock: true},
    {name: 'Item 3', price: '$5', count: 12, inStock: true},
    {name: 'Item 4', price: '$7', count: 13, inStock: true},
    {name: 'Item 5', price: '$5', count: 0, inStock: false},
    {name: 'Item 6', price: '$3', count: 1, inStock: true},
    {name: 'Item 7', price: '$1', count: 2, inStock: true},
    {name: 'Item 8', price: '$7', count: 3, inStock: true}
  ], []);

  const getAllProducts = useCallback(() => setListItems(items), [items]);

  useEffect(() => getAllProducts(), [items, getAllProducts]);

  return (
    <>
      <FilterContainer>
        <FilterButton onClick={filterAvailableItems}>Available only</FilterButton>
        <FilterButton onClick={filterUnavailableItems}>Unavailable only</FilterButton>
        <FilterButton onClick={filterExpensiveItems}>Expensive only</FilterButton>
        <FilterButton onClick={filterCheapItems}>Cheap only</FilterButton>
        <FilterButton onClick={getAllProducts}>Clear filters</FilterButton>
      </FilterContainer>
      <Container data-testid="product-list" >
        {
          listItems.map((item, i) => (
            <Card item={item} key={`cart-item-${i}`} />      
          ))
        }
      </Container>
    </>
  );
};