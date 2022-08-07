export const errorMessages = {
    emailError: 'Email should be longer than 3 characters',
    passwordError: 'Password should be at least 6 characters',
    rePassError: 'Password and repeat password do not match',
    typeErrorMin: 'Type should be at least 3 characters long',
    typeErrorMax: 'Type cannot be longer than 20 characters',
    modelErrorMin: 'Model should be at least 3 characters long',
    modelErrorMax: 'Model cannot be longer than 20 characters',
    imgUrlError: 'You should provide image url',
    priceErrorMin: 'Price should be a minimum of 1000$',
    priceErrorMax: 'Price cannot be bigger than 10,000,000$',
    descriptionError: 'Description should be at least 20 characters long',
}

export const getErrorMessage = (errorField, value) => {
    switch (errorField) {
        case 'email':
            return value.length <= 3 ? errorMessages.emailError : '';
        case 'password':
            return value.length < 6 ? errorMessages.passwordError : '';
        case 'type':
            return value.length >= 3 ? (value.length > 20 ? errorMessages.typeErrorMax : '') : errorMessages.typeErrorMin;
        case 'model':
            return value.length >= 3 ? (value.length > 20 ? errorMessages.modelErrorMax : '') : errorMessages.modelErrorMin;
        case 'imgUrl':
            return value.length < 10 ? errorMessages.imgUrlError : '';
        case 'price':
            return value >= 1000  ? (value > 10000000 ? errorMessages.priceErrorMax : '') : errorMessages.priceErrorMin;
        case 'description':
            return value.length < 20 ? errorMessages.descriptionError : '';
        default:
            return '';
    }
}

