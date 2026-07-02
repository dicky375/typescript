


// partial <T> -> make all the top level fields optional

type AddressN8 = {
    line1 : string;
    city : string;

}

type User10 = {
    id: string;
    name: string;
    email? : string;
    address : AddressN8
}

type UserPatch10 = Partial<User10>

const patch10:UserPatch10 = {name: 'Dicky'}
const patch11:UserPatch10 = {address : {line1 : 'line1',city: 'ci',}}

// Required<T> when using required all the field becomes mandatory

type UserAllRequiredN10 = Required<User10>
const userAllPatch11 : UserAllRequiredN10 = {
    id : 'u2',
    name : 'name2' ,
    address : {line1 : 'line2', city : 'Dicky'},
    email: 'test',
}

//Readonly<T>

type ReadonlyUserN10 = Readonly<User10>
const readonlyUser: ReadonlyUserN10 = {
    id : 'u3',
    name: 'name',
    address: { line1 : 'line3',
         city : 'city123' 
        }

}

// readonlyUser.name = 'this'

//Pick<T, k> -> keep only some keys

type PublicUserN10 = Pick<User10, "id" | "name">
const publicUser : PublicUserN10 = {id:'u5', name : 'sangan34', }

// Omit<T, K > - remove some keys 

type UserWithoutEmailN10 = Omit<User10, "email">
const omitUserN10 : UserWithoutEmailN10 = {
    id: 'u4',
    name : 'name5',
    address : {
        line1 : 'd',
        city: 'f'
    }
}

// omitUserN10.email = "that"

//Record<k, V>
type Rolek = 'admin' | 'user' |  'editor'
type RoleCheck = Record<Rolek, User10>

const dirN10 : RoleCheck = {
    admin : {id : 'u10', name: 'admin', address : {line1: 'line1', city : 'city'}},
    user : {id : 'u11', name: 'user', address : {line1: 'line1', city : 'city'}},
    editor : {id : 'u12', name: 'editor', address : {line1: 'line1', city : 'city'}}

}


