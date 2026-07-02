

// object shapes -> similar to interfaces 
// union types (A|B)
// intersection types (A&B)


type person1 = {
    id :string;
    address : string;
    salary : number;

}

const person1: person1 = {
    id : "1",
    address : "123 Main St",
    salary : 50000
}

type Status = 'new' | 'paid' | 'pending'

function nextActionCheck(s: Status) : string {
    switch(s) {
        case 'new' :
            
        return 'new'
        case 'paid' :
        return 'pending'
        case 'paid' :

        return 'paid'
        case 'pending':
            return 'pending'

       default:
        return 'default'
    }
}

type ToMerge1 = {price : number};
type ToMerge2 = {stock : number} 

type MergedProductInfo = person1 & ToMerge1 & ToMerge2