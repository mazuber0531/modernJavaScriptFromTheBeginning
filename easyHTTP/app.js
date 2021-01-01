const http = new easyHTTP();

// http.get("http://jsonplaceholder.typicode.com/posts", function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// // Get Single post
// http.get("http://jsonplaceholder.typicode.com/posts/1", function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: "Custom Post",
  body: "This is a custom post, bitch.",
  userID: 2,
};

// http.post("http://jsonplaceholder.typicode.com/posts", data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// // update post
// http.put("http://jsonplaceholder.typicode.com/posts/1", data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Single post
http.delete("http://jsonplaceholder.typicode.com/posts/1", function (
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
