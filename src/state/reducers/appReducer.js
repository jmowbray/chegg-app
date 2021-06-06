// TODO: Break into multiple reducers

const initialState = {
    isLoaded: false,
    isLoading: false,
    apiToken: null,
    org: null,
    repos: [],
    selectedRepo: null,
    issues: [],
    errorMsg: null
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case 'APP_LOADED':
            return {
                result: action.payload
            }
        case 'API_KEY_SUBMITTED':
            return {
                ...state,
                apiToken: action.payload.apiToken
            }
        case 'API_KEY_CLEARED':
            return {
                result: action.payload
            }
        case 'ORG_INPUT_CHANGED':
            return {
                ...state,
                org: action.payload.org
            }
        case 'REPO_LOAD_REQUESTED':
            return {
                ...state,
                isLoading: true
            }
        case 'REPO_LOAD_SUCCEEDED':
            const { repos } = action.payload;
            const repoNames = repos.map(mapRepo);
            return {
                ...state,
                isLoading: false,
                repos: repoNames
            }
        case 'REPO_LOAD_FAILED':
            return {
                ...state,
                isLoading: false,
                repos: [],
                errorMsg: "Failed to load repo"
            }
        case 'ISSUES_LOAD_REQUESTED':
            return {
                ...state,
                selectedRepo: action.payload.repoName
            }
        case 'ISSUES_LOAD_SUCCEEDED':
            const { issues } = action.payload;
            const mappedIssues = issues.map(mapIssue);
            return {
                ...state,
                issues: mappedIssues
            }
        case 'ISSUES_LOAD_FAILED':
            return {
                ...state,
                errorMsg: "Failed to load issues"
            }
        case 'ISSUE_REORDERED':
            return {
                result: action.payload
            }
        default:
            return state
    }
}

const mapRepo = repo => {
    return {
        name: repo.name,
        issues: repo['open_issues_count'],
        owner: repo.owner.login,
        ownerAvatarUrl: repo.owner['avatar_url'],
        id: repo.id
    };
}

// assignee avatar
// title
// created time (dd/mm/yyyy)
// last updated (2 hours ago)
const mapIssue = issue => {
    if (issue.assignee) {
        console.log('assignee', issue.assignee);
    }
    return {
        assigneeAvatarUrl: issue.assignee?.['avatar_url'],
        title: issue.title,
        createdAt: issue['created_at'],
        updatedAt: issue['updated_at']
    };
}

export default app;