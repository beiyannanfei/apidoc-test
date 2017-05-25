/** 基本格式
 * @api {get} /user/:id 1.1 获取用户信息
 * @apiName GetUser
 * @apiGroup 1.User
 *
 * @apiParam {Number} id 用户唯一ID
 *
 * @apiSuccess {String} firstName 用户姓氏
 * @apiSuccess {String} lastName  用户名称
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "firstName": "John",
 *        "latName": "Doe"
 *     }
 *
 * @apiError UserNotFound 用户不存在
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */




/**
 * @apiDefine UserNotFoundError
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "error": "UserNotFound"
 *     }
 */

/** 继承
 * @api {post} /user/add 1.2 Add User information
 * @apiGroup 1.User
 * @apiName addUser
 *
 * @apiParam {String} firstName Firstname of the User.
 * @apiParam {String} lastname  Lastname of the User.
 *
 * @apiSuccess {Number} Code Add User result
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "Code": 0
 *     }
 *
 * @apiUse UserNotFoundError
 */
