import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-elements)',
            color: 'var(--colors-text)',
            boxShadow: 'var(--colors-shadow)',
            border: 0,
            outline: 0,
            cursor: 'pointer',
            height: '52px',
            padding: '0.25rem',
            borderRadius: 'var(--radii)',
        }),
        option: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-elements)',
            color: 'var(--colors-text)',
            fontSize: 'var(--fs-md)',
            cursor: 'pointer',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'var(--colors-text)',
            fontSize: 'var(--fs-sm)',
        }),
        menu: (provided) => ({
            ...provided,
            boxShadow: 'var(--colors-shadow)',
            borderRadius: 'var(--radii)',
        }),
    },
})`
    width: 200px;
    border-radius: var(--radii);
    font-family: var(--family);
    border: none;
    font-family: var(--family) !important;

    & * {
        font-family: var(--family) !important;
        font-size: var(--fs-sm) !important;
    }

    & > div[id] {
        background-color: var(--colors-elements);
    }
`;
