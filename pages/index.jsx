/** @format */

import Story from '../components/Story'
import Post from '../components/Post'
import Carousel from '@/components/Carosoul'
import Search from '@/components/Search'
const index = () => {
	return (
		<>
			<Carousel />
			<Story />
			<Post />
			<Search/>
		</>
	)
}
export default index
