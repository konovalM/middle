import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import Error from 'shared/assets/icons/error.svg';
import styles from './PageError.module.scss';

export const PageError: FC = () => {
    const { t } = useTranslation();
    const reload = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(styles.pageError)}>
            <Error className={styles.error} />
            <div>{t('Ошибка')}</div>
            <Button onClick={reload}>{t('Перезагрузка')}</Button>
        </div>
    );
};
