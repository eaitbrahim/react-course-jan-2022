import axios from 'axios';
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function getPosts(){
  // Won't run in node environment, it will run just in the modern browsers or Codepen.io
  // fetch(apiUrl)
  //   .then(response => response.json())
  //   .then(json => console.log('Results as json: ', json));

  // Use axios
  axios.get(apiUrl)
      .then(response => console.log('response using axios: ', response.data))
      .catch( error => console.log('Error: ', error));
}
getPosts();

async function getPostsAsync(){
  try{
    const response = await axios.get(apiUrl);
    console.log('Results using async await:', response.data[0]);
  }catch(error){
    console.log('failed: ', error);
  }
}


getPostsAsync()