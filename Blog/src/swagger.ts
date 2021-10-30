/**
 * @swagger
 * /user/register:
 *  post:
 *    description: Register the user
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: User Details
 *        description: Register the Yourself
 *        schema:
 *          type: object
 *          required:
 *            - firstName
 *            - lastName
 *            - email
 *            - password
 *            - userName
 *          properties:
 *            firstName:
 *              type: string
 *            lastName:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *               type: string
 *            userName:
 *                type: string
 *    responses:
 *      '200':
 *        description: user Succesfully register.
 */
/**
 * @swagger
 * /user/login:
 *  post:
 *    description: login the user
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: User Details
 *        description: Login the Yourself
 *        schema:
 *          type: object
 *          required:
 *            - password
 *            - userName
 *          properties:
 *            password:
 *               type: string
 *            userName:
 *                type: string
 *    responses:
 *      '200':
 *        description: User Succesfully Login.
 */

/**
 * @swagger
 * /blog:
 *  get:
 *    description: Use to read blog
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: This is over blogs.
 */
/**
 * @swagger
 * /blog:
 *  post:
 *    description: Use to add blog
 *    produces:
 *      - application/json
 *    parameters:
 *     - in: header
 *       name: token
 *       schema:
 *         type: string
 *      - in: body
 *        name: Add blog
 *        description: Add blog in DB.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - description
 *          properties:
 *            title:
 *              type: string
 *            description:
 *              type: string
 *    responses:
 *      '200':
 *        description: blog added successfully.
 */
/**
 * @swagger
 * /blog/{blogID}:
 *  put:
 *    description: Use to add blog
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: token
 *        schema:
 *         type: string
 *      - in: path
 *        name: blogID
 *        description: ID of the blog
 *        schema:
 *           type:integer
 *      - in: body
 *        name: Blog details
 *        description: Add blog in DB.
 *        schema:
 *          type: object
 *          properties:
 *            title:
 *              type: string
 *            description:
 *              type: string
 *    responses:
 *      '200':
 *        description: blog updated successfully.
 */
/**
 * @swagger
 * /blog/{blogID}:
 *  delete:
 *    description: Remove the blog
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: blogID
 *        description: ID of the blog
 *        schema:
 *           type:integer
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: blog deleted successfully.
 */
/**
 * @swagger
 * /books:
 *  get:
 *    description: Use to read book details
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Books are sucessfully rendered .
 */
/**
 * @swagger
 * /books:
 *  post:
 *    description: Use to add bkog
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *      - in: body
 *        name: Add book
 *        description: Add book in MongoDB.
 *        schema:
 *          type: object
 *          required:
 *            - bookName
 *            - authorName
 *            - bookSummary
 *          properties:
 *            bookName:
 *              type: string
 *            authorName:
 *              type: string
 *            bookSummary:
 *              type: string
 *    responses:
 *      '200':
 *        description: book added successfully.
 */
/**
 * @swagger
 * /books/{bookID}:
 *  put:
 *    description: Use to update book
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: bookID
 *        description: ID of the blog
 *        schema:
 *          type:string
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *      - in: body
 *        name:  Book Details
 *        description: Book that has to be updated.
 *        schema:
 *          type: object
 *          properties:
 *            bookName:
 *              type: string
 *            authorName:
 *              type: string
 *            bookSummary:
 *              type: string
 *    responses:
 *      '200':
 *        description: book updated successfully.
 */
/**
 * @swagger
 * /books/{bookID}:
 *  delete:
 *    description: Remove the blog
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: bookID
 *        description: ID of the blog
 *        schema:
 *           type:string
 *      - in: header
 *        name: token
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: book deleted successfully.
 */
/**
 * @swagger
 * /upload:
 *     post:
 *         summary: Uploads a file.
 *         consumes:
 *            - multipart/form-data
 *         parameters:
 *           - in: formData
 *             name: avatar
 *             type: file
 *         responses:
 *            '200':
 *              description: The file to upload.
 */
