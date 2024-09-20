'use client'

import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store'

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <main>{children}</main>
            </PersistGate>
        </Provider>
    )
}

export default ClientLayout;