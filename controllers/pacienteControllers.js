const Paciente = require('../models/Paciente');

// Cuando se crea nuevo Cliente
exports.nuevoCliente = async (req, res, next) => {
    
    // crear objeto de paciente con datos de re.body
    const paciente = new Paciente(req.body);
    
    try {
        await paciente.save();
        res.json({mensaje:'El cliente se agrego correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
    
}

// Obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtiene un paciente en especifico por su ID
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualiza un registro por su ID
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}); // actualiza y te trae el nuevo resultado
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Elimina un paciente por su id
exports.eliminarPaciente = async (req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'el paciente fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}