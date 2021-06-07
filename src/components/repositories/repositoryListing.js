import ConnectedRepository from '../repositories/connectedRepository';

export const RepositoryListing = props => {
    const { repos, selectedRepo } = props;
    if (selectedRepo && repos.length === 0) {
        return <div>No repositories for this organization. There may not be any, or you may be using an invalid API Token</div>
    }
    return (
        <div>
            <ul style={{ listStyleType: "none" }}>
                {repos.map(repo => <li key={repo.name}><ConnectedRepository {...repo} /></li>)}
            </ul>
        </div>
    );
}