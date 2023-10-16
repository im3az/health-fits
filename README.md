# Health Fits

Health Fits is an online platform offering a range of gym services, equipment for sale, and more. Visit the live site at [health-fits.web.app](https://health-fits.web.app).

## Features and Functionalities:

- **Gym Services**: Explore various gym services designed to help you achieve your fitness goals. We offer detailed descriptions of each service to help you choose the right one.

- **Gym Equipment for Sale**: Browse and purchase high-quality gym equipment directly from our website. We provide a selection of fitness gear for your home or gym needs.

- **React Private Routing**: We prioritize your privacy and security. Some pages on our website use React Private Routing to ensure a secure and personalized user experience.

- **User Registration and Login**: Easily create an account or log in to access exclusive features, make purchases, and track your fitness journey.

- **Customer Reviews**: Hear from our satisfied customers through their reviews and testimonials, providing valuable insights into the quality of our services and products.

Feel free to explore our website and take advantage of our fitness resources to enhance your workout experience.

# MCQ TEST :

## Question 1:

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

## Answer 1:

B: ReferenceError: greetign is not defined.

Explanation: In the code, there is a typographical error in the variable name. It should be greeting, not greetign. As a result, the variable greetign is not defined, leading to a ReferenceError.

## Question 2:

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

## Answer 2:

D: 3

Explanation: In the given code, the sum function takes two parameters, a and b, and adds them together. When sum(1, "2") is called, JavaScript will attempt to convert the string "2" to a number and perform the addition, resulting in 3. JavaScript performs type coercion to convert the string to a number in this context.

## Question 3:

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

## Answer 3:

A: ['🍕', '🍫', '🥑', '🍔']

Explanation: The code initially assigns the first element of the food array, which is "🍕," to the favoriteFood property of the info object. Later, it assigns "🍝" to info.favoriteFood, but this doesn't affect the food array. So, when you log food, it remains unchanged and is still ['🍕', '🍫', '🥑', '🍔'].

## Question 4:

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

## Answer 4:

B: Hi there, undefined

Explanation: In the sayHi function, there's a parameter name, but when you call sayHi() without passing an argument, the name parameter is undefined. The function still executes, and the template literal ${name} results in "Hi there, undefined."

## Question 5:

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

## Answer 5:

B: 2

Explanation: The forEach method iterates over the elements in the nums array, and the callback function increments the count variable by 1 for each element that evaluates to true. In this case, 0 is considered false in JavaScript, so it only increments the count for the elements 1, 2, and 3, resulting in a final count of 2.
