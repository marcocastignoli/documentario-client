export const getCategories = () => {
    return fetch(`http://localhost:8888/category`, {
        method: 'GET'
    }).then(data => data.json())
}
