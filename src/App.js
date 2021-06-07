import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { RepoIssueBrowser } from './views/repoIssueBrowser';
import HeaderControls from './components/headerControls';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({

});

class App extends Component {

    renderRepoIssueBrowser() {
        const { repos, selectedRepo, issues, isLoading, errorMsg, issuesLoading } = this.props.app;

        if (errorMsg) {
            return <div style={{ marginTop: "25px" }}>{errorMsg}</div>
        } else if (isLoading) {
            return <div style={{ marginTop: "25px" }}>Loading...</div>
        }

        if (repos) {
            return (
                <RepoIssueBrowser repos={repos} issues={issues} selectedRepo={selectedRepo} issuesLoading={issuesLoading} />
            );
        }

        return <div>Enter an API Token and Organization and click "Load Repositories" to view repositories</div>;
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-title">GitHub Repository Issue Manager</h1>
                <div>Enter an Organization (required) and an API Token (optional) then click "Load Repositories" to load repositories.</div>
                <div style={{ width: "50%", margin: "auto", marginTop: "25px" }}>
                    <HeaderControls />
                    {this.renderRepoIssueBrowser()}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);