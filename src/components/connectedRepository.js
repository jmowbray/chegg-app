import React, { Component } from 'react';
import { connect } from 'react-redux';
import { issuesLoadRequested } from '../state/action-creators/appActions';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    issuesLoadRequested: repoId => dispatch(issuesLoadRequested(repoId))
});

class ConnectedRepository extends Component {

    handleRepoClicked = () => {
        const { name } = this.props;
        this.props.issuesLoadRequested(name);
    }

    render() {
        const { name, owner, issues, ownerAvatarUrl, id } = this.props;

        return (
            <div onClick={this.handleRepoClicked} style={{ border: "solid black 1px", cursor: "pointer" }}>
                <div>{name}</div>
                <div>{owner}</div>
                <div>{issues}</div>
                <img src={ownerAvatarUrl} height="40" width="40" />
                <div>{id}</div>
            </div>        
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedRepository);