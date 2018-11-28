import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import ReportCreate from './ReportCreate'

class Header extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Menu inverted>
                    <Menu.Item as={Link} to='/' active>REPORT-PDF</Menu.Item>
                    <Menu.Item onClick={() => this.props.runReport()} > <Icon name='play' /> Executar</Menu.Item>
                    <Menu.Item onClick={() => this.props.updateReport()} > <Icon name='save' /> Salvar</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <ReportCreate />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default Header