export const fetchRepos = (org, apiToken) => {
    return createFetchPromise(`https://api.github.com/orgs/${org}/repos`, apiToken);
}

export const fetchIssuesForRepo = (org, repoName, apiToken) => {
    return createFetchPromise(`https://api.github.com/repos/${org}/${repoName}/issues`, apiToken);
}

const createFetchPromise = (url, apiToken) => {
    const headers = {};
    if (apiToken) {
        headers.Authorization = `token ${apiToken}`
    }

    return new Promise((resolve, reject) => {
        fetch(url, { headers })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(responseJson => resolve(responseJson))
            .catch(error => reject(error));
    });
}