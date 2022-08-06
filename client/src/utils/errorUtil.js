export const errorMessages = {
    emailError: 'Email should be longer than 3 characters',
    passwordError: 'Password should be at least 6 characters',
    rePassError: 'Password and repeat password do not match',
    typeError: 'Type should be at least 3 characters long',
    modelError: 'Model should be at least 3 characters long',
    imgUrlError: 'You should provide image url',
    priceError: 'Price should be a minimum of 1000$',
    descriptionError: 'Description should be at least 20 characters long',
}

export const getErrorMessage = (errorField, value) => {
    switch (errorField) {
        case 'email':
            return value.length <= 3 ? errorMessages.emailError : '';
        case 'password':
            return value.length < 6 ? errorMessages.passwordError : '';
        case 'type':
            return value.length < 3 ? errorMessages.typeError : '';
        case 'model':
            return value.length < 3 ? errorMessages.modelError : '';
        case 'imgUrl':
            return value.length < 10 ? errorMessages.imgUrlError : '';
        case 'price':
            return value < 1000 ? errorMessages.priceError : '';
        case 'description':
            return value.length < 20 ? errorMessages.descriptionError : '';
        default:
            return '';
    }
}

