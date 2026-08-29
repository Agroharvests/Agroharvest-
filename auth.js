// Central Authentication & Session Engine (AgroHarvest)

// 1. Get current logged-in user
function getSessionUser() {
    const raw = localStorage.getItem('agroharvest_user');
    try {
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

// 2. Save active session
function setSessionUser(userData) {
    localStorage.setItem('agroharvest_user', JSON.stringify(userData));
    localStorage.setItem('user_phone', userData.phone);
}

// 3. Protected Page Guard (Index, Profile, Recharge, etc.)
function requireAuth() {
    const user = getSessionUser();
    if (!user) {
        window.location.replace("login.html");
        return null;
    }
    return user;
}

// 4. Guest Page Guard (Login & Register)
function requireGuest() {
    const user = getSessionUser();
    if (user) {
        window.location.replace("index.html");
    }
}

// 5. Logout Handler
function logoutUser() {
    if (confirm("Kya aap sach me logout karna chahte hain?")) {
        localStorage.clear();
        window.location.replace("login.html");
    }
}
