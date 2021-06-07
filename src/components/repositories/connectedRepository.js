import React, { Component } from 'react';
import { connect } from 'react-redux';
import { issuesLoadRequested } from '../../state/action-creators/appActions';
import './repository.css';

const mapStateToProps = state => ({
    selectedRepo: state.app.selectedRepo
});

const mapDispatchToProps = dispatch => ({
    issuesLoadRequested: repoName => dispatch(issuesLoadRequested(repoName))
});

class Repository extends Component {

    handleRepoClicked = (event) => {
        const { name } = this.props;
        this.props.issuesLoadRequested(name);
    }

    render() {
        const { name, issues, selectedRepo } = this.props;
        const repoClassName = name === selectedRepo ? "repository--selected" : "repository";

        return (
            <div className={repoClassName} onClick={this.handleRepoClicked} >
                <div>{name}</div>
                <div className="repository__issues">
                    {/* I grabbed this issues icon SVG from GitHub */}
                    <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                        <path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>
                    </svg>
                    <div className="repository__issues-count">{issues}</div>
                </div>                                
            </div>        
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repository);