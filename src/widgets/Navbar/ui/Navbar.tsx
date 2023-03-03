import React, {
    FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const userAuthData = useSelector(getUserAuthData);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = () => {
        dispatch(userActions.logout());
    };

    if (userAuthData) {
        return (
            <div className={classNames(styles.navbar, {}, [className])}>
                <div className={styles.links}>
                    <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onLogout}>
                        Выйти
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onOpenModal}>
                    Войти
                </Button>
            </div>

            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
});
