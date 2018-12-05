import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/Layout/Layout'
import 'semantic-ui-css/semantic.min.css'

export default class InitApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Container>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Container>
    }
}