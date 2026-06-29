

//value -> this OR 

function printId(id: string | number ){
//    if (typeof id ==='string'){
//     id.to
//    }else{
//     id.toFixed(2)
//    }
}

//object  union 
type Admin = {role:  'Admin', permissions: string[] }
type Customer = {role : 'Customer', loyaltyPoints : number}

function describeUser(u : Admin | Customer){
    if(u.role === 'Admin'){
        console.log(u.permissions);
    } else {
        console.log(u.loyaltyPoints);
    }
}

function describeUserWithInOperator(u: Admin | Customer){
    if('permissions' in u){
        console.log(u.role, 'Admin user' );
    } else {
        console.log(u.loyaltyPoints);
    }
}

//array of unions and union of arrays 
const arrofUnion: (string | number)[]=["a",1,"b","2"]

const unionOfArrays: string[] | number[] = Math.random() > 0.1 ? ["x","y"] : [1,2]

