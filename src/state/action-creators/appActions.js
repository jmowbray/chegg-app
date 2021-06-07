import { fetchRepos, fetchIssuesForRepo } from '../../util/apiUtil';
import { updateLocalStorageRepoIssues, getDesiredIssueIndicesForRepo } from '../../util/localStorageUtil';
import { issueComparator } from '../../util/comparatorUtil';

// TODO: Break into separate action creators
export const apiTokenInputChanged = (apiToken) => dispatch => {    
    dispatch({
        type: actionTypes.API_KEY_CHANGED,
        payload: { apiToken: apiToken }
    });
}

export const orgInputChanged = org => dispatch => {
    dispatch({
        type: actionTypes.ORG_INPUT_CHANGED,
        payload: { org: org }
    });
}

export const repoLoadRequested = () => {
    return (dispatch, getState) => {
        const { app: { org, apiToken } } = getState();

        dispatch({
            type: actionTypes.REPO_LOAD_REQUESTED,
            payload: {}
        });

        fetchRepos(org, apiToken).then(repos => {
            dispatch({
                type: actionTypes.REPO_LOAD_SUCCEEDED,
                payload: { repos: repos }
            });
        }, error => {
            dispatch({
                type: actionTypes.REPO_LOAD_FAILED,
                payload: { errorMsg: error }
            });
        });
    }
}

export const issuesLoadRequested = repoName => {
    return (dispatch, getState) => {
        const { app: { org, apiToken } } = getState();

        dispatch({
            type: actionTypes.ISSUES_LOAD_REQUESTED,
            payload: { repoName: repoName }
        });

        fetchIssuesForRepo(org, repoName, apiToken).then(issues => {
            const desiredIndicesForRepo = getDesiredIssueIndicesForRepo(repoName);
            issues.sort(issueComparator(desiredIndicesForRepo));

            dispatch({
                type: actionTypes.ISSUES_LOAD_SUCCEEDED,
                payload: { issues: issues }
            }, error => {
                dispatch({
                    type: actionTypes.ISSUES_LOAD_FAILED,
                    payload: { errorMsg: error }
                });
            });
        });
    };
}

export const issuesReordered = (oldIndex, newIndex) => {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.ISSUES_REORDERED,
            payload: { oldIndex, newIndex }
        });
        
        updateLocalStorageRepoIssues(getState().app.issues, getState().app.selectedRepo);
    }
}

export const actionTypes = {
    API_KEY_CHANGED: 'API_KEY_CHANGED',
    ORG_INPUT_CHANGED: 'ORG_INPUT_CHANGED',
    REPO_LOAD_REQUESTED: 'REPO_LOAD_REQUESTED',
    REPO_LOAD_SUCCEEDED: 'REPO_LOAD_SUCCEEDED',
    REPO_LOAD_FAILED: 'REPO_LOAD_FAILED',
    ISSUES_LOAD_REQUESTED: 'ISSUES_LOAD_REQUESTED',
    ISSUES_LOAD_SUCCEEDED: 'ISSUES_LOAD_SUCCEEDED',
    ISSUES_LOAD_FAILED: 'ISSUES_LOAD_FAILED',
    ISSUES_REORDERED: 'ISSUES_REORDERED'
}