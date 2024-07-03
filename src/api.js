// src/api.js
export const registerApi = async (email, password) => {
    // Replace this with your actual API call logic
    console.log(`Registering user with email: ${email} and password: ${password}`);
    // Simulate an API call with a promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve('User registered successfully');
        } else {
          reject('Registration failed');
        }
      }, 1000);
    });
  };
  