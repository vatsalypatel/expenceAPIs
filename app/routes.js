/**================================================================ 
            History Of The File 
    Author          - Gunjan Patel 
    purpose         - Writing - API all Routes are handled, with passport auth.
==================================================================== **/
var fs = require("fs");
// var loginController = require("../controllers/loginController"),
//     divisionController = require("../controllers/divisionController"),
//     departmentController = require("../controllers/departmentController"),
//     companyController = require("../controllers/companyController"),
//     projectTypeController = require("../controllers/projectTypeController"),
//     projectController = require("../controllers/projectController"),
//     riskCategoryController = require("../controllers/riskCategoryController"),
//     riskTemplateController = require("../controllers/riskTemplateController"),
//     riskTemplateStepsController = require("../controllers/riskTemplateStepsController"),
//     projectPhaseController = require("../controllers/projectPhaseController"),
//     mitigationController = require("../controllers/mitigationController"),
//     riskEleOptionController = require("../controllers/riskEleOptionController"),
//     riskElementController = require("../controllers/riskElementController"),
//     liklihoodController = require("../controllers/liklihoodController"),
//     riskAssessmentController = require("../controllers/riskAssessmentController");

module.exports = function(app, passport) {


    app.all('/*', function(req, res, next){
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'my-header,X-Requested-With,content-type,Authorization,cache-control');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    })

    // HOME PAGE (with login links)
    app.get('/', function(req, res) {
        res.send('OK');
    });

    // /**User Login Related APIs **/
    // // LOGIN
    // app.post('/login', passport.authenticate('local-login', {session : true}), loginController.getUser);
    // // SIGNUP
    // app.post('/signup', passport.authenticate('local-signup', {session : true}));
    // // Access authantication
    // app.get('/access', isLoggedIn, loginController.accessControl);
    // // LOGOUT
    // app.get('/logout', loginController.logoutUser);
    // // forget Password
    // app.post('/forget', loginController.forgetPass);
    // // reset password url
    // app.get('/reset/:token', loginController.tokenValidate);
    // // reset Password set
    // app.post('/reset/:token', loginController.resetPass);

    // /** User List **/
    // // USERs
    // app.post('/getUsers', isLoggedIn, loginController.getUsers);
    // app.post('/updateUsers', isLoggedIn, loginController.updateUsers);
    // app.post('/deleteUser', isLoggedIn, loginController.deleteUser);

    // /**  Department APIs **/
    // // Departments List
    // app.get('/getDepartments', isLoggedIn, departmentController.getDepartments);
    // // get Particular Department
    // app.post('/getDepartment', isLoggedIn, departmentController.getDepartment);
    // // Department Add
    // app.post('/saveDepartment', isLoggedIn, departmentController.saveDepartment);
    // // Department Update
    // app.post('/updateDepartment', isLoggedIn, departmentController.updateDepartment);
    // // Department delete
    // app.post('/deleteDepartment', isLoggedIn, departmentController.deleteDepartment);

    // /**  Division APIs **/
    // // Divisions List
    // app.get('/getDivisions', isLoggedIn, divisionController.getDivisions);
    // // Get Particular Division
    // app.post('/getDivision', isLoggedIn, divisionController.getDivision);
    // // Division Add
    // app.post('/saveDivision', isLoggedIn, divisionController.saveDivision);
    // // Division Update
    // app.post('/updateDivision', isLoggedIn, divisionController.updateDivision);
    // // Division delete
    // app.post('/deleteDivision', isLoggedIn, divisionController.deleteDivision);

    // /**  Company APIs **/
    // // Companies List
    // app.get('/getCompanies', isLoggedIn, companyController.getCompanies);
    // // Get Company 
    // app.post('/getCompany', isLoggedIn, companyController.getCompany);
    // // Company Add
    // app.post('/saveCompany', isLoggedIn, companyController.saveCompany);
    // // Company Update
    // app.post('/updateCompany', isLoggedIn, companyController.updateCompany);
    // // Company delete
    // app.post('/deleteCompany', isLoggedIn, companyController.deleteCompany);

    // /**  ProjectType APIs **/
    // // ProjectType List
    // app.get('/getProjectTypes', isLoggedIn, projectTypeController.getProjectTypes);
    // // ProjectType List
    // app.post('/getProjectType', isLoggedIn, projectTypeController.getProjectType);
    // // ProjectType Add
    // app.post('/saveProjectType', isLoggedIn, projectTypeController.saveProjectType);
    // // ProjectType Update
    // app.post('/updateProjectType', isLoggedIn, projectTypeController.updateProjectType);
    // // ProjectType delete
    // app.post('/deleteProjectType', isLoggedIn, projectTypeController.deleteProjectType);

    // /**  Project APIs **/
    // // Project List
    // app.get('/getProjects', isLoggedIn, projectController.getProjects);
    // // Project
    // app.post('/getProject', isLoggedIn, projectController.getProject);
    // // Project Add
    // app.post('/saveProject', isLoggedIn, projectController.saveProject);
    // // Project Update
    // app.post('/updateProject', isLoggedIn, projectController.updateProject);
    // // Project delete
    // app.post('/deleteProject', isLoggedIn, projectController.deleteProject);

    // /**  Risk Category APIs **/
    // // Risk Category List
    // app.get('/getRiskCategories', isLoggedIn, riskCategoryController.getRiskCategories);
    // // Risk Category data
    // app.post('/getRiskCategory', isLoggedIn, riskCategoryController.getRiskCategory);
    // // Project Add
    // app.post('/saveRiskCategory', isLoggedIn, riskCategoryController.saveRiskCategory);
    // // Project Update
    // app.post('/updateRiskCategory', isLoggedIn, riskCategoryController.updateRiskCategory);
    // // Project delete
    // app.post('/deleteRiskCategory', isLoggedIn, riskCategoryController.deleteRiskCategory);
    // app.post('/changeStatusCategory', isLoggedIn, riskCategoryController.changeStatusCategory);

    // /**  Risk Template APIs **/
    // // Risk Template List
    // app.get('/getRiskTemplates', isLoggedIn, riskTemplateController.getRiskTemplates);
    // // Risk Template data
    // app.post('/getRiskTemplate', isLoggedIn, riskTemplateController.getRiskTemplate);
    // // Risk Template Add
    // app.post('/saveRiskTemplate', isLoggedIn, riskTemplateController.saveRiskTemplate);
    // // Risk Template Update
    // app.post('/updateRiskTemplate', isLoggedIn, riskTemplateController.updateRiskTemplate);
    // // Risk Template delete
    // app.post('/deleteRiskTemplate', isLoggedIn, riskTemplateController.deleteRiskTemplate);

    // /**  ProjectPhase APIs **/
    // // ProjectPhase List
    // app.get('/getProjectPhases', isLoggedIn, projectPhaseController.getProjectPhases);
    // // ProjectPhase List
    // app.post('/getProjectPhase', isLoggedIn, projectPhaseController.getProjectPhase);
    // // ProjectPhase Add
    // app.post('/saveProjectPhase', isLoggedIn, projectPhaseController.saveProjectPhase);
    // // ProjectPhase Update
    // app.post('/updateProjectPhase', isLoggedIn, projectPhaseController.updateProjectPhase);
    // // ProjectPhase delete
    // app.post('/deleteProjectPhase', isLoggedIn, projectPhaseController.deleteProjectPhase);

    // /**  Mitigation APIs **/
    // // Mitigation List
    // app.get('/getMitigations', isLoggedIn, mitigationController.getMitigations);
    // // Mitigation List
    // app.post('/getMitigation', isLoggedIn, mitigationController.getMitigation);
    // // Mitigation Add
    // app.post('/saveMitigation', isLoggedIn, mitigationController.saveMitigation);
    // // Mitigation Update
    // app.post('/updateMitigation', isLoggedIn, mitigationController.updateMitigation);
    // // Mitigation delete
    // app.post('/deleteMitigation', isLoggedIn, mitigationController.deleteMitigation);

    // /**  Risk Element Option APIs **/
    // // Risk Element Option List
    // app.get('/getREOptions', isLoggedIn, riskEleOptionController.getREOptions);
    // // Risk Element Option List
    // app.post('/getREOption', isLoggedIn, riskEleOptionController.getREOption);
    // // Risk Element Option Add
    // app.post('/saveREOption', isLoggedIn, riskEleOptionController.saveREOption);
    // // Risk Element Option Update
    // app.post('/updateREOption', isLoggedIn, riskEleOptionController.updateREOption);
    // // Risk Element Option delete
    // app.post('/deleteREOption', isLoggedIn, riskEleOptionController.deleteREOption);


    // /**  Risk Element APIs **/
    // // Risk Element List
    // app.get('/getRiskElements', isLoggedIn, riskElementController.getRiskElements);
    // // Risk Element List
    // app.post('/getRiskElement', isLoggedIn, riskElementController.getRiskElement);
    // // Risk Element Add
    // app.post('/saveRiskElement', isLoggedIn, riskElementController.saveRiskElement);
    // // Risk Element Update
    // app.post('/updateRiskElement', isLoggedIn, riskElementController.updateRiskElement);
    // // Risk Element delete
    // app.post('/deleteRiskElement', isLoggedIn, riskElementController.deleteRiskElement);

    // /**  Risk Element APIs **/
    // // Risk Element List
    // app.get('/getRTSteps', isLoggedIn, riskTemplateStepsController.getRTSteps);
    
    // // Risk Element List
    // app.post('/getRTStep', isLoggedIn, riskTemplateStepsController.getRTStep);
    // //If steps are remaining than get value
    // app.post('/getRemainingRTStep', isLoggedIn, riskTemplateStepsController.getRemainingRTStep);
    // // Risk Assessment details
    // app.post('/getAssessmentDetails', isLoggedIn, riskTemplateStepsController.getAssessmentDetails);

    // // Risk Element Add
    // app.post('/saveRTSteps', isLoggedIn, riskTemplateStepsController.saveRTSteps);
    // // Risk Element Update
    // app.post('/updateRTSteps', isLoggedIn, riskTemplateStepsController.updateRTSteps);
    // // Risk Element delete
    // app.post('/deleteRTSteps', isLoggedIn, riskTemplateStepsController.deleteRTSteps);
    // // Risk Templates filter data
    // app.post('/filterData', isLoggedIn, riskTemplateStepsController.filterData);
    

    // app.post('/getLiklihood', isLoggedIn, liklihoodController.getLiklihood);
    // app.post('/saveLiklihood', isLoggedIn, liklihoodController.saveLiklihood);
    
    
    // /**  Risk Assessment APIs **/
    // // Risk Element List
    // app.post('/getAssessment', isLoggedIn, riskAssessmentController.getAssessment);
    // // Risk Assessment Add
    // app.post('/saveAssessment', isLoggedIn, riskAssessmentController.saveAssessment);
    // // Risk Assessment delete
    // app.post('/deleteAssessment', isLoggedIn, riskAssessmentController.deleteAssessment);
    
};

// route middleware to make sure a user is logged in
// function isLoggedIn(req, res, next) {
//     // if user is authenticated in the session, carry on 
//     if (req.isAuthenticated()){
//         next();
//     }else{
//         next();
//         //return res.status(500).send({status:false, message: globalError.SESSION_EXPIRED});
//     }
// }