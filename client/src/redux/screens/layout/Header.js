import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import ReportCreate from '../report/ReportCreate'

class Header extends Component {

    render() {
        return (
            <div>
                <Menu inverted>
                    <Menu.Item active>REPORT-PDF </Menu.Item>
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