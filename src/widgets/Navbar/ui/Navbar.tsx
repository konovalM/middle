import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);
    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <Button theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onOpenModal}>
                    Войти
                </Button>
            </div>

            <LoginModal isOpen={isAuthModal} onClose={onCloseModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Aliquid at beatae consequuntur cum ducimus,
                eligendi esse eum excepturi in ipsum iure magni nulla
                praesentium quas suscipit tenetur voluptates! Fuga, reiciendis.
            </LoginModal>
        </div>
    );
};
