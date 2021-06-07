import { timeSince } from '../util/dateUtil';

export const Issue = props => {

    const { title, avatar_url, created_at, updated_at } = props;

    const wrapperStyles = { height: "60px", border: "1px solid black", borderRadius: "5px", cursor: "pointer", padding: "5px", marginBottom: "8px", display: "flex" };

    return (
        <div style={wrapperStyles}>
            <img height="40px" width="40px" src={avatar_url} alt="" />
            <div style={{ marginLeft: "10px ", textAlign: "left" }}>
                <div style={{ fontWeight: "bold", textAlign: "left" }}>{title}</div>
                <div style={{ marginTop: "3px", fontSize: "small" }}>Created: {new Date(created_at).toLocaleDateString("en-US")}</div>
                <div style={{ marginTop: "3px", fontStyle: "italic", fontSize: "small" }}>Updated: {timeSince(new Date(updated_at))}</div>
            </div>
        </div>
    );
}
