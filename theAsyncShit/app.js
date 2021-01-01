// async function myFunk() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; //wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// console.log(myFunk());
// myFunk().then((res) => console.log(res));

async function getUsers() {
  //await response of the fetch call
  const response = await fetch("http://jsonplaceholder.typicode.com/users");

  //only proced once its resolved
  const data = await response.json();

  //only proceed once second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
