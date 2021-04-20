import RegisterForm from '../components/RegisterForm/RegisterForm';
import { modalType } from '../constants/modalType';

export const contentType = (name) => {
    switch(name) {
        case modalType.REGISTER:
            return <RegisterForm />;
        case modalType.SIGN_IN:
            return 'sign in';
        default:
            return null;
    }
}