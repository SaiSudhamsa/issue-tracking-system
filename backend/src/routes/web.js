import express from "express";
import homePageController from "../controllers/homePageController";
import registerController from "../controllers/registerController";
import loginController from "../controllers/loginController";
import projectPageController from "../controllers/projectPageController";
import ticketPageController from "../controllers/ticketPageController";
import userPageController from "./../controllers/userPageController";
import auth from "../validation/authValidation";
import passport from "passport";
import initPassportLocal from "../controllers/passportLocalController";

// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", loginController.checkLoggedIn, homePageController.getOverviewPageData);
    router.get("/login",loginController.checkLoggedOut, loginController.getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/login",
        failureRedirect: "/login",
        //successFlash: true,
        //failureFlash: true
    }));

    router.get("/register", registerController.getPageRegister);
    router.post("/register", auth.validateRegister, registerController.createNewUser);
    router.post("/logout", loginController.postLogOut);

    //projects
    router.get("/projects", loginController.checkLoggedIn, projectPageController.getProjects);
    router.post("/projects",loginController.checkLoggedIn, projectPageController.addProject);
    router.get("/projects/:projectId",loginController.checkLoggedIn, projectPageController.getProjectDetails);

    //tickets
    router.get("/tickets",loginController.checkLoggedIn, ticketPageController.getUserTickets);

    //users
    router.get("/users",loginController.checkLoggedIn,loginController.isAdmin, userPageController.getAllUsers);
    router.get("/users/newusers",loginController.checkLoggedIn,loginController.isAdmin, userPageController.getUsersNotinProjects);
    router.get("/users/:userId",loginController.checkLoggedIn,loginController.isAdmin, userPageController.getProjectsNotAssignedToUser);

    return app.use("/", router);
};
module.exports = initWebRoutes;
