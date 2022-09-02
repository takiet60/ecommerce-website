import React from 'react'
import './Home.scss'
import { Header, Banner, BestSeller, Category } from '../../components'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <BestSeller />
            <Category />
        </div>
    )
}

export default Home