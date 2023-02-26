import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
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
    );
});
