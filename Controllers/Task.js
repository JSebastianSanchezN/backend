const express = require('express');
const Task = require('../models/TaskScheme');

const crearTask = async (req, res = express.request) => {
    const task = new Task(req.body);
    try{
        task.user = req.uid;
        const saved = await task.save();
        res.status(200).json({
            ok:true,
            task:saved
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            task:'Internal Error'
        })
    }
}

const listarTasks = async (req, res = express.request) => {
    const tasks = await Task.find()
                        .populate('user','name');
    try{
        res.status(200).json({
            ok:true,
            tasks,
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Internal Error'
        })
    }
}

const eliminarTask = async (req, res = express.request) => {

}

const actualizarTask = async (req, res = express.request) => {
    
}

module.exports={
    crearTask,
    listarTasks,
    eliminarTask,
    actualizarTask
}