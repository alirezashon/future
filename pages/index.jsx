/** @format */

import Story from '../components/Story'
import PostBox from '../components/PostBox'
import Carousel from '../components/Carousel'
import StarSelector from './StarSelector'
const index = () => {
	return (
		<>
			<Story />
			<div  style={{marginTop:'19vh'}}>
				<Carousel />
			</div>
			<PostBox />
			<StarSelector/>
		</>
	)
}
export default index
