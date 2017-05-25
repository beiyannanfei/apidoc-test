//@api {method} path [title]
/**
 * @api {get} /user/:id  2.1 标题(可选)
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
 * @api {put} /user/:id 2.2 apiDefine使用
 * @apiGroup 2.apiDoc-PARAMS
 * @apiVersion 0.0.1
 * @apiUse MyApiDefine
 */
