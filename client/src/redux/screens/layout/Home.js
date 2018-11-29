import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCretors from './../../actionsCreators'

import { Link } from 'react-router-dom'

import { Container, List, Icon, Divider } from 'semantic-ui-react';

import Header from './Header'

import ReactNotification from "react-notifications-component";

import "react-notifications-component/dist/theme.css";


class Home extends Component {

    constructor(props) {
        super(props)
        this.notificationDOMRef = React.createRef();
    }

    addNotification = (type, menssage) => {
        this.notificationDOMRef.current.addNotification({
            title: "Lista de Projetos",
            message: menssage,
            type: type,
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 3000 },
            dismissable: { click: true }
        });
    }

    componentDidMount() {
        this.props.loadDataRequest()
    }

    componentWillReceiveProps(nexProps) {
        if (nexProps.reports.length) {
            this.addNotification('success', 'Projetos carregados')
        }
    }

    handleProjects = (reports) => (
        this.props.reports.map((item) => (
            <List.Item key={item._id} as={Link} to={`/report/${item._id}`} >
                <List.Content >
                    <Icon name='file alternate outline' size='huge' />
                    <List.Header as='span'> <h1>{item.projectName}</h1></List.Header>
                </List.Content>
            </List.Item>
        ))
    )

    render() {

        return (
            <div>
                <ReactNotification ref={this.notificationDOMRef} />

                <Header />
                <br />
                <h1 align="center"> Todos os Projetos </h1>
                <Divider />
                <Container>
                    <List horizontal relaxed='very'>
                        {this.handleProjects(this.props.projects)}
                    </List>
                </Container>
                <Container>
                    <List horizontal relaxed='very'>

                    </List>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reports: state.reports.data,
        isLoading: state.reports.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDataRequest: () => dispatch(ActionCretors.getReportsRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)