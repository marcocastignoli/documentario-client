export const deleteProposal = ({ token, id }) => {
    let formData = new FormData();
    formData.append('id', id);
    return fetch('http://localhost:8888/proposal', {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    }).then(data => data.json())
}

export const createProposal = ({ token, link, categoryId }) => {
    let formData = new FormData();
    formData.append('link', link);
    formData.append('categoryId', categoryId);
    return fetch('http://localhost:8888/proposal', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    }).then(data => data.json())
}

export const getMyProposals = ({ token, page }) => {
    return fetch(`http://localhost:8888/myproposals/?page=${page}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(data => data.json())
}

export const getProposals = ({ token, page }) => {
    return fetch(`http://localhost:8888/proposal/?page=${page}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(data => data.json())
}
