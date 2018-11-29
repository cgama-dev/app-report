import React, { Component } from 'react'
import { Menu, Loader } from 'semantic-ui-react'
import ReportCreate from '../report/ReportCreate'

class Header extends Component {

    render() {
        return (
            <div>
                <Menu color='teal' inverted>
                    <Menu.Item active>REPORT-PDF </Menu.Item>
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