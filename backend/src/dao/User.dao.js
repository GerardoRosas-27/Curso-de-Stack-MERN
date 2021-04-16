const mongoose = require('mongoose');
const authSchema = require('../models/User');

authSchema.statics = {
    bdSave: function (data, res) {
        const user = new this(data);
        user.save(res);
    },
    bdFind: function (res) {
        this.find({}, res);
    },
    bdFindId: function (id, res) {
        this.findById( id , res);
    },
    bdRemove: function (id, res) {
        this.remove({ _id: id }, res);
    },
    bdUpdate: function (id, data, res) {
        this.findOneAndUpdate(
            { _id: id },
            { $set: data },{}, res);
    }
}

const authModel = mongoose.model('Users', authSchema);
module.exports = authModel;