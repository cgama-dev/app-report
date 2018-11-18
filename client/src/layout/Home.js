import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCretors from './../redux/actionsCreators'

import { Link } from 'react-router-dom'

import { Container, List, Image, Icon, Divider, Modal, Button } from 'semantic-ui-react';

import Header from './Header'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    loadDataRequest = () => {
        console.log("Lista de Projetos")
    }

    componentDidMount() {
        this.loadDataRequest()
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h1 align="center"> Todos os Projetos</h1>

                </Container>
                <Divider />
                <Container>
                    <List horizontal relaxed='very'>
                        <List.Item  as={Link} to='/report'>
                            <List.Content >
                                <Icon name='file alternate outline' size='huge' />
                                <List.Header  as='a'> <h1>Elliot Fu</h1></List.Header>
                            </List.Content>
                        </List.Item>
                    </List>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDataRequest: dispatch(ActionCretors.getProjectsSuccess())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)