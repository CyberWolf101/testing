// useCheckLocalStorageForUser.js
import { useEffect, useContext } from 'react';
import { userContext } from '../../../userContext';

export const useCheckLocalStorageForUser = () => {
    const [, setUser] = useContext(userContext);

    useEffect(() => {
        console.log('useCheckLocalStorageForUser()...')
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [setUser]);
};
