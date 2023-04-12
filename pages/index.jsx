/** @format */

import Story from '@/components/Story'
import PostBox from '@/components/PostBox'
import Carousel from '@/components/Carosoul'
import Search from '@/components/Search'
const index = () => {
	return (
		<>
			<Carousel />
			<Story />
			<PostBox />
			<Search/>
		</>
	)
}
export default index
