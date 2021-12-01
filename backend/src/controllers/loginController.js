import { compareSync } from "bcryptjs";
import { validationResult } from "express-validator";
import loginService from "../services/loginService";

let getPageLogin = (req, res) => {
    return res.send({"success": false,"errors": req.flash("errors")});
};

let handleLogin = async (req, res) => {
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        //req.flash("errors", errorsArr);
        //return res.redirect("/login");
        return res.send({"success": false,"errors": errorsArr});
    }

    try {
        await loginService.handleLogin(req.body.email, req.body.password);
        //return res.redirect("/");
        return res.send({"success": true});
    } catch (err) {
        //req.flash("errors", err);
        //return res.redirect("/login");
        return res.send({"success": false,"errors": errorsArr});
    }
};

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.send({"success": false});
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        //return res.redirect("/");
        return res.send({"success": true});
    }return res.send({"success": false, "errors": req.flash("errors")});
};

let postLogOut = (req, res) => {
    req.session.destroy(function(err) {
        //return res.redirect("/login");
        return res.send({"gotoLogin": true});
    });
};

module.exports = {
    getPageLogin: getPageLogin,
    handleLogin: handleLogin,
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut,
    postLogOut: postLogOut
};
