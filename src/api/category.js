export const getCategories = () => {
    return fetch(`${process.env.VUE_APP_ADDRESS}/category`, {
        method: 'GET'
    }).then(data => data.json())
}
