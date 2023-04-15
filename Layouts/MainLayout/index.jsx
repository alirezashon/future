/** @format */

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import DialSpeed from '../../components/Navigation/DialSpeed'

const index = ({ children }) => {
	return (
		<>
			<div>
				<Navigation />
				<DialSpeed/>
				<main >{children}</main>
				<Footer />
			</div>
		</>
	)
}
export default index
