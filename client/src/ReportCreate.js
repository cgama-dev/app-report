import React, { Component } from 'react'

import { Container, Grid, Image, Segment, Input, Menu, Button, Icon, Modal, Header as HeaderModal, Form } from 'semantic-ui-react'

import { connect } from 'react-redux'

import ActionsCreators from './redux/actionsCreators'

import { Redirect} from 'react-router-dom'


class ReportCreate extends Component {

    constructor(props) {
        super(props)
        this.state = { projectName: '', open: false }
    }

    handleChange = (event, { name, value }) => this.setState({ [name]: value })

    createReport = () => {
        if (!!this.state.projectName) {
            const project = {
                name: this.state.projectName,
                url: this.state.projectName
            }

            this.props.createReport(project)

            this.close()
        } else {
            alert('não existe')
        }
    }

    close = () => this.setState({ projectName: '', open: false })

    handleForm = () => (
        <Grid centered columns={1}>
            <Grid.Row centered columns={2}>
                <Grid.Column>
                    <br />
                    <br />
                    <Form>
                        <Form.Field required>
                            <label>Nome</label>
                            <Form.Input required placeholder='Informe o nome do projeto' name='projectName' value={this.projectName} onChange={this.handleChange} />
                        </Form.Field>
                    </Form>
                    <br />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
  
    render() {
        return (
            <div>
            
                <Button inverted color='green' onClick={() => this.setState({ open: true })} >
                    <Icon name='plus circle' /> Criar novo projeto
                </Button>
                <Modal
                    open={this.state.open}
                    size="small"
                    centered={false}
                    header='Cadastre um Projeto'
                    content={this.handleForm()}
                    actions={[
                        <Button key={0} color='red' onClick={() => this.close()}>
                            <Icon name='trash' />
                            Cancelar
                        </Button>,
                        <Button key={1} color='green' onClick={() => this.createReport()} >
                            <Icon name='plus circle' /> Salvar
                        </Button>
                    ]}
                />

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        project: state.projects.project,
        isLoading: state.projects.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReport: (project) => dispatch(ActionsCreators.createReportRequest(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportCreate) 