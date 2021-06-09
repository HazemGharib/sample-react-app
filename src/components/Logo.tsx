import styled from 'styled-components';
import logo from '../logo.svg';

const Header = styled.header`
  margin: 0 auto;
  width: max-content;
`;
const CenteredParagraph = styled.p`
  margin: 0 auto;
  width: fit-content;
`;

export const Logo: React.FC = () => (
  <Header>
    <img src={logo} alt="logo" />
    <CenteredParagraph>
      <span>A demo to </span>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </CenteredParagraph>
  </Header>
);