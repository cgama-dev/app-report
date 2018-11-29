import React, { Component } from 'react'
import { Menu, Icon, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import ReportCreate from './ReportCreate'

class Header extends Component {

    render() {
        return (
            <div>
                <Menu color='teal' inverted>
                    <Menu.Item as={Link} to='/' active>REPORT-PDF</Menu.Item>
                    <Menu.Item onClick={() => this.props.generateReport()} > <Icon name='play' /> Executar</Menu.Item>
                    <Menu.Item onClick={() => this.props.updateReport()} > <Icon name='save' /> Salvar</Menu.Item>
                    <Menu.Menu position='right'>
                        {
                            this.props.isLoading &&

                            <Menu.Item>
                                <Loader size='tiny' active inline='centered'> Carregando...</Loader>
                            </Menu.Item>
                        }

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