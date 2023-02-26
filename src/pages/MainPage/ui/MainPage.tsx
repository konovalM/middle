import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
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
            <Input value={value} onChange={onChange} placeholder="Введите текст" />
        </div>
    );
};

export default MainPage;
