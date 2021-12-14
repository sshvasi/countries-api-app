import styled from 'styled-components';
import { Container } from './Container';

const MainOuter = styled.main`
    padding: 3rem 0;

    @media (max-width: 768px) {
        padding: 1.5rem 0;
    } ;
`;

const Main = ({ children }) => {
    return (
        <MainOuter>
            <Container>{children}</Container>
        </MainOuter>
    );
};

export default Main;
