import React from 'react'
import Background from '../picture/sleepWoman.png'
import Layout from "./containers/Layout";



export default function Home(){
    return(
        <Layout>
            <div style={{backgroundImage:`url(${Background})`,
                backgroundSize:"cover", padding:360}}>
            </div>
        </Layout>
    )
}