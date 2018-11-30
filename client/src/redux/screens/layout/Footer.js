import React from 'react'

import { Menu, Icon } from 'semantic-ui-react'

const Footer = props => {
    return (
        <div>
            <div>
                <p style={{ paddingBottom: "32%" }}></p>
            </div>
            <Menu
                inverted
                color='teal'
                borderless
                style={{
                    flexShrink: 0, //don't allow flexbox to shrink it
                    borderRadius: 0, //clear semantic-ui style
                    margin: 0 //clear semantic-ui style
                }}>
                <Menu.Item
                    header>
                    <a href="https://github.com/cgama-dev/app-report" target="_blank"> <Icon name='github' />  Código Fonte</a>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Footer