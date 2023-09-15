const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * /api/users/create:
 *   post:
 *     tags:
 *       - Users
 *     description: Crea un nuevo usuario
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: Datos del usuario
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - email
 *             - password
 *             - rol
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             rol:
 *               type: string
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       500:
 *         description: Hubo un error al crear el usuario
 */
router.post('/create', userController.createUser);

/**
 * @swagger
 * /api/users/deactivate/{id}:
 *   put:
 *     tags:
 *       - Users
 *     description: Desactiva un usuario
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: ID del usuario
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Usuario desactivado exitosamente
 *       500:
 *         description: Hubo un error al desactivar el usuario
 */
router.put('/deactivate/:id', userController.deactivateUser);

module.exports = router;
