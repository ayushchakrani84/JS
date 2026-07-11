// const freting = "helloword"
// for (const letter of freting) {
//     console.log(letter)
// }
const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}