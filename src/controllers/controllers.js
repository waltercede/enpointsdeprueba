import { getUsuario, addUsuarios, getProfile, getLogin } from "../data/data.js";
import jwt from 'jsonwebtoken';

export const loginController = async (req = request, res = response) => {
    const { usuario, clave } = req.body;
    const datos = await getLogin(usuario, clave);
    if (datos.length == 0) {
        res.json({ message: 'Ingrese credenciales correctas.!!' })
    }
    const valtoken = jwt.sign(datos[0].email, 'Amoba2022Francesco');
    res.json({ datos: datos[0], token: valtoken });
}
export const addUsuarioController = async (req = request, res = response) => {
    const data = req.body;
    await addUsuarios(data);
    res.json({ hoña: 'mundo' });
}
export const listarUsuariosController = async (req = request, res = response) => {
    const respuesta = await getUsuario();
    res.json(respuesta);

}
export const getUsuarioId = async (req = request, res = response) => {
    const respuesta = await getProfile(req.email);
    res.json(respuesta[0]);

}
export const validateToken = (req, res, next) => {
    try {
        //   console.log(req);
        const accestoken = req.headers['authorization'];
        if (!accestoken) {
            res.send('Acceso Denegado');
        }
        jwt.verify(accestoken, 'Amoba2022Francesco', (err, user) => {
            if (err) {
                res.send('Acceso Denegado');

            } else {
                console.log(user);
                req.email = user;
                next();
            }
        },

        )
    } catch (error) {

    }

}
