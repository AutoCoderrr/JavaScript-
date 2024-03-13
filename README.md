The checkDataType function in the provided code determines the data type of the input passed to it. Here's how it works:

If the input is undefined or null, it returns the string "Please enter a valid input".
If the input is an array, it returns the string "Array".
Otherwise, it returns the data type of the input using the typeof operator.
The function primarily distinguishes between arrays and non-arrays, and then further categorizes non-array inputs into their respective JavaScript primitive types using typeof.
It's important to note that in JavaScript, arrays are considered objects, so the function specifically checks for arrays using Array.isArray(input).
