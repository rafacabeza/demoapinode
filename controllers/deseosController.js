const deseosModel = require('../models/deseosModel');

const getAllDeseos = async (req, res) => {    
    try {
        const deseos = await deseosModel.getAllDeseos();
        res.json(deseos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los deseos' });
    }
};

const createDeseo = async (req, res) => {
    try {
        const { texto } = req.body;
        const id = await deseosModel.createDeseo(texto);
        res.status(201).json({ id, texto });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el deseo' });
    }
};

const deleteDeseo = async (req, res) => {
    try {
        const { id } = req.params;
        await deseosModel.deleteDeseo(id);
        res.status(200).json({ message: 'Deseo eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el deseo' });
    }
};

const addDeseo = async (req, res) => {
    try {
        await deseosModel.addDeseo();
        res.status(201).json({ message: 'Deseo añadido' });
    } catch (error) {
        res.status(500).json({ error: 'Error al añadir el deseo' });
    }
};

module.exports = { getAllDeseos, createDeseo, deleteDeseo, addDeseo };
