// value must be  everything A and from B

type Inter1 = {id : string};
type Inter2 = {createdAt : Date}

type Entity = Inter1 & Inter2  // must have both id and createdAt

const e: Entity = {id : 'e1', createdAt : new Date()}

// Homework -> create  two types one with email and one with username and see how to merge type 

type NumberHolderUnique = {a: number}
type StringHolderUnique = {a: string}

// type NumberStringMix = NumberHolderUnique & NumberStringMix
// const bad : NumberStringMix = {a: 123}

type Product = {id: string; title : string}
type Priced = {price : number}

type PricedProduct = Product & Priced 