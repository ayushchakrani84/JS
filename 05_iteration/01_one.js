// //for
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         // console.log("5 is best number");
        
//     }
//     // console.log(element);    
// }
// for (let i = 0; i <= 2; i++) {
//     console.log(`Outer loop: ${i}`);
//     for (let j = 0; j <= 2; j++) {
//         console.log(`Inner loop: ${j}`);

//     }
// }
let myArray = ["flash", "batman", "superman", "wonderwoman"];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}
for (let i = 0; i < 10; i++) {
    if(i == 5){
        continue;
    }
    console.log(i);
    if(i == 8){
        break;
    }
}
