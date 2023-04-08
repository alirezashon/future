/** @format */


import Image from 'next/image'
import { useState } from 'react'
import Styles from '../../styles/components/Story/Story.module.css'
const StoryComponent = () => {
	const [activeStoryIndex, setActiveStoryIndex] = useState(0)
	const [showStoryBox, setShowStoryBox] = useState(false)
	const [storySeen, setStorySeen] = useState(false)
	const stories = [
		{
			id: 1,
			imageUrl: '/ali.jpg',
		},
		{
			id: 1,
			imageUrl: '/ali.jpg',
		},
		{
			id: 2,
			imageUrl: '/me.jpg',
		},
		{
			id: 3,
			imageUrl: '/me.jpg',
		},
	]

	const handleStoryClick = (index) => {
		setActiveStoryIndex(index)
		setShowStoryBox(true)
		setStorySeen(false)

		setTimeout(() => {
			setShowStoryBox(false)
			setStorySeen(true)
			setActiveStoryIndex((prevIndex) => prevIndex + 1)
		}, 7000)
	}

	return (
		<>
			<div className={Styles.storyBox}>
				{stories.map((story, index) => (
					<div key={story.id}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '99px',
								height: '99px',
								borderRadius: '50%',
								margin: '10px',
								cursor: 'pointer',
								border: `2px solid ${
									activeStoryIndex === index
										? 'gold'
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
								style={{ width: '97%', height: '97%', borderRadius: '50%' }}
							/>
						</div>
					</div>
				))}
			</div>
			{showStoryBox && (
				<div
					className={Styles.showStoryBox}
					onClick={() => {
						setShowStoryBox(false)
					}}>
					<Image
						width={222}
						height={222}
						src={stories[activeStoryIndex].imageUrl}
						alt={`Story ${activeStoryIndex + 1}`}
						style={{ width: '100%', borderRadius: '10px' }}
					/>
				</div>
			)}
		</>
	)
}

export default StoryComponent
