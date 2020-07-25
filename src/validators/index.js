import emailValidator from './functions/emailValidator';
import minLengthValidator from './functions/minLength';
import maxLengthValidator from './functions/maxLength';

const validatorChecker = {
    email(data) {
        return emailValidator(data)
    },
    maxLength(data, length) {
        return maxLengthValidator(data, length)
    },
    minLength(data, length) {
        return minLengthValidator(data, length)
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