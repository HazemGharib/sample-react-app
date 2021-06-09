import styled from 'styled-components';
import {ProductItem} from '../types/Product';

const CardContainer = styled.div`
  margin: 1rem 2rem;
  padding: 1rem;
  width: 300px;
  height: 400px;
  display: inline-block;
  border: 1px solid black;
`;
const [CenteredDiv, EmptyStateDiv] = new Array(2).fill(styled.div`
  margin: 0 auto;
  width: fit-content;
`);

export const Card: React.FC<{item: ProductItem}> = ({item}) => {

  const renderAvailableCount = (count: number) => `${count} item${count !== 1 ? 's' : ''} available`;
  const renderInStock = (inStock: boolean) => inStock ? 'In stock' : 'Out of stock';

  return (
    <>
      {item && (
        <CardContainer>
          <CenteredDiv>
            <h2>{item.name}</h2>
            <h5>{renderInStock(item.inStock)}</h5>
            <p>{item.price} - {renderAvailableCount(item.count)}</p>
          </CenteredDiv>        
        </CardContainer>   
      )} 
      {(!item && <EmptyStateDiv>
        No data available
      </EmptyStateDiv>)}
    </>
  );
};