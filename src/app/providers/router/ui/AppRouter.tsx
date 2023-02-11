import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routeConfig } from '../config/routeConfig';

const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={t('Загрузка')}>
            <Routes>
                {
                    Object.values(routeConfig)
                        .map(({ path, element }) => (
                            <Route path={path} element={<div className="page-wrapper">{element}</div>} key={path} />
                        ))
                }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
