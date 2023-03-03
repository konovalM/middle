import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };
    return (
        <div>
            <BugButton />
            <div>
                {
                    t('Главная')
                }
                {/* <Counter /> */}
            </div>
        </div>
    );
});

export default MainPage;
