import React, { Component } from 'react'
import Header from './Header';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/mode/json';
import 'brace/mode/html';
import 'brace/theme/twilight';

import { connect } from 'react-redux'

import ActionsCreators from './redux/actionsCreators'

import { Grid, Tab, Container, Segment, Divider, Button } from 'semantic-ui-react'

class Report extends Component {

    constructor(props) {
        super(props)

        this.state = {
            report: {
                page: '',
                helper: '',
                data: '',
                header: '',
                footer: ''
            }
        }
    }

    componentDidMount() {
        this.props.getReport(this.props.match.params.projectid)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.projectid !== prevProps.match.params.projectid) {
            this.props.getReport(this.props.match.params.projectid)
        }
    }

    runReport = () => {
        console.log("Run Report")
    }

    saveReport = () => {
        console.log("Save Report")
    }

    handleChangeReportTabs = fieldname => event => {
        const report = {
            ...this.state.report
        }

        report[fieldname] = event

        this.setState({
            report
        })

        console.log(this.state.report)
    }

    AceEditorType = (type, fieldname) =>
        <AceEditor
            mode={type}
            theme="twilight"
            name={fieldname}
            onLoad={this.onLoad}
            onChange={this.handleChangeReportTabs(`${fieldname}`)}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={this.props[fieldname]}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
            }} />

    render() {
        const panes = [
            {
                menuItem: 'page', render: () =>
                    <Tab.Pane>
                        {this.AceEditorType('html', 'page')}
                    </Tab.Pane>
            },
            {
                menuItem: 'helper', render: () =>
                    <Tab.Pane>
                        {this.AceEditorType('javascript', 'helper')}
                    </Tab.Pane>
            },
            {
                menuItem: 'data', render: () =>
                    <Tab.Pane>
                        {this.AceEditorType('json', 'data')}
                    </Tab.Pane>
            },
            {
                menuItem: 'header', render: () =>
                    <Tab.Pane>
                        {this.AceEditorType('html', 'header')}
                    </Tab.Pane>
            },
            {
                menuItem: 'footer', render: () =>
                    <Tab.Pane>
                        {this.AceEditorType('html', 'footer')}
                    </Tab.Pane>
            },
        ]

        return (
            <div>
                <Header runReport={this.runReport} saveReport={this.saveReport}></Header>
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
    
    const { data, header, footer, helper, page } = state.reports.report

    return {
        data,
        header,
        footer,
        helper,
        page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReport: (reportId) => dispatch(ActionsCreators.getReportRequest(reportId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)