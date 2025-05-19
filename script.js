// ✅ 1. Validate an email address
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

// ✅ 2. Random product feature
const products = ["iPhone 15 Pro", "MacBook Air", "iPad Pro", "Watch Ultra"];
function getRandomFeaturedProduct() {
  return products[Math.floor(Math.random() * products.length)];
}

// ✅ 3. Calculate total price
const prices = [999, 1099, 799];
function getTotalPrice() {
  return prices.reduce((total, price) => total + price, 0);
}

// ✅ 4. Store feedback
let feedback = [];
function addFeedback(message) {
  feedback.push(message);
  return feedback;
}

// ✅ 5. Greet user based on time
function greetUser(name) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  return `${greeting}, ${name}!`;
}
