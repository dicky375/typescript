

type UserN7 = {
    id : string;
    name: string;
    email? : string;
    phone? : number;

}

function getUserPropN7<T, k extends keyof T>(objN7: T, keyN7: k): T[k]{
    return objN7[keyN7]
}

const uN7: UserN7= {
    id : 'u1', //-> u2
    name : 'Dicky', // john

}

const idValN7 = getUserPropN7(uN7, 'id')

function setUserPropN7<T, k extends keyof T>(
    objN7: T, keyN7 : k, newVal: T[k]
): void{
    objN7[keyN7] = newVal
}

setUserPropN7(uN7, 'name','john')
setUserPropN7(uN7, 'phone',123)