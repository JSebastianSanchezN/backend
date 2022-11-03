const {Schema, model} = require('mongoose');

const TaskScheme= Schema({
    title: {
        type: String,
        require: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

TaskScheme.method('toJSON', function(){
    const{_v,_id,...object}=this.toObject();
    object.id=_id;
    return object;
})

module.exports = model('Task', TaskScheme);