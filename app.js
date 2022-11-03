// Using a prompt allow user to enter numbers separated by commas and print out the sum of the numbers

var numbers = prompt("Enter a numbers separated by comma,"); //1,2,3
var rnumbers = numbers.split(",").map(i=>Number(i));//convert string[] to int[]
var sum=0;
for(let i=0;i<rnumbers.length;i++){
    sum +=rnumbers[i];
}
console.log(sum);


//1.   PALINDROME –A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward
// Write a program that checks whether a word is a palindrome or not.
// Examples of a palindromes
// (race car)
// (Hannah)
// (radar)
// (level)

function checkPalindrome(word){
    let arr= word.split('').reverse().join('')
    if (word==arr){
        console.log("Palindrome")
    }
    else{
        console.log("Not Palindrome")
    }
  }
  checkPalindrome("level")


// 2.   ANAGRAM - An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once
// Write a function that takes two words as an argument and returns true if they are anagrams (contain the exact same letters) and false otherwise.
// Examples of an Anagrams
// (Listen and silent)
// (Elbow and Below)
// (Dusty and Study)
// (Inch and Chin)

function checkIfAnagram(first, second) {
debugger
    let firtWord = first.length;
    let secondWord = second.length;
    if(firtWord !== secondWord){
        console.log('Invalid Input');
        return
    }
    //convert world to sorted lowercase array
    let firtOutPut = first.toLowerCase().split('').sort();
    let secondOutput = second.toLowerCase().split('').sort();

     // Compare sorted strings
     for (let i = 0; i < firtOutPut.length; i++)
     if (firtOutPut[i] != secondOutput[i]){
        return false;
     }else{
        return true;
     }
}
console.log(checkIfAnagram("Elbow","Below"));

// Q2

// const getUser= ()=>{

//     setTimeout(()=>{
//             return { name:'Max'}
//     }, 2000)
//  }

//  const user = getUser()

//  console.log(user.name);




// for(let x= 0; x<=5 ;x++){

//         console.log(x);
// }
// console.log(x);


