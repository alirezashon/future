/** @format */

import Navigation from '../../components/Navigation'
const index = ({ children }) => {
	return (
		<>
			<div>
				<Navigation />
				<main>{children}</main>
			</div>
		</>
	)
}
export default index
