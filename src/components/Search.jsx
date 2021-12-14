import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 480px;
    width: 100%;
    padding: 1rem 2rem;
    background-color: var(--colors-elements);
    border-radius: var(--radii);
    cursor: text;
    box-shadow: var(--colors-shadow);
    color: var(--colors-search);
    font-size: var(--fs-lg);

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country…',
})`
    width: 100%;
    border: none;
    outline: none;
    background-color: var(--colors-elements);
    font-family: var(--family);
    font-size: var(--fs-md);
    font-weight: var(--fw-light);
    color: var(--colors-text);

    &::placeholder {
        font-family: var(--family);
        font-weight: var(--fw-light);
        font-size: var(--fs-md);
        color: var(--colors-placeholder);
    }

    &::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }
    &::-ms-reveal {
        display: none;
        width: 0;
        height: 0;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        display: none;
    }
`;

const Search = ({ search, setSearch }) => {
    return (
        <Label>
            <IoSearch />
            <Input onChange={(e) => setSearch(e.target.value)} value={search} />
        </Label>
    );
};

export default Search;
