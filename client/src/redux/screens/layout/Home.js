import React, { Component } from 'react'

import { connect } from 'react-redux'

import ActionCretors from './../../actionsCreators'

import { Link } from 'react-router-dom'

import { Container, List, Icon, Divider, Loader, Menu } from 'semantic-ui-react'

import Header from './Header'

import Footer from './Footer'

class Home extends Component {

    componentDidMount() {
        this.props.loadDataRequest()
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
                <Header isLoading={this.props.isLoading} />
                <br />
                <h1 align="center"> Todos os Projetos </h1>
                <Divider />
                {
                    <Container>

                        {
                            !this.props.isLoading &&
                            <List horizontal relaxed='very'>
                                {this.handleProjects(this.props.projects)}
                            </List>
                        }
                    </Container>
                }
                <Footer/>
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