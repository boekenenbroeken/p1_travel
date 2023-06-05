import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { store } from './app/store/store';
import { ROUTES } from './app/constants/routes';
import { Notifications } from './view/components/Notifications/Notifications';

const App = () => (
    <Provider store={store}>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: 'light',
            }}
        >
            <Notifications />
            <Router>
                <Routes>
                    {ROUTES.map((route) => {
                        const { path, element: Element } = route;

                        return <Route key={path} path={path} element={<Element />} />;
                    })}

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </MantineProvider>
    </Provider>
);

export default App;
