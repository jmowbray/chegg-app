import { timeSince } from '../../util/dateUtil';
import './issue.css';

export const Issue = props => {
    const { title, avatar_url, created_at, updated_at } = props;
    const createdAtString = new Date(created_at).toLocaleDateString("en-US");
    const updatedAtString = timeSince(new Date(updated_at));

    return (
        <div className="issue">
            <div className="issue__avatar" >
                <img src={avatar_url} alt="" />
            </div>
            <div className="issue__details">
                <div className="issue__details-title">{title}</div>
                <div className="issue__details-times">
                    <div>Created: {createdAtString}</div>
                    <div className="issue__details-times-updated">Updated: {updatedAtString}</div>
                </div>
            </div>
        </div>
    );
}
