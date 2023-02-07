import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../config/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={'Загрузка...'}>
            <Routes>
                    {
                        Object.values(routeConfig)
                            .map(({path, element}) => (
                                <Route path={path} element={<div className={'page-wrapper'}>{element}</div>} key={path}/>
                            ))
                    }
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
