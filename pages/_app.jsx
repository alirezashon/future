/** @format */

import '@/styles/globals.css'
import Layout from '../Layouts/MainLayout'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<Head>
					<title>My Shop</title>
				</Head>
				<div className='root'>
					<Component {...pageProps} />
				</div>
			</Layout>
		</>
	)
}
