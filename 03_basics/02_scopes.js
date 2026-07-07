// let a = 300
// // var c = 300
// if (true){
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
// }

// for (let i = 0; i < 5; i++){
//     console.log("INNER FOR: ", i);
// }

// // console.log(a)
// // console.log(b)
// console.log(a)
function one(){    
    const username = "ayush"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()