
import { Router } from 'express';
import { addUsuarioController, getUsuarioId, listarUsuariosController, loginController, validateToken } from '../controllers/controllers.js';
const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     GeneralError:
 *       type: object
 *       properties:
 *         code:
 *           type: integer
 *           format: int32
 *         message:
 *           type: string
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         name:
 *           type: string
 *     Tag:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         name:
 *           type: string
 *   parameters:
 *     skipParam:
 *       name: skip
 *       in: query
 *       description: number of items to skip
 *       required: true
 *       schema:
 *         type: integer
 *         format: int32
 *     limitParam:
 *       name: limit
 *       in: query
 *       description: max records to return
 *       required: true
 *       schema:
 *         type: integer
 *         format: int32
 *   responses:
 *     NotFound:
 *       description: Entity not found.
 *     IllegalInput:
 *       description: Illegal input for operation.
 *     GeneralError:
 *       description: General Error
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GeneralError'
 *   securitySchemes:
 *     api_key:
 *       type: apiKey
 *       name: api_key
 *       in: header
 *     petstore_auth:
 *       type: oauth2
 *       flows: 
 *         implicit:
 *           authorizationUrl: http://example.org/api/oauth/dialog
 *           scopes:
 *             write:pets: modify pets in your account
 *             read:pets: read your pets
 */



/**
 * @swagger
*  /api/login:
*    post:
*      description: Returns datos de usuario y token.
*      tags:
*      - Login
*      summary: datos de inicio de sesión
*      operationId: updatePetWithForm
*      requestBody:
*        content:
*          'application/json':
*            schema:
*             properties:
*                usuario: 
*                  description: Updated name of the pet
*                  type: string
*                clave:
*                  description: Updated status of the pet
*                  type: string
*             required:
*               - status
*      responses:
*        '200':
*          description: datos de usuario y token.
*          content: 
*            'application/json': {}
*        '405':
*          description: Method Not Allowed
*          content: 
*            'application/json': {}
 */
router.post('/login', loginController);

router.post('/addUsuarios', validateToken, addUsuarioController);

router.get('/getUsuarios', validateToken, listarUsuariosController);

router.get('/profile', validateToken, getUsuarioId);


export default router;