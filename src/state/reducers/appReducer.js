// TODO: Break into multiple reducers
import { arrayMove } from 'react-sortable-hoc';
import { actionTypes } from '../action-creators/appActions';

export const initialState = {
    isLoaded: false,
    isLoading: false,
    apiToken: null,
    org: null,
    repos: [],
    selectedRepo: null,
    issues: [],
    errorMsg: null,
    issuesLoading: false
};

const app = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.API_KEY_CHANGED:
            return {
                ...state,
                apiToken: action.payload.apiToken
            }
        case actionTypes.ORG_INPUT_CHANGED:
            return {
                ...state,
                org: action.payload.org
            }
        case actionTypes.REPO_LOAD_REQUESTED:
            return {
                ...state,
                isLoading: true,
                issues: [],
                selectedRepo: null,
                errorMsg: null
            }
        case actionTypes.REPO_LOAD_SUCCEEDED:
            const { repos } = action.payload;
            const repoNames = repos.map(mapRepo);
            return {
                ...state,
                isLoading: false,
                repos: repoNames,
                errorMsg: null
            }
        case actionTypes.REPO_LOAD_FAILED:
            return {
                ...state,
                isLoading: false,
                repos: [],
                errorMsg: `Failed to load repositories for organization '${state.org}'`
            }
        case actionTypes.ISSUES_LOAD_REQUESTED:
            return {
                ...state,
                selectedRepo: action.payload.repoName,
                issuesLoading: true
            }
        case actionTypes.ISSUES_LOAD_SUCCEEDED:
            const { issues } = action.payload;
            const mappedIssues = issues.map(mapIssue);
            return {
                ...state,
                issues: mappedIssues,
                issuesLoading: false
            }
        case actionTypes.ISSUES_LOAD_FAILED:
            return {
                ...state,
                errorMsg: 'Failed to load issues',
                issuesLoading: false
            }
        case actionTypes.ISSUES_REORDERED:
            const { oldIndex, newIndex } = action.payload;

            return {
                ...state,
                issues: arrayMove(state.issues, oldIndex, newIndex)
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

const mapIssue = issue => {
    return {
        avatar_url: issue.avatar_url || issue.assignee?.['avatar_url'],
        title: issue.title,
        created_at: issue['created_at'],
        updated_at: issue['updated_at'],
        id: issue.id
    };
}

export default app;