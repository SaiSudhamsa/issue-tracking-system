import { check } from "express-validator";

let validateRegister = [
    check("email", "Invalid email").isEmail().trim(),

    check("password", "Invalid password. Password length need to be between 8 and 16 characters long")
    .isLength({ min: 8, max: 16 }),

    /*check("passwordConfirmation", "Password confirmation does not match password")
    *.custom((value, { req }) => {
     *   return value === req.body.password
    })*/
    //disable confirm password for some time
];

let validateLogin = [
    check("email", "Invalid email").isEmail().trim(),

    check("password", "Invalid password")
    .not().isEmpty()
];

module.exports = {
    validateRegister: validateRegister,
    validateLogin: validateLogin
};
