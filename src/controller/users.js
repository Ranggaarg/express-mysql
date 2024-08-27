const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {

    try {
        const [data] = await UsersModel.getAllUsers();
        res.json({
            message : 'Get Data User Success',
            data : data,
        });
    } 

    catch (error) {
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error,
        }) 
    }
    
}

const createNewUser = async (req, res) => {
    const {body} = req
    try {
        await UsersModel.createNewUser(body)
        res.json({
            message : 'Create New User Success',
            data : body
        })
    }

    catch (error) {
        console.log(error)
        res.status(500).json({
            message : 'Server Error',
            serverMessage : error,
        }) 
    }
}

const updateUserData = async (req, res) => {
    const {id} = req.params;
    const {body} = req
    try {
        await UsersModel.updateDataUser(id , body)
        res.json({
            message : 'Update Data User Success',
            data : {
                id,
                ...body
            }        
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Connection Error',
            serverMessage : error
        })
        console.log(error)
    } 
    console.log(req.body);
}

const deleteUserData = (req, res) => {
    const {id} = req.params;
    console.log(id);
    res.json({
        message : 'Delete Data Has Successfuly',
        data : {
            nama : 'Rangga Arya',
            email : 'ranggaaryag24@gmail.com',
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUserData,
    deleteUserData,
}