const Usuario = require('../models/usuario.model');

exports.crearUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.crearUsuario(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear usuario' });
    }
};

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.obtenerTodosLosUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener usuarios' });
    }
};

exports.actualizarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.obtenerUsuario(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        const usuarioActualizado = await Usuario.actualizarUsuario(req.params.id, req.body);
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar usuario' });
    }
};

exports.eliminarUsuario = async (req, res) => {
    try {
        await Usuario.eliminarUsuario(req.params.id);
        res.json({ mensaje: 'Usuario eliminado con �xito' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar usuario' });
    }
};