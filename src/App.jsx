import Controls from './components/Controls';
import Header from './components/Header';
import Main from './components/Main';
import { GlobalStyle } from './GlobalStyles';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main>
                <Controls />
            </Main>
        </>
    );
};

export default App;
