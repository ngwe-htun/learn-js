//------------------
let userMessage;
let accessLevel;
let userRole = 'admin';
let isLoggedIn = true;

// Roles
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log('Access level - ', accessLevel);

// User Message
if (isLoggedIn) {
    if (userRole === 'admin') {
        userMessage = 'Welcome, Admin!';
    } else {
        userMessage = 'Welcome, User!';
    }
} else {
    userMessage = 'Please log in to access the system';
}
console.log("User Message - ", userMessage);


// SWITCH -----------------------------------
let userType = 'subscriber';
let userCategory;

switch (userType) {
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager':
        userCategory = 'Manager';
        break;
    case 'subscriber':
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = 'Unknown'
        break;
}
console.log("User category - ", userCategory);

// TERNARY--------------------------------------
let isAuthenticated = false;
let authenticationStatus = isAuthenticated ? 'Authenticated' : 'Not authenticated';
console.log('Authenticated status - ', authenticationStatus);