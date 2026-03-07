import React from 'react';
import './index.css';
import * as C from './App.styles';
import { useFinances } from './hooks/useFinances';
import { useAuth } from './hooks/useAuth';
import InfoArea from './components/InfoArea/InfoArea';
import InputArea from './components/InputArea/InputArea';
import TableArea from './components/TableArea/TableArea';
import FilterArea from './components/FilterArea/FilterArea';
import Login from './components/Login/Login';
import CategorySummaryArea from './components/CategorySummaryArea/CategorySummaryArea';

const App = () => {
  const { user, loading: authLoading, signInWithGoogle, signOut } = useAuth();

  // Pass empty string if no user, the hook handles ignoring queries without userId
  const {
    filteredItems,
    summary,
    categorySummary,
    filterYear,
    filterMonth,
    setFilterYear,
    setFilterMonth,
    addItem,
    deleteItem,
    loading: financesLoading,
  } = useFinances(user?.uid || '');

  if (authLoading) {
    return (
      <C.Container>
        <C.LoadingWrapper>
          <C.Spinner />
          <span>Iniciando sistema seguro...</span>
        </C.LoadingWrapper>
      </C.Container>
    );
  }

  if (!user) {
    return <Login onLogin={signInWithGoogle} />;
  }

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

          <C.HeaderRight>
            <C.UserInfo>
              <C.UserName>{user.displayName}</C.UserName>
              <C.UserEmail>{user.email}</C.UserEmail>
            </C.UserInfo>
            <C.LogoutButton onClick={signOut}>
              Sair
            </C.LogoutButton>
          </C.HeaderRight>
        </C.HeaderInner>
      </C.Header>

      <C.Body>
        {financesLoading ? (
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

            <CategorySummaryArea categorySummary={categorySummary} />

            <InputArea onAdd={addItem} />

            <TableArea items={filteredItems} onDelete={deleteItem} />
          </>
        )}
      </C.Body>
    </C.Container>
  );
};

export default App;