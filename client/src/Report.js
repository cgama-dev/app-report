import React, { Component } from 'react'
import Header from './Header';
import AceEditor from 'react-ace';

import brace from 'brace';

import 'brace/mode/javascript';

import 'brace/theme/twilight';

import { connect } from 'react-redux'

import ActionsCreators from './redux/actionsCreators'

import { Grid, Tab, Container, Segment, Divider, Button } from 'semantic-ui-react'

class Report extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getReport()        
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.projectid !== prevProps.match.params.projectid){
            this.props.getReport()
        }
    }
    
    render() {
        const panes = [
            {
                menuItem: 'page', render: () => <Tab.Pane>
                    <AceEditor
                        mode="javascript"
                        theme="twilight"
                        name="blah2"
                        onLoad={this.onLoad}
                        onChange={this.onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={`function onLoad(editor) {
  console.log("i've loaded");
}`}
                        setOptions={{
                            enableBasicAutocompletion: false,
                            enableLiveAutocompletion: false,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 2,
                        }} />



                </Tab.Pane>
            },
            { menuItem: 'helper', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'data', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
            { menuItem: 'header', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
            { menuItem: 'footer', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        ]

        return (
            <div>
                <Header></Header>
                <Container>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={8} verticalAlign="middle" >
                                <br />
                                <Tab panes={panes} />

                            </Grid.Column>
                            <Grid.Column width={8}>
                                <br />
                                <Segment>
                                    <Button floated='right'>Pré - Visualizar</Button>
                                    <Divider clearing />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore...
                              </Segment>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReport: () => dispatch(ActionsCreators.getReportRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)