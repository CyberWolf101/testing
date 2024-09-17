import React from 'react';
import Nav from './components/nav';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import NavBar from '../../generalComponents/navBar';
import NewestItems from './components/newestItems';
import CreateNSell from './components/createNSell';
import TopSeller from './components/topSeller';

function Home(props) {
    return (
        <div>
            <Header />
            <NewestItems/>
            <CreateNSell/>
            <TopSeller/>
        </div>
    );
}

export default Home;