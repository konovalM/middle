import {FC} from 'react';
import styles from './LangSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const {t, i18n} = useTranslation()
    console.log(i18n.language)
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button onClick={toggleLanguage} theme={ThemeButton.CLEAR} className={classNames(styles.langSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
    );
};