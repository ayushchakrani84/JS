//singlton
//object literal
// const myObj = {
//     name: 'John',
//     age: 30,
//     location: 'New York',
//     email: 'ayush@google.com',
//     isLoggedIn: true,
//     lastLoginDays: ['Monday', 'Friday']
// }

// console.log(myObj.email)
// console.log(myObj.["email"])

// const tinderUser = {}

// tinderUser.id = '123abc'
// tinderUser.name = 'Ayush'
// tinderUser.isLoggedIn = false
// tinderUser.age = 22
// tinderUser.email = 'ayush@google.com'

// // console.log(tinderUser)

// const regularUser = {
//     email: 'regularuser@google.com',
//     fullname: {
//         userFullname: {
//             firstName: 'Ayush',
//             lastName: 'Kumar'
//         }
//     }
// }

// // console.log(regularUser.fullname.userFullname.firstName) 
// const obj1 = {1: 'a', 2: 'b'}
// const obj2 = {3: 'a', 4: 'b'}
// const obj4 = {5: 'a', 6: 'b'}

// const obj3 = Object.assign({}, obj1, obj2, obj4) //copying obj1 and obj2 to obj3

// // console.log(obj1 == obj2) // false
// // console.log(obj1 === obj2) // false
// console.log(obj3);

// const user = {
//     // { '1': 'a', '2': 'b' }

// }

const course = {
    courseName: 'JavaScript',
    price: '99',
    courseInstructor: 'Ayush Kumar'
}
// course.courseInstructor 
const {courseInstructor: abs} = course
console.log(abs)
