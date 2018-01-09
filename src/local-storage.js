export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};

export const saveCurrentHabit = (currentHabit) => {
	try {
		localStorage.setItem('currentHabit', JSON.stringify(currentHabit));
	} catch (e) {}
};