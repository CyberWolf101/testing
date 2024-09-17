import React from 'react';
import Login from './components/login';
import Signup from './components/signup';
import { TabIndicator, TabList, TabPanel, TabPanels, Tabs, Tab } from '@chakra-ui/react';
import {Fade} from 'react-reveal'
import { userContext } from '../../userContext';
import { useContext } from 'react';

function AuthIndex(props) {
    const [user, setUser] = useContext(userContext)

    return (
        <div>
            <div className="p-5">
                <center>
                    <Tabs position="relative" variant="unstyled">
                        <TabList
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Tab>LOGIN</Tab>
                            <Tab>SIGN UP</Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="2px"
                            bg="#000427"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel>
                                <Fade>
                                    <Login />
                                </Fade>
                            </TabPanel>
                            <TabPanel>
                                <Signup />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </center>
            </div>
        </div>
    );
}

export default AuthIndex;