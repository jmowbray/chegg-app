import React, {Component} from 'react';
import { connect } from 'react-redux';
import { TextInput } from '../textInput';
import { apiTokenInputChanged, orgInputChanged, repoLoadRequested } from '../../state/action-creators/appActions';
import './headerControls.css';

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
            <div>
                <div className="directions">Enter an Organization (required) and an API Token (optional) then click "Load Repositories" to load repositories.</div>
                <div className="header-controls">
                    <div>
                        <TextInput 
                            styles={{ width: "100%" }} 
                            inputHandler={this.handleOrgInputChanged}
                            title="Organization (IE: 'reactjs')" />
                    </div>                    
                    <div>
                        <TextInput 
                            styles={{ width: "100%" }}
                            inputHandler={this.handleApiTokenInputChanged} 
                            title="API Token" />
                    </div>
                    <div className="header-controls__button">
                        <button onClick={this.props.repoLoadRequested}>Load Repositories</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderControls);