import React from "react";
import styled from "styled-components";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import CytoscapeComponent from 'react-cytoscapejs';

const Container = styled.div`
    display: flex;
    flex-direction: row;

`;

export default class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onChange = this.onChange.bind(this);
        this.state = { cytoscapeData : [
            { data: { id: 'one', label: 'Node 1' }, position: { x: 100, y: 100 } },
         ]  }
    }

    onChange(newValue) {
        let json = null
        try {
             json = JSON.parse(newValue);
        } catch (e) {
            console.log('error was thrown', e)
                        
        }
        if(json){ this.setState({cytoscapeData: json }) }
    }

    render() {
        const { cytoscapeData } = this.state
        console.log('cytoscapeData:', cytoscapeData)
        return (
            <Container>
                <AceEditor
                    mode="plain_text"
                    theme="github"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }}
                />
            { <CytoscapeComponent elements={cytoscapeData} style={ { width: '600px', height: '600px' } } /> }
       </Container>
           
        );
    }
}











