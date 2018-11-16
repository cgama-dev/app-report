import React, { Component } from 'react'

import { connect } from 'react-redux'

import ActionCretors from './../redux/actionsCreators'

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
                <h1>
                    {JSON.stringify(this.props.projects)}
                    Home
                </h1>
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