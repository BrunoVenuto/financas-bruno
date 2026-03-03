import React from 'react';
import * as C from './FilterArea.styles';

const MONTHS = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

type Props = {
    filterYear: number;
    filterMonth: number;
    onMonthChange: (month: number) => void;
    onYearChange: (year: number) => void;
};

const FilterArea = ({ filterYear, filterMonth, onMonthChange, onYearChange }: Props) => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

    const handlePrev = () => {
        if (filterMonth === 0) {
            onMonthChange(11);
            onYearChange(filterYear - 1);
        } else {
            onMonthChange(filterMonth - 1);
        }
    };

    const handleNext = () => {
        if (filterMonth === 11) {
            onMonthChange(0);
            onYearChange(filterYear + 1);
        } else {
            onMonthChange(filterMonth + 1);
        }
    };

    return (
        <C.Container>
            <C.MonthLabel>
                {MONTHS[filterMonth]} {filterYear}
            </C.MonthLabel>
            <C.Controls>
                <C.ArrowBtn onClick={handlePrev} title="Mês anterior">‹</C.ArrowBtn>
                <C.ArrowBtn onClick={handleNext} title="Próximo mês">›</C.ArrowBtn>
                <C.YearSelect
                    value={filterYear}
                    onChange={(e) => onYearChange(Number(e.target.value))}
                >
                    {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </C.YearSelect>
            </C.Controls>
        </C.Container>
    );
};

export default FilterArea;
