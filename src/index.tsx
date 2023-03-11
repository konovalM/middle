import { StoreProvider } from 'app/providers/StoreProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import './shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
    <BrowserRouter>
        <StoreProvider>
            <Suspense fallback="">
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </Suspense>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
