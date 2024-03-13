const checkDataType = (input) => {
    if (input === undefined || input === null) {
      return "Please enter a valid input";
    }
  
    if (Array.isArray(input)) {
      return "Array";
    }
  
    return typeof input;
  
  
   
  };
  console.log(checkDataType(10)); // number
  console.log(checkDataType("10")); // string
  console.log(checkDataType(true)); // string
  console.log(checkDataType(true)); // boolean
  console.log(checkDataType(!!!!"anshul")); // boolean
  console.log(checkDataType(!"anshul")); // boolean
  console.log(checkDataType(!"anshul")); // boolean
  console.log(checkDataType([1,3,"anshul"]))//array
  console.log(checkDataType({ name:"anshul", city: "pune "}))//object 
  