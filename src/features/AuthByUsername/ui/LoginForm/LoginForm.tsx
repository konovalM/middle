import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(styles.loginForm, {}, [className])}>
                <Text title="Форма авторизации" />
                {
                    error && <Text text={error} theme={TextTheme.ERROR} />
                }
                <Input
                    type="text"
                    placeholder="Логин"
                    autoFocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    placeholder="Пароль"
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    className={styles.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    Войти
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
