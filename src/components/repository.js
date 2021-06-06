import ConnectedRepository from './connectedRepository';

export const RepositoryListing = props => {
    const { repos } = props;
    return (
        <div>
            <ul style={{ listStyleType: "none" }}>
                {repos.map(repo => <li><ConnectedRepository {...repo} /></li>)}
            </ul>
        </div>
    );
}