import React, { Component } from 'react'
import Header from './Header';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/mode/json';
import 'brace/mode/html';
import 'brace/theme/twilight';

import { connect } from 'react-redux'

import ActionsCreators from './redux/actionsCreators'

import { Grid, Tab, Container, Segment, Divider, Button, Icon, Header as HeaderContent, Loader, Dimmer } from 'semantic-ui-react'

class Report extends Component {

    constructor(props) {
        super(props)

        this.state = {
            report: {
                page: '',
                helpers: '',
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

    componentWillReceiveProps(nexProps) {
        const { page, helpers, data, header, footer } = nexProps
        const report = {
            page,
            helpers,
            data,
            header,
            footer
        }
        this.setState({
            report
        })
    }

    handleChangeReportTabs = fieldname => event => {
        const report = {
            ...this.state.report
        }

        report[fieldname] = event

        this.setState({
            report
        })

    }

    updateReport = () => {
        const report = {
            ...this.state.report,
            reportId: this.props.match.params.projectid
        }

        this.props.updateReport(report)
    }

    generateReport = () => {
        const report = {
            ...this.state.report,
            reportId: this.props.match.params.projectid
        }

        this.props.generateReport(report)
        
    }

    AceEditorType = (type, fieldname) =>

        <AceEditor
            width="800px"
            mode={type}
            theme="twilight"
            name={fieldname}
            onChange={this.handleChangeReportTabs(`${fieldname}`)}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={this.state.report[fieldname]}
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
                menuItem: { key: 'page', icon: 'html5', content: 'Page' }, render: () =>
                    <Tab.Pane>
                        {this.AceEditorType('html', 'page')}
                    </Tab.Pane>

            },
            {
                menuItem: { key: 'helper', icon: 'js', content: 'Helper' }, render: () =>
                    <Tab.Pane>
                        {this.AceEditorType('javascript', 'helpers')}
                    </Tab.Pane>
            },
            {
                menuItem: { key: 'data', icon: 'js', content: 'Data' }, render: () =>
                    <Tab.Pane>
                        {this.AceEditorType('json', 'data')}
                    </Tab.Pane>
            },
            {
                menuItem: { key: 'header', icon: 'html5', content: 'Header' }, render: () =>
                    <Tab.Pane>
                        {this.AceEditorType('html', 'header')}
                    </Tab.Pane>
            },
            {
                menuItem: { key: 'footer', icon: 'html5', content: 'Footer' }, render: () =>
                    <Tab.Pane>
                        {this.AceEditorType('html', 'footer')}
                    </Tab.Pane>
            },
        ]
        const styleWidth = {
            width: "98%"
        }
        const styleHeight = {
            height: "800px"
        }
        return (

            <div>
                <Header  generateReport={this.generateReport} updateReport={this.updateReport}></Header>
                <Container style={styleWidth}>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={8} verticalAlign="middle" style={styleHeight}>
                                <Tab panes={panes} />
                            </Grid.Column>
                            <Grid.Column width={8}  >
                                <br />
                                <br />
                                <Segment >
                                    <Button floated='right'>Pré - Visualizar</Button>
                                    <Divider clearing />
                                    <Grid centered columns={4}>
                                        <Grid.Column style={styleHeight}>
                                            <Icon name='file pdf outline' loading={false} size='massive' />
                                            <HeaderContent as='h1'>Sem resultado</HeaderContent>
                                        </Grid.Column>
                                        {
                                            this.props.report &&
                                            <object data={this.props.report} type="application/pdf" width="100%" height="100px"></object>
                                        }
                                    </Grid>
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
    console.log("DATADATADTAD", state)
    const { data, header, footer, helpers, page } = state.reports.report

    return {
        data,
        header,
        footer,
        helpers,
        page,
        isLoading: state.reports.isLoading,
        report: state.reports.report
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReport: (reportId) => dispatch(ActionsCreators.getReportRequest(reportId)),
        updateReport: (report) => dispatch(ActionsCreators.updateReportRequest(report)),
        generateReport: (report) => dispatch(ActionsCreators.generateReportRequest(report))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)