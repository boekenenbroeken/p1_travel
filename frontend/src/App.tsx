import React from 'react';
import './App.css';
import { createStyles, MantineProvider } from '@mantine/core';
import { colors } from './app/constants/colors';
import { Provider } from 'react-redux';
import { store } from './app/store/store';

const useStyles = createStyles((theme) => ({
    bodyBackground: {
        backgroundColor: colors.lightBackground,
        minHeight: '100vh',
    },
}));

function App() {
    const { classes } = useStyles();

    return (
        <Provider store={store}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <div className={classes.bodyBackground}>
                    <div>
                        <strong>What is already built:</strong>
                    </div>
                    <div>
                        <ul>
                            <li>UI - We already made all the UI components for you</li>
                            <li>Basic folder structure</li>
                            <li>Initialized redux store</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Special packages we used:</strong>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <strong>React-hook-form</strong> - Form management package
                            </li>
                            <li>
                                <strong>Mantine UI</strong> - UI Component library
                            </li>
                            <li>
                                <strong>Redux Toolkit</strong> - Simplified Redux state management
                            </li>
                            <li>
                                <strong>Prettier</strong> - This project supports prettier
                            </li>
                        </ul>
                    </div>
                    <div style={{ color: 'red' }}>
                        <strong>Missing pieces in this application:</strong>
                    </div>
                    <div>
                        <ul>
                            <li>Routing</li>
                            <li>Api calls to populate the application</li>
                            <li>Implementing the Redux store to save the data</li>
                            <li>
                                Form validation (<strong>TIP!</strong> react-hook-form integrates
                                easily with <a href="https://github.com/jquense/yup">Yup</a>)
                            </li>
                        </ul>
                    </div>
                </div>
            </MantineProvider>
        </Provider>
    );
}

export default App;
