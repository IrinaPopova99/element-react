import * as yup from "yup";
import { setLocale } from 'yup';

setLocale({
    string: {
        max: 'Слишком много символов',
        required: 'Это обязательное поле',
        min: 'Слишком мало символов',
        url: 'Это должна быть ссылка',
    },
    array: {
        min: 'Это обязательное поле',
    },
});

export const errorMessages = yup.object().shape({
    code: yup.string().required(),
    username: yup.string().max(20).required(),
    password: yup.string().max(30).min(8).required(),
    firstName: yup.string().required().max(30),
    lastName: yup.string().required().max(50),
    instagram: yup.string().required().url().max(100),
    programs: yup.array().min(1),
});