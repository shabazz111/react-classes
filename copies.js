// const a  = 100
// number string boolean   -- primivite
// Object and Arrays   -- non- primivite / refrence

// const a = "hgftgt";
// let b = a;
// b = 80;

// console.log(a, b);

// const userData = {
//   name: "harry",
//   age: 20,
// };

// const anoTherUserData = userData
// anoTherUserData.age = 30;

// console.log(userData, anoTherUserData);

// const arr  =  [{name:}];
// const newarr  =  [1,2,3,4,5,5,6,7];

// newarr[0] = 6

// const arr  =  [1,2,3]

// const newArr  = [...arr,5,6]

// console.log(newArr,arr)

const userData = {
  name: "harry",
  age: "40",
  marks: {
    english: 20,
    maths: 30,
  },
};



const anotherUserData  = JSON.parse(JSON.stringify(userData))

anotherUserData.mk = anotherUserData.marks


console.log(anotherUserData,userData)


// user data  . age  anotherUserData?.age
