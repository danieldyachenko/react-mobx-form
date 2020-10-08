import { useLocalObservable } from 'mobx-react';
import React, { createContext, FC, useContext } from 'react';
import RootStore from './rootStore';

const StoreContext = createContext(null);

export const StoreProvider: FC = ({ children }) => {
    const store = useLocalObservable(() => ({...new RootStore()}));
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);
