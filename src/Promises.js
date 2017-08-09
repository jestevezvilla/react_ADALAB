//CALLBACKS

const addToArray = (data, arr, callback) => {
  if(!arr){
    return callback(new Error('No existe el array'), null);
  }
  setTimeout(() => {
    arr.push(data);
    return callback(null, arr);
  }, 1000)
}

let myArray = [1,2,3];
addToArray(4, myArray, (error, result) => {
    if(error) return console.log(error.message);
    console.log(result);
    addToArray(7, myArray, (error, result) => {
      if(error) return console.log(error.message);
        console.log(result);
    });
});


//PROMESAS

const addToArrayPromise = (data, arr) => {
  
  const promise = new Promise((resolve, reject) => {
    
    if(!arr){
      reject(new Error('No existe el array'));
    }
    
   setTimeout(() => {
    arr.push(data);
    resolve(arr);
  }, 1000);
    
  });
  
  return promise;
  

}

let myArray = [1,2,3];
addToArrayPromise(4, myArray)
  .then((result) => addToArrayPromise(5, result))
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
    


//ASYNC/AWAIT
const array = [1, 2, 3];

async function addToArrayAwait(data, array){  
  try {
    const result = await addToArray(data, array);
    console.log(result);
  } catch (err) {
    return console.log(err.message);
  }
}

addToArrayAwait(4, array);
addToArrayAwait(5, array);

