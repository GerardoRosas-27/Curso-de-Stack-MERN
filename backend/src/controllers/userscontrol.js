const usersControl = {};
const User = require('../dao/User.dao');

usersControl.getUsers = (req, res) => {
    User.bdFind((err, user) => {
        console.log('result bd: ', user);
        if (err) {
            console.log('error:', err);
            res.status(500).json({ 'mensaje': 'Erro al consultar los usuarios' });
        } else {
            res.status(200).json({ 'mensaje': 'Lista de usuarios', "data": user });
        }
    });
}

usersControl.getUser = (req, res) => {
    console.log("id usuario a buscar:", req.params.id);
    User.bdFindId(req.params.id, (err, user) => {
        console.log('result bd: ', user);
        if (err) {
            console.log('error:', err);
            res.status(500).json({ 'mensaje': 'Erro al consultar el usuario' });
        } else {
            res.status(200).json({ 'mensaje': 'Lista de usuarios', "data": user });
        }
    });
}

usersControl.postUsers = (req, res) => {
    console.log('usuario: ', req.body);
    User.bdSave(req.body, (err, user) => {
        console.log('result bd: ', user);
        if (err) {
            console.log('error:', err);
            res.status(500).json({ 'mensaje': 'Erro al guardar el usuario' });
        } else {
            res.status(200).json({ 'mensaje': 'Usuario creado', "data": user });
        }
    });
}

usersControl.deleteUser = (req, res) =>{
    console.log("id usuario a eliminar:", req.params.id);
    User.bdRemove(req.params.id, (err, user) => {
        console.log('result bd: ', user);
        if (err) {
            console.log('error:', err);
            res.status(500).json({ 'mensaje': 'Erro al eliminar el usuario' });
        } else {
            if(user.deletedCount === 1){
                res.status(200).json({ 'mensaje': 'Usuario eliminado'});
            }else{
                res.status(200).json({ 'mensaje': 'Error al eliminar el usuario'});
            }
        }
    });
}

usersControl.putUser = (req, res) =>{
    console.log("id usuario a actualizar:", req.params.id);
    console.log("data a actualizar:", req.body);
    User.bdUpdate(req.params.id, req.body , (err, user) => {
        console.log('result bd: ', user);
        if (err) {
            console.log('error:', err);
            res.status(500).json({ 'mensaje': 'Erro al actualizar el usuario' });
        } else {
            res.status(200).json({ 'mensaje': 'Usuario actualizado', "data": user });
        }
    });
}


module.exports = usersControl;