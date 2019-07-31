export const login = ({ email, password }) => {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return fetch(`${process.env.VUE_APP_ADDRESS}/signin`, {
        method: 'POST',
        body: formData
    }).then(data => data.json())
}

export const signup = ({ email, username, password }) => {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('username', username);
    formData.append('password', password);
    return fetch(`${process.env.VUE_APP_ADDRESS}/signup`, {
        method: 'POST',
        body: formData
    }).then(data => data.json())
}