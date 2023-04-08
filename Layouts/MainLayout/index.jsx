/** @format */

import Navigation from '../../components/Navigation'
const index = ({ children }) => {
	return (
		<>
			<div style={{height:'500vh'}}>
				<Navigation />
				<main style={{marginTop:222}}>{children}</main>
			</div>
		</>
	)
}
export default index
