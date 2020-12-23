const nodeFetch = require("node-fetch");

const fakeTimer = (time, i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.round(Math.random()) === 1) {
        resolve({ message: "hello world", time, order: i });
      } else {
        reject("Error");
      }
    }, time);
  });
};

const getfromAPI = async (post) => {
  try {
    const data = await nodeFetch(
      `https://jsonplaceholder.typicode.com/posts/${post}`
    );
    return data.json();
  } catch (e) {
    console.log(e);
  }
};

const getDataBlocking = async () => {
  for (let i = -1; i < 3; i++) {
    try {
      const x4 = await getfromAPI(i);
      if (x4.id) {
        console.log(x4);
      } else {
        throw new Error("Post id invalid.");
      }
    } catch (e) {
      if (e.message === "Post id invalid.") {
        console.log(e.name);
      } else {
        console.log(`Server for x${i} did not respond.`);
      }
    }
  }
};
const getDataNonBlocking = async () => {
  const postsRequired = [1, 2, 3, 4];

  postsRequired.forEach(async (postId) => {
    try {
      const x4 = await getfromAPI(postId);
      console.log(x4);
    } catch (e) {
      console.log(e);
    }
  });
};

// getDataBlocking();
getDataNonBlocking();
