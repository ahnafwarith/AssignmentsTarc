let age = 20
const name = 'Ahnaf'
console.log(`The variable and the const is ${age} & ${name}`)
const lst = [1, 2, 3, 4, 5]
console.log(`The 1st version of the array is (${lst.length()}) ${lst}`)
lst.push(5)
console.log(`The array after pushing a new element (${lst.length}) ${lst}`)
lst.pop()
console.log(`The array after poping the last element is (${lst.length()}) ${lst}`)
console.log('The array after spreading', ...lst)
const [st, se, th] = lst
console.log(`After Array destructuring ${st} ${se} ${th}`)
const obj = {
    type: 'ghost',
    power: 23
}
const { type, power } = obj
console.log(`After destructuring the object ${type, power}`)
console.log(`Hi I am ${obj.type} and I am ${obj.power} years old`)