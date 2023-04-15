/** @format */

import '../styles/globals.css'
import Layout from '../Layouts/MainLayout'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
import {Provider} from 'react-redux'
import store from '../redux/store'
export default function App({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap')
	}, [])
	return (
		<>
			<Provider store={store}>
				<Layout>
					<Head>
						<title>My Shop</title>
					</Head>
					<div className='root'>
						<Component {...pageProps} />
					</div>
				</Layout>
			</Provider>
		</>
	)
}
