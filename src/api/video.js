export const createVideo = ({ token, title, categoryId, description, video }) => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('categoryId', categoryId);
    formData.append('description', description);
    formData.append('video', video);
    return fetch(`${process.env.VUE_APP_ADDRESS}/video`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    }).then(data => data.json())
}

export const getVideos = ({ token, page, categoryId }) => {
    return fetch(`${process.env.VUE_APP_ADDRESS}/video/?page=${page}&categoryId=${categoryId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(data => data.json())
}

export const like = ({ token, id }) => {
    let formData = new FormData();
    formData.append('id', id);
    return fetch(`${process.env.VUE_APP_ADDRESS}/like`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    }).then(data => data.json())
}

export const unlike = ({ token, id }) => {
    let formData = new FormData();
    formData.append('id', id);
    return fetch(`${process.env.VUE_APP_ADDRESS}/like`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    }).then(data => data.json())
}