// interface -> name shape for objects

interface User333 {
    id : number;
    name: string;
    email? : string;
    readonly createdAt : Date;

}

const user333 : User333 = {id : 1,
     name : 'John', 
     createdAt : new Date(), 
     email : 'john@example.com'
    };

    interface Admin333 extends User333 {
        permissions : string[];

    }

    const admin333 : Admin333 = {
        id : 2,
        name : 'Admin',
        createdAt : new Date(),
        email : 'admin@example.com',
        permissions : ['admin'],

    }

    interface withMeta1{
        meta: {
            active : boolean
        }
    }
    interface AdminwithMeta extends Admin333, withMeta1 {}


    const adminWitMeta333: AdminwithMeta = {

        id : 2,
        name : "Admin",

        createdAt : new Date(),
        email : "admin@example.com",
        permissions: ["admin"],
        meta : {
            active : true,
        }
    }