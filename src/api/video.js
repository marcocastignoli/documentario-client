export const createVideo = ({ token, title, categoryId, description, video }) => {
    let formData = new FormData();
    formData.append('title', title);
    formData.append('categoryId', categoryId);
    formData.append('description', description);
    formData.append('video', video);
    return fetch('http://localhost:8888/video', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    }).then(data => data.json())
}

export const getVideos = ({ token, page, categoryId }) => {
    return fetch(`http://localhost:8888/video/?page=${page}&categoryId=${categoryId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(data => data.json())
}
