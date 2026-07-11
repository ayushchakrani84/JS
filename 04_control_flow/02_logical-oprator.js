const loggedInFromGoogle = true;
const loggedInFromEmail = false;

// AND operator (&&): Both must be true
if (userLoggedIn && hasDebitCard) {
console.log("Allow purchase");
}

// OR operator (||): At least one must be true
if (loggedInFromGoogle || loggedInFromEmail) {
console.log("User logged in");
}