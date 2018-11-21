import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import ReportCreate from './ReportCreate'

class Header extends Component {

    render() {
        return (
            <div>
                <Menu inverted>
                    <Menu.Item as={Link} to='/' active>REPORT-PDF</Menu.Item>
                    <Menu.Item > <Icon name='play' /> Executar</Menu.Item>
                    <Menu.Item > <Icon name='save' /> Salvar</Menu.Item>
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