import React, { Component } from 'react'
import Header from './Header';

import { Grid, Tab, Container, Segment, Divider, Button } from 'semantic-ui-react'

class Report extends Component {
    render() {
        const panes = [
            { menuItem: 'page', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
            { menuItem: 'helper', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
            { menuItem: 'data', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
            { menuItem: 'header', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
            { menuItem: 'footer', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        ]

        return (
            <div>
                <Header></Header>
                <Container>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={8} verticalAlign="middle" >
                                <br />
                                <Tab panes={panes} />

                            </Grid.Column>
                            <Grid.Column width={8}>
                                <br />
                                <Segment>
                                    <Button floated='right'>Pré - Visualizar</Button>
                                    <Divider clearing />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore...
                              </Segment>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Report