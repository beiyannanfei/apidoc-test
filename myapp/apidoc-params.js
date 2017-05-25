//@api {method} path [title]
/**
 * @api {get} /user/:id  2.1 api(可选)
 * @apiGroup 2.apiDoc-PARAMS
 */

//@apiDefine name [title] [description]
/**
 * @apiDefine MyApiDefine
 * @apiParam {String} firstName Firstname of the User.
 * @apiSuccess {Number} Code Add User result
 * @apiError UserNotFound The id of the User was not found.
 */
/**
 * @api {put} /user/:id 2.2 apiDefine 使用
 * @apiGroup 2.apiDoc-PARAMS
 * @apiVersion 0.0.1
 * @apiUse MyApiDefine
 */

//@apiDescription text
/**
 * @api {post} /user/add  2.3 apiDescription 使用
 * @apiGroup 2.apiDoc-PARAMS
 * @apiDescription This is the Description.
 *
 * It is multiline capable.
 *
 * Last line of Description.
 */

//@apiError [(group)] [{type}] field [description]
/**
 * @api {delete} /user/del  2.4 apiError 使用
 * @apiGroup 2.apiDoc-PARAMS
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 */

//@apiErrorExample [{type}] [title] example
/**
 * @api {option} /user/del  2.5 apiErrorExample 使用
 * @apiGroup 2.apiDoc-PARAMS
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

//@apiExample [{type}] title example
/**
 * @api {put} /user/modify 2.6 apiExample 使用
 * @apiGroup 2.apiDoc-PARAMS
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost/user/4711
 */

// @apiGroup name
/**
 * @api {get} /user/group 2.7 apiGroup 使用
 * @apiGroup 2.apiDoc-PARAMS
 */

// @apiHeader [(group)] [{type}] [field=defaultValue] [description]
/**
 * @api {get} /user/header 2.8 apiHeader 使用
 * @apiGroup 2.apiDoc-PARAMS
 * @apiHeader {String} access-key Users unique access-key.
 */

//@apiHeaderExample [{type}] [title] example
/**
 * @api {get} /user/apiHeaderExample 2.9 apiHeaderExample 使用
 * @apiGroup 2.apiDoc-PARAMS
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Accept-Encoding": "Accept-Encoding: gzip, deflate"
 *     }
 */

//@apiIgnore [hint] 不会被解析。如果您在源代码中留下过期或未完成的方法，并且不想将其发布到文档中，那将是有用的。
/**
 * @apiIgnore Not finished Method
 * @api {get} /user/:id
 */

//@apiName name
/**
 * @api {get} /user/apiName 3.1 apiName 使用
 * @apiGroup 3.apiDoc-PARAMS
 * @apiName name
 */


//@apiParam [(group)] [{type}] [field=defaultValue] [description]
/**
 * @apiDefine myParam
 * @apiParam {String} [firstname]  Optional Firstname of the User.
 * @apiParam {String} lastname     Mandatory Lastname.
 * @apiParam {String} country="DE" Mandatory with default value "DE".
 * @apiParam {Number} [age=18]     Optional Age with default 18.
 * @apiParam {Object} Login 对象
 * @apiParam (Login) {String} pass Only logged in users can post this. In generated documentation a separate "Login" Block will be generated.
 */
/**
 * @api {get} /user/apiParam 3.2 apiParam 使用
 * @apiGroup 3.apiDoc-PARAMS
 * @apiUse myParam
 */

//@apiParamExample [{type}] [title] example
/**
 * @api {get} /user/apiParamExample 3.3 apiParamExample 使用
 * @apiGroup 3.apiDoc-PARAMS
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": 4711
 *     }
 */

//@apiPermission name
/**
 * @apiDefine admin User access only
 * This optional description belong to to the group admin.
 */
/**
 * @api {get} /user/apiPermission 3.4 apiPermission 使用
 * @apiGroup 3.apiDoc-PARAMS
 * @apiPermission admin
 */

//@apiSampleRequest url
/**
 * @api {get} /user/apiSampleRequest 3.5 apiSampleRequest 使用
 * @apiGroup 3.apiDoc-PARAMS
 * @apiSampleRequest http://test.github.com/some_path/
 */

//@apiSuccess [(group)] [{type}] field [description]
/**
 * @api {get} /user/apiSuccess 3.6 apiSuccess 使用
 * @apiGroup 3.apiDoc-PARAMS
 * @apiSuccess (200) {String} firstname Firstname of the User.
 * @apiSuccess (200) {String} lastname  Lastname of the User.
 * @apiSuccess {String} fm Firstname of the User.
 * @apiSuccess {String} lm  Lastname of the User.
 * @apiSuccess {Boolean} active        Specify if the account is active.
 * @apiSuccess {Object}  profile       User profile information.
 * @apiSuccess {Number}  profile.age   Users age.
 * @apiSuccess {String}  profile.image Avatar-Image.
 * @apiSuccess (400){Object[]} profiles       List of user profiles.
 * @apiSuccess (400){Number}   profiles.age   Users age.
 * @apiSuccess (400){String}   profiles.image Avatar-Image.
 */

//@apiSuccessExample [{type}] [title] example
/**
 * @api {get} /user/apiSuccessExample 3.7 apiSuccessExample 使用
 * @apiGroup 3.apiDoc-PARAMS
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 */

//@apiUse name
/**
 * @apiDefine MySuccess
 * @apiSuccess {string} firstname The users firstname.
 * @apiSuccess {number} age The users age.
 */

/**
 * @api {get} /user/apiUse 3.8 apiUse 使用
 * @apiGroup 3.apiDoc-PARAMS
 * @apiUse MySuccess
 */

//@apiVersion version
/**
 * @api {get} /user/apiVersion 3.9 apiVersion 使用
 * @apiGroup 3.apiDoc-PARAMS
 * @apiVersion 1.6.2
 */

