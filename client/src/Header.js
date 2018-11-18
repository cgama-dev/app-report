import React, { Component } from 'react'
import { Menu, Button, Image, Icon, Modal, Header as HeaderModal } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { open: false }
    }

    show = dimmer => () => this.setState({ dimmer, open: true })

    close = () => this.setState({ open: false })

    render() {
        const { open, dimmer } = this.state

        return (
            <div>
                <Menu inverted>
                    <Menu.Item as={Link} to='/' active>REPORT-PDF</Menu.Item>
                    <Menu.Item > <Icon name='play' /> Executar</Menu.Item>
                    <Menu.Item > <Icon name='save' /> Salvar</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button onClick={this.show('inverted')} inverted color='green' >
                                <Icon name='plus circle' /> Criar novo projeto
                            </Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <HeaderModal>Default Profile Image</HeaderModal>
                            <p>We've found the following gravatar image associated with your e-mail address.</p>
                            <p>Is it okay to use this photo?</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' content="cancelar" onClick={this.close} />
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content="Criar"
                            onClick={this.close}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

export default Header