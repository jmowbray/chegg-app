import { RepositoryListing } from '../../components/repositories/repositoryListing';
import SortableIssueListing from '../../components/issues/connectedSortableIssueListing';
import './repoIssueBrowser.css';

export const RepoIssueBrowser = props => {
    const { repos, selectedRepo } = props;

    return (
        <div className="repo-issue-browser">
            <div className="repo-issue-browser__repos">
                <RepositoryListing repos={repos} selectedRepo={selectedRepo} />
            </div>
            <div className="repo-issue-browser__issues">
                {selectedRepo ? <SortableIssueListing /> :
                    <div>Load/Select a repository to see the associated issues</div>
                }
            </div>
        </div>
    );
}