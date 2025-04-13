import { isAxiosError } from 'axios';
import { useToast } from '../context/useToast';

const useHandleError = () => {
    const showToast = useToast();

    const handleError = (error) => {
        if (isAxiosError(error)) {
            const err = error.response;

            if (Array.isArray(err?.data)) {
                for (const val of err.data) {
                    showToast(val.description, { variant: 'warning' });
                }
            } else if (typeof err?.data?.errors === 'object') {
                for (const key in err.data.errors) {
                    showToast(err.data.errors[key][0], { variant: 'warning' });
                }
            } else if (err?.data) {
                showToast(err.data, { variant: 'warning' });
            } else if (err?.status === 401) {
                showToast('Please login', { variant: 'warning' });
                window.history.pushState({}, '', '/');
            } else {
                showToast('An unknown error occurred', { variant: 'error' });
            }
        } else {
            showToast('An unexpected error occurred', { variant: 'error' });
        }
    };

    return handleError;
};

export default useHandleError;
