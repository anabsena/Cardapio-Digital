// TableNumberContext.js
import React, { createContext, useContext, useState } from 'react';

const TableNumberContext = createContext();

export const useTableNumber = () => useContext(TableNumberContext);

export const TableNumberProvider = ({ children }) => {
    const [tableNumber, setTableNumber] = useState('');

    return (
        <TableNumberContext.Provider value={{ tableNumber, setTableNumber }}>
            {children}
        </TableNumberContext.Provider>
    );
};
