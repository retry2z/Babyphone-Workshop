import emailValidator from './functions/emailValidator';
import minLength from './functions/minLength';
import maxLength from './functions/maxLength';
import required from './functions/requiredValidator';
import passwordMatch from './functions/passwordMatch';

const validatorChecker = {
    email(data) {
        return emailValidator(data)
    },
    maxLength(data, length) {
        return maxLength(data, length);
    },
    minLength(data, length) {
        return minLength(data, length);
    },
    required(data) {
        return required(data);
    },
    passwordMatch(field1, filed2) {
        return passwordMatch(field1, filed2);
    }
}

export default (data = false, validators) => {
    if (!validators.length) {
        return []
    }

    const errors = [];

    validators.forEach(validator => {
        const { type, param } = validator;
        errors.push(
            {
                validate: {
                    type: validator.type,
                    isValid: validatorChecker[type](data, param || null),
                    message: validator.message
                }
            }
        )
    });

    return errors
};