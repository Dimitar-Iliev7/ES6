// Modify the function sum using the rest parameter in such a way that the function sum is able to
//  take any number of arguments and return their sum.
// const sum = (x, y, z) => {
//     const args = [x, y, z];
//     return args.reduce((a, b) => a + b, 0);
//   }
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3)); // 6


  // Copy all contents of arr1 into another array arr2 using the spread operator.
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;
  arr2 = [...arr1];  
  console.log(arr2);


  // Replace the two assignments with an equivalent destructuring assignment. 
  // It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today} = HIGH_TEMPERATURES;
  const {tomorrow} = HIGH_TEMPERATURES;


  // Replace the two assignments with an equivalent destructuring assignment. 
  // It should still assign the variables highToday and highTomorrow the values of today and tomorrow
  //  from the HIGH_TEMPERATURES object.
  const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
    const {today: highToday} = HIGH_TEMPERATURES;
    const {tomorrow: highTomorrow} = HIGH_TEMPERATURES; 


    // Replace the two assignments with an equivalent destructuring assignment. 
    // It should still assign the variables lowToday and highToday the values of today.
    // low and today.high from the LOCAL_FORECAST object.
    const LOCAL_FORECAST = {
      yesterday: { low: 61, high: 75 },
      today: { low: 64, high: 77 },
      tomorrow: { low: 68, high: 80 }
    };
    
    const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;


    
    // Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, 
    // and b receives the value stored in a.
    let a = 8, b = 6;

    [a, b] = [b, a];


    // Use a destructuring assignment with the rest parameter to emulate the behavior of Array.prototype.slice(). removeFirstTwo()
    //  should return a sub-array of the original array list with the first two elements omitted.
    function removeFirstTwo(list) {
 
      const [a, b, ...shorterList] = list; 
       
       return shorterList;
     }
     
     const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
     const sourceWithoutFirstTwo = removeFirstTwo(source);


    //  Use destructuring assignment within the argument to the function half to send only max and min inside the function.
    const stats = {
      max: 56.78,
      standard_deviation: 4.34,
      median: 34.54,
      mode: 23.87,
      min: -0.75,
      average: 35.85
    };
    
    const half = ({ max, min }) => (max + min) / 2.0; 


    
    








  
  
  
  