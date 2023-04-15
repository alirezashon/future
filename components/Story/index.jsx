/** @format */
import { AiFillCloseCircle } from 'react-icons/ai'
import Image from 'next/image'
import { useState } from 'react'
import Styles from '../../styles/components/Story/Story.module.css'
const StoryComponent = () => {
	const [activeStoryIndex, setActiveStoryIndex] = useState()
	const [showStoryBox, setShowStoryBox] = useState(false)
	const [storySeen, setStorySeen] = useState(false)
	const stories = [
		{
			id: 1,
			imageUrl: '/124.jpg',
		},
		{
			id: 1,
			imageUrl: '/124.jpg',
		},
		{
			id: 2,
			imageUrl: '/127.jpg',
		},
		{
			id: 3,
			imageUrl: '/128.jpg',
		},
		{
			id: 1,
			imageUrl: '/124.jpg',
		},
		{
			id: 1,
			imageUrl: '/124.jpg',
		},
		{
			id: 2,
			imageUrl: '/123.jpg',
		},
		{
			id: 3,
			imageUrl: '/123.jpg',
		},
		{
			id: 1,
			imageUrl: '/124.jpg',
		},
		{
			id: 1,
			imageUrl: '/124.jpg',
		},
		{
			id: 2,
			imageUrl: '/123.jpg',
		},
		{
			id: 3,
			imageUrl: '/123.jpg',
		},
		{
			id: 1,
			imageUrl: '/124.jpg',
		},
		{
			id: 1,
			imageUrl: '/124.jpg',
		},
		{
			id: 2,
			imageUrl: '/123.jpg',
		},
		{
			id: 3,
			imageUrl: '/123.jpg',
		},
		{
			id: 1,
			imageUrl: '/124.jpg',
		},
		{
			id: 1,
			imageUrl: '/124.jpg',
		},
		{
			id: 2,
			imageUrl: '/123.jpg',
		},
		{
			id: 3,
			imageUrl: '/123.jpg',
		},
	]

	const handleStoryClick = (index) => {
		setActiveStoryIndex(index)
		setShowStoryBox(true)

		setTimeout(() => {
			setShowStoryBox(false)
			setStorySeen(true)
			setActiveStoryIndex((prevIndex) => prevIndex + 1)
		}, 7000)
	}
	const closeStory = () => {
		setShowStoryBox(false)
	}

	return (
		<>
			<div></div>
			<div className={Styles.storyBox}>
				{stories.map((story, index) => (
					<div key={story.id}>
						<div
							className={Styles.story}
							style={{
								border: `2px solid ${
									activeStoryIndex === index
										? '#dfd688'
										: storySeen
										? 'silver'
										: 'gold'
								}`,
							}}
							onClick={() => handleStoryClick(index)}>
							<Image
								width={99}
								height={99}
								src={story.imageUrl}
								alt={`Story ${index + 1}`}
								className={Styles.storyBanner}
							/>
						</div>
					</div>
				))}
			</div>
			{showStoryBox && (
				<div className={Styles.showStoryBox}>
					<span className={Styles.closeBtn}>
						<AiFillCloseCircle onClick={closeStory} color={'gold'} size={22} />
					</span>
					<Image
						width={2000}
						height={1000}
						layout='responsive'
						src={stories[activeStoryIndex].imageUrl}
						alt={`Story ${activeStoryIndex + 1}`}
						className={Styles.storyShowImage}
					/>
				</div>
			)}
		</>
	)
}

export default StoryComponent
