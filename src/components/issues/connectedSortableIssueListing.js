import { Issue } from './issue';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { SortableList } from '../sortable';
import  { issuesReordered } from '../../state/action-creators/appActions';

const mapStateToProps = (state) => {
    return {
        issues: state.app.issues,
        isLoading: state.app.issuesLoading,
        repoName: state.app.selectedRepo
    };
  }
  
const mapDispatchToProps = (dispatch, props) => ({
    issuesReordered: ({oldIndex, newIndex}) => {
        dispatch(issuesReordered(oldIndex, newIndex))
    }
})

class SortableIssuesListing extends Component {
    render() {
        const { issues, isLoading, repoName, issuesReordered } = this.props;

        if (isLoading) {
            return <div>Loading...</div>;
        } else if (repoName && issues && issues.length === 0) {
            return <div>No issues for this repository.</div>
        }

        const issueComponents = issues.map(issue => <Issue {...issue} />);
        return (
            <div>
                <div>Viewing issues for repo '{repoName}'. Drag and drop to reorder.</div>
                <SortableList items={issueComponents} onSortEnd={issuesReordered} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortableIssuesListing);
