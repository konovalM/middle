import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import App from './app/App';

import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import './shared/config/i18n/i18n';

render(
    <BrowserRouter>
        <Suspense fallback="">
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root'),
);
