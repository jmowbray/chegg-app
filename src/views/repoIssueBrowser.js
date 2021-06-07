import { RepositoryListing } from '../components/repositoryListing';
import SortableIssueListing from '../components/connectedSortableIssueListing';

export const RepoIssueBrowser = props => {
    const { repos, selectedRepo } = props;
    return (
        <div>
            <div style={{ marginTop: "25px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "24%", display: "inline-block", overflowY: "scroll", height: "800px",  }}>
                        <RepositoryListing repos={repos} selectedRepo={selectedRepo} />
                    </div>
                    <div style={{ width: "73%", display: "inline-block", overflowY: "scroll", height: "800px",  }}>
                        {selectedRepo ? <SortableIssueListing /> :
                            <div>Select a repository to see the associated issues</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}