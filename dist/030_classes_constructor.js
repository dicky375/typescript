"use strict";
class UserN15 {
    id;
    name;
    email;
    createdAt = new Date(); // init at declaration -> ok
    constructor(id, name, email) {
        //assign all required fields here
        this.id = id;
        this.name = name;
        if (email)
            this.email = email;
    }
}
const result4 = new UserN15("1", 'Dicky');
const result5 = new UserN15('2', 'Johnny', 'test@gmail.com');
