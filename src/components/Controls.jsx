import { useState } from 'react';
import styled from 'styled-components';
import Search from './Search';
import { CustomSelect } from './Select';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const ControlsOuter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`;

const Controls = () => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState(' ');

    return (
        <ControlsOuter>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </ControlsOuter>
    );
};

export default Controls;
