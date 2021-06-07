import React, { Component } from 'react';
import { connect } from 'react-redux';
import { issuesLoadRequested } from '../state/action-creators/appActions';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    issuesLoadRequested: repoName => dispatch(issuesLoadRequested(repoName))
});

class Repository extends Component {

    handleRepoClicked = () => {
        const { name } = this.props;
        this.props.issuesLoadRequested(name);
    }

    render() {
        const { name, issues } = this.props;
        const styles = { border: "solid black 1px", borderRadius: "5px", cursor: "pointer", width: "150px", padding: "5px", marginBottom: "8px" }

        return (
            <div onClick={this.handleRepoClicked} style={styles}>
                <div>{name}</div>
                <div style={{ marginTop: "5px" }}>
                    {/* I grabbed this issues icon SVG from GitHub */}
                    <svg style={{ verticalAlign: "text-bottom" }} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
                    <div style={{ display: "inline-block", marginLeft: "5px" }}>{issues}</div>
                </div>                                
            </div>        
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Repository);