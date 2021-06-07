const REPO_ISSUE_ORDER_STORAGE_KEY = 'jim-chegg-app-repoAndIssueOrder';

/**
 * Converts the reordered issues array to a map (for fast lookup)
 * in which the key is the issue ID and the value is the desired
 * index of that issue.
 * 
 * The map is stored in localStorage
 * 
 * @param {*} reorderedIssues 
 * @param {*} repoName 
 */
export const updateLocalStorageRepoIssues = (reorderedIssues, repoName) => {
    const mapOfDesiredIssueIndicesById = reorderedIssues
        .map(issue => issue.id)
        .reduce((acc, curr, idx) => {
            acc[curr] = idx;
            return acc;
        }, {});

    const existingDesired = getAllDesiredIndices() || {};
    existingDesired[repoName] = mapOfDesiredIssueIndicesById;

    localStorage.setItem(REPO_ISSUE_ORDER_STORAGE_KEY, JSON.stringify(existingDesired));
}

/**
 * Returns, from localStorage, the map-of-maps in which the key is the repo and the value is the map
 * of issueIds to desired indices.
 */
export const getAllDesiredIndices = () => {
    if (!localStorage.getItem(REPO_ISSUE_ORDER_STORAGE_KEY)) {
        localStorage.setItem(REPO_ISSUE_ORDER_STORAGE_KEY, '{}');
    }
    return JSON.parse(localStorage.getItem(REPO_ISSUE_ORDER_STORAGE_KEY));
}

/**
 * Returns, from localStorage, the map issue id's to indices for a specific repo.
 * 
 * @param {*} repoName 
 */
export const getDesiredIssueIndicesForRepo = repoName => {
    return getAllDesiredIndices()[repoName] || {};
}