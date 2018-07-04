import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Profile from '../components/profile'
import Portfolio from '../components/portfolio';
export default class Index extends React.Component {
  render() {
    return (
        <div>
            <Head>
                <title>Panjamapon Karnasuta</title>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css"/>
            </Head>
            <div className="container-fluid">
                <div className="row">
                    <div className="container">
                        <Profile/>
                        <br/>
                        <Portfolio/>
                    </div>
                </div>
            </div>

            <style>{`
                    .displayName {
                        width: 150px;
                        height: 150px;
                        margin:50px auto;
                        margin-bottom: 26px;
                        display: block;
                        border-radius: 100%;
                        object-fit: cover;
                        object-position: center top;
                    }  
                    .wrapLink {
                        width:360px;
                        margin:auto;
                        display:block;
                    }
                    .wrapLink a {
                        margin-left: 40px;
                        text-transform: capitalize;
                        text-decoration: none;
                        color: #495057;
                    }
            `}</style>
        </div>
    );
  }
}