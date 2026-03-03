import React from 'react';
import * as C from './Login.styles';

type Props = {
    onLogin: () => void;
    loading?: boolean;
};

const Login = ({ onLogin, loading }: Props) => {
    return (
        <C.Container>
            <C.Box>
                <C.Icon>💼</C.Icon>
                <C.Title>Finanças Pessoais</C.Title>
                <C.SubTitle>Faça login para gerenciar suas receitas e despesas com segurança.</C.SubTitle>

                <C.LoginButton onClick={onLogin} disabled={loading}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Google Logo"
                    />
                    {loading ? 'Entrando...' : 'Entrar com Google'}
                </C.LoginButton>
            </C.Box>
        </C.Container>
    );
};

export default Login;
