const baseURL = "http://localhost:6543";

function getConfig(URL) {
    var config = {
        method: 'get',
        url: baseURL + URL,
        headers: {
            'x-access-token': localStorage.getItem('accessToken')
        }
    }
    return config;
};

function postConfig(URL, DATA) {
    var config = {
        method: 'post',
        url: baseURL + URL,
        headers: {
            'x-access-token': localStorage.getItem('accessToken')
        },
        data: DATA
    }
    return config;
};

function deleteConfig(URL, PARAMS) {
    var config = {
        method: 'delete',
        url: baseURL + URL,
        params: PARAMS,
        headers: {
            'x-access-token': localStorage.getItem('accessToken')
        }
    }
    console.log(config);
    return config;
};

function deleteURL(URL){
   return baseURL+URL
}

function editConfig(URL, PARAMS, DATA) {
    var config = {
        method: 'put',
        url: baseURL + URL,
        params: PARAMS,
        headers: {
            'x-access-token': localStorage.getItem('accessToken')
        },
        data: DATA
    }
    return config;
};

var apiconfig = {
    getConfig: getConfig,
    postConfig: postConfig,
    deleteConfig: deleteConfig,
    editConfig: editConfig,
    deleteURL:deleteURL
}

export default apiconfig;