import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <BugButton />
            <div>
                {
                    t('Главная')
                }
            </div>
        </div>
    );
};

export default MainPage;
