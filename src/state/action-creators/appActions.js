import { fetchRepos, fetchIssuesForRepo } from '../../util/apiUtil';

export const apiTokenInputChanged = (apiToken) => dispatch => {    
    dispatch({
        type: 'API_KEY_SUBMITTED',
        payload: { apiToken: apiToken }
    });
}

export const orgInputChanged = org => dispatch => {
    dispatch({
        type: 'ORG_INPUT_CHANGED',
        payload: { org: org }
    })
}

export const repoLoadRequested = () => {
    return (dispatch, getState) => {
        // I know the community may be split on whether accessing state
        // in an action creator is a good idea. It certainly simplified
        // my implementation.
        const { app: { org, apiToken } } = getState();

        dispatch({
            type: 'REPO_LOAD_REQUESTED',
            payload: {}
        });

        fetchRepos(org, apiToken).then(repos => {
            dispatch({
                type: 'REPO_LOAD_SUCCEEDED',
                payload: { repos: repos }
            });
        }, error => {
            dispatch({
                type: 'REPO_LOAD_FAILED',
                payload: { errorMsg: error }
            });
        });
    }
}

export const issuesLoadRequested = repoName => {
    return (dispatch, getState) => {

        const { app: { org, apiToken } } = getState();

        dispatch({
            type: 'ISSUES_LOAD_REQUESTED',
            payload: { repoName: repoName }
        });

        fetchIssuesForRepo(org, repoName, apiToken).then(issues => {
            dispatch({
                type: 'ISSUES_LOAD_SUCCEEDED',
                payload: { issues: issues }
            }, error => {
                dispatch({
                    type: 'ISSUES_LOAD_FAILED',
                    payload: { errorMsg: error }
                });
            });
        });
    };
}
