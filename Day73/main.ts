// Type Assertions:
let data: any = 1000;

console.log((data as string).repeat(3));
// Explanation:

// We then have a variable data of type any, which allows it to hold values of any type. We attempt to perform a type assertion (data as string) to treat data as a string. In this case, we're telling TypeScript to trust that data is a string, even though it's initially assigned a numeric value.
// Finally, we use the repeat method on (data as string) to repeat the string three times and log the result. Note that this is an example of using type assertion to handle dynamic data when the type is uncertain, but it should be used with caution to ensure that the data matches the asserted type at runtime.
