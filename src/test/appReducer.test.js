import reducer, { initialState } from '../state/reducers/appReducer';
import { actionTypes } from '../state/action-creators/appActions';
import expect from 'expect';

describe('app reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should return the updated API token, when changed', () => {
        const apiToken = 'mytoken';
        const apiKeyChangedAction = {
            type: actionTypes.API_KEY_CHANGED,
            payload: { apiToken }
        };

        const returnedApiToken = reducer({}, apiKeyChangedAction).apiToken;
        expect(returnedApiToken).toEqual(apiToken);
    });

    it('should return the updated org, when changed', () => {
        const org = 'myorg';
        const orgInputChangedAction = {
            type: actionTypes.ORG_INPUT_CHANGED,
            payload: { org }
        };

        const returnedOrg = reducer({}, orgInputChangedAction).org;
        expect(returnedOrg).toEqual(org);
    });

    it('should return isLoading === true when repo load is requested', () => {
        const repoLoadRequesteAction = {
            type: actionTypes.REPO_LOAD_REQUESTED,
            payload: {}
        };

        const returnedIsLoading = reducer({}, repoLoadRequesteAction).isLoading;
        expect(returnedIsLoading).toEqual(true);
    });

    it('should return empty issues list when repo load is requested', () => {
        const repoLoadRequesteAction = {
            type: actionTypes.REPO_LOAD_REQUESTED,
            payload: {}
        };

        const returnedIssues = reducer({}, repoLoadRequesteAction).issues;
        expect(returnedIssues).toEqual([]);
    });

    it('should return null selectedRepo when repo load is requested', () => {
        const repoLoadRequesteAction = {
            type: actionTypes.REPO_LOAD_REQUESTED,
            payload: {}
        };

        const returnedSelectedRepo = reducer({}, repoLoadRequesteAction).selectedRepo;
        expect(returnedSelectedRepo).toEqual(null);
    });

    it('should return null errorMsg when repo load is requested', () => {
        const repoLoadRequesteAction = {
            type: actionTypes.REPO_LOAD_REQUESTED,
            payload: {}
        };

        const returnedErrorMsg = reducer({}, repoLoadRequesteAction).errorMsg;
        expect(returnedErrorMsg).toEqual(null);
    });

    it('should return isLoading === false when repo load fails', () => {
        const repoLoadRequesteAction = {
            type: actionTypes.REPO_LOAD_FAILED,
            payload: {}
        };

        const returnedIsLoading = reducer({}, repoLoadRequesteAction).isLoading;
        expect(returnedIsLoading).toEqual(false);
    });
});