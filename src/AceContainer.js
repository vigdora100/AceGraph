import React from "react";
import styled from "styled-components";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { connect } from 'react-redux'
import updateGraph from './actions';
import initialValue from './InitialValue.json'

class AceContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    onChange = (newValue)  => {
        const { updateGraph } =  this.props
        let json = null
        try {
             json = JSON.parse(newValue);
             updateGraph(json)
        } catch (e) {
            updateGraph(false)                        
        }
    }

    render() {
        return (
            <Container>
                <h1> Add Json here </h1>
                <AceEditor
                    value={JSON.stringify(initialValue,null,2)}
                    placeholder="Add Json here"
                    height="600px"
                    mode="plain_text"
                    theme="monokai"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                />
           </Container>   
        );
    }
}

const mapDispatchToProps = {
     updateGraph: updateGraph
} 

export default connect(null,mapDispatchToProps)(AceContainer)











