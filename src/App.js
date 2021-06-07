import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import './main.css'
import { RepoIssueBrowser } from './views/repository-issue-browser/repoIssueBrowser';
import HeaderControls from './components/controls/headerControls';

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

        return null;
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <h1>GitHub Repository Issue Manager</h1>
                </div>

                <div className="app-wrapper">
                    <div className="app-main">
                        <HeaderControls />
                        <div className="repo-issue-browser-wrapper">
                            {this.renderRepoIssueBrowser()}
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);