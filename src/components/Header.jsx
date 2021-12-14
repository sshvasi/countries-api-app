import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { IoMoon, IoMoonOutline, IoSunny } from 'react-icons/io5';
import { Container } from './Container';

const HeaderOuter = styled.header`
    background-color: var(--colors-elements);
`;

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 2rem 0;
`;

const Title = styled.a.attrs({ href: '/' })`
    font-size: var(--fs-xl);
    font-weight: var(--fw-bold);
    text-decoration: none;
    color: var(--colors-text);

    @media (max-width: 768px) {
        font-size: var(--fs-lg);
    }

    @media (max-width: 425px) {
        font-size: var(--fs-md);
    }

    @media (max-width: 320px) {
        font-size: var(--fs-sm);
    }
`;

const ThemeText = styled.span`
    @media (max-width: 320px) {
        display: none;
    }
`;

const ThemeSwitcher = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--fs-sm);
    font-weight: var(--fw-bold);
    color: var(--color-text);
    cursor: pointer;
    text-transform: capitalize;

    @media (max-width: 768px) {
        font-size: var(--fs-xs);
        font-weight: var(--fw-semi-bold);
    }

    @media (max-width: 320px) {
        font-size: var(--fs-md);
        font-weight: var(--fw-bold);
    }
`;

const Header = () => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderOuter>
            <Container>
                <HeaderInner>
                    <Title>Where in the world?</Title>
                    <ThemeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? <IoMoon /> : <IoSunny />}
                        <ThemeText>
                            {theme === 'light' ? 'Dark' : 'Light'} Theme
                        </ThemeText>
                    </ThemeSwitcher>
                </HeaderInner>
            </Container>
        </HeaderOuter>
    );
};

export default Header;
