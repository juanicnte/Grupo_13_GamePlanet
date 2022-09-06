const {resolve} = require('path');
const fs = require('fs');

let model = {
    all: function(){
        let file = resolve(__dirname, '../data', 'users.json');
        let data = fs.readFileSync(file);
        return JSON.parse(data);
    },
    one: function(id){
        let all = model.all();
        return all.find(e => e.id == id);
    },
    generate: function(data){
        let all = model.all();
        let last = all.pop();
        let user = {}
        user.id = !(last == undefined) ? last.id + 1 : 1;
        user.fullName = data.fullName;
        user.user = data.user;
        user.email = data.email;
        user.password = data.password;
        user.perfil = data.perfil;
        user.birthDay = data.birthDay;
        user.image = data.image;
        return user;        
    },
    write: function(data){
        let file = resolve(__dirname, '../data', 'users.json');
        let json = JSON.stringify(data, null, 2);
        return fs.writeFileSync(file, json);
    }
}

module.exports = model 