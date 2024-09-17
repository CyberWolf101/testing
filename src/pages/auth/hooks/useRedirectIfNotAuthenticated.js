// useRedirectIfNotAuthenticated.js
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../userContext';
import swal from 'sweetalert';

export const useRedirectIfNotAuthenticated = () => {
    const [user] = useContext(userContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.id) {
            swal("You must be logged in.")
            navigate('/login');
        }
    }, [user, navigate]);
};
