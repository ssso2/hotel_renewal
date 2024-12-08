import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import MyPageTab from './MyPageTab'
import MyInfoCont from './MyInfoCont'


const MyInfo = () => {


    return (
        <>
            <Header/>
            <div class="container">
                <div class="center">
                    <div class="depth3-tab-wrap">
                        <MyPageTab/>
                        <div class="content">
                            <MyInfoCont/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default MyInfo
