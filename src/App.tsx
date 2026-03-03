import React from 'react';
import './index.css';
import * as C from './App.styles';
import { useFinances } from './hooks/useFinances';
import InfoArea from './components/InfoArea/InfoArea';
import InputArea from './components/InputArea/InputArea';
import TableArea from './components/TableArea/TableArea';
import FilterArea from './components/FilterArea/FilterArea';

const App = () => {
  const {
    filteredItems,
    summary,
    filterYear,
    filterMonth,
    setFilterYear,
    setFilterMonth,
    addItem,
    deleteItem,
    loading,
  } = useFinances();

  return (
    <C.Container>
      <C.Header>
        <C.HeaderInner>
          <C.HeaderLeft>
            <C.HeaderIcon>💼</C.HeaderIcon>
            <C.HeaderTextWrap>
              <C.HeaderTitle>Finanças Pessoais</C.HeaderTitle>
              <C.HeaderSubtitle>Controle de receitas e despesas</C.HeaderSubtitle>
            </C.HeaderTextWrap>
          </C.HeaderLeft>
        </C.HeaderInner>
      </C.Header>

      <C.Body>
        {loading ? (
          <C.LoadingWrapper>
            <C.Spinner />
            <span>Carregando dados...</span>
          </C.LoadingWrapper>
        ) : (
          <>
            <FilterArea
              filterYear={filterYear}
              filterMonth={filterMonth}
              onMonthChange={setFilterMonth}
              onYearChange={setFilterYear}
            />

            <InfoArea
              income={summary.income}
              expense={summary.expense}
              balance={summary.balance}
            />

            <InputArea onAdd={addItem} />

            <TableArea items={filteredItems} onDelete={deleteItem} />
          </>
        )}
      </C.Body>
    </C.Container>
  );
};

export default App;