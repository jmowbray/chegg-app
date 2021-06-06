import React, { Component } from 'react';
import { connect } from 'react-redux';
import { apiTokenInputChanged, issuesLoadRequested, orgInputChanged, repoLoadRequested } from './state/action-creators/appActions';

import './App.css';
import { Login } from './components/login';
import { TextInput } from './components/textInput';
import { RepositoryListing } from './components/repository';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  apiTokenInputChanged: apiToken => dispatch(apiTokenInputChanged(apiToken)),
  orgInputChanged: org => dispatch(orgInputChanged(org)),
  fetchRepos: () => dispatch(repoLoadRequested()),
  issuesLoadRequested: repoId => dispatch(issuesLoadRequested(repoId))
});

class App extends Component {

  handleApiTokenInputChanged = (event) => {
    this.props.apiTokenInputChanged(event.target.value);
  }

  handleGetRepos = event => {
    this.props.fetchRepos();
  }

  handleOrgInputChanged = event => {
    this.props.orgInputChanged(event.target.value);
  }

  handleRepoClicked = id => {
    this.props.issuesLoadRequested();
  }

  renderStuffs() {
    if (this.props.app.selectedRepo) {
      return <div>{this.props.app.selectedRepo}</div>  
    }

    if (this.props.app.repos) {
      return <RepositoryListing repos={this.props.app.repos} onRepoClickHandler={this.handleRepoClicked} />;
    }

    return null;
  }

  render() {
    return (
      <div className="App">
        <header className="App-Header">
          <h1 className="App-title">GitHub Repository Issue Manager</h1>
          <h1>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</h1>
          <Login inputHandler={this.handleApiTokenInputChanged}/>
          <TextInput inputHandler={this.handleOrgInputChanged} title="Organization" />
          <button onClick={this.handleGetRepos}>Get Repos</button>
          {this.renderStuffs()}
        </header>
        <div style={{border: "solid black 1px", height: "500px", width: "500px", marginTop: "25px", marginLeft: "auto", marginRight: "auto"}}>
          <div style={{borderBottom: "solid black 1px"}}>State Tree</div>
          <pre>{JSON.stringify(this.props, null, 4)}</pre>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);