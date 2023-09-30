function getUserData(userID) {
  return fetch(`https://reqres.in/api/users/${userID}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(data => data.data)
    .catch(error => {
      throw new Error(error.message);
    });
}

console.log(getUserData(1)
.then(userData => {
  console.log(userData);
})
.catch(error => {
  console.error(error.message);
}));


function saveUserData(userData) {
  return new Promise((resolve, reject) => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (response.status === 201) {
        resolve();
      } else {
        reject(new Error('Unable to save user data'));
      }
    })
    .catch(error => {
      reject(error);
    });
  });
}


const user = {
  "name": "John Doe",
  "job": "unknown"
};

saveUserData(user)
  .then(() => {
    console.log('User data saved successfully');
  })
  .catch(error => {
    console.log(error.message);
  });

