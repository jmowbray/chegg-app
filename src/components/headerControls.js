import React, {Component} from 'react';
import { connect } from 'react-redux';
import { TextInput } from './textInput';
import { apiTokenInputChanged, orgInputChanged, repoLoadRequested } from '../state/action-creators/appActions';

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => ({
    apiTokenInputChanged: apiToken => dispatch(apiTokenInputChanged(apiToken)),
    orgInputChanged: org => dispatch(orgInputChanged(org)),
    repoLoadRequested: () => dispatch(repoLoadRequested()),
});

class HeaderControls extends Component {

    handleApiTokenInputChanged = (event) => {
        this.props.apiTokenInputChanged(event.target.value);
    }    

    handleOrgInputChanged = event => {
        this.props.orgInputChanged(event.target.value);
    }

    render() {
        return (
            <div style={{ margin: "auto" }}>
                <div style={{ display: "flex", marginTop: "25px" }}>
                    <div style={{ flexGrow: "2", width: "100%" }}>
                        <TextInput styles={{ width: "100%" }} inputHandler={this.handleOrgInputChanged} title="Organization (IE: 'reactjs')" />
                    </div>                    
                    <div style={{ flexGrow: "1", width: "100%", marginLeft: "10px" }}>
                        <TextInput styles={{ width: "100%" }} inputHandler={this.handleApiTokenInputChanged} title="API Token" />
                    </div>
                    <div style={{ flexGrow: "1", width: "100%", position: "relative" }}>
                        <button style={{ position: "absolute", bottom: "0px", left: "30px" }} onClick={this.props.repoLoadRequested}>Load Repositories</button>
                    </div>
                </div>                
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderControls);