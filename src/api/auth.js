export const login = ({ email, password }) => {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return fetch('http://localhost:8888/signin', {
        method: 'POST',
        body: formData
    }).then(data => data.json())
}