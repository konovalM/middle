import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => (
    <div className={classNames(styles.loginForm, {}, [className])}>
        <Input
            type="text"
            placeholder="Логин"
            autoFocus
        />
        <Input
            type="text"
            placeholder="Пароль"
        />
        <Button theme={ButtonTheme.BACKGROUND_INVERTED} className={styles.loginBtn}>Войти</Button>
    </div>
);
