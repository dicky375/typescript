


//email? : string -> email maybe absent , if its present it will be string 
// it is not same as email : string | undefined 


type User = {
    id : number; // required
    name : string;
    email? : string // optional (could be absent) 
    readonly createdAt : Date // can not be reassigned 
}

const user1 : User = {id : 1, email: 'daniel@gmail.com', name :'Daniel', createdAt : new Date() }
const user2 : User = {id : 2, name : 'john', createdAt: new Date()}

type User2 = {email? : string}
type User3 = {email: string | undefined}

type Count = {[k: string] : number}
type Count1 = Record<"likes" | "views" |"shares" | "random", number>

const c1 : Count = {whatever : 1}
const c2 : Count1 = {likes : 1, views : 2, shares : 3 , random : 5}