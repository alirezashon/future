/** @format */

import { useState, useEffect } from 'react'
import Image from 'next/image'
const images = [
	'/1.jpeg',
	'/2.jpg',
 '/3.jpg',
]

const Carousel = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex((index) => (index + 1) % images.length)
		}, 3000)

		return () => clearInterval(intervalId)
	}, [])

	const handlePrevClick = () => {
		setCurrentImageIndex((index) =>
			index === 0 ? images.length - 1 : index - 1
		)
	}

	const handleNextClick = () => {
		setCurrentImageIndex((index) => (index + 1) % images.length)
	}

	return (
		<div style={{ position: 'relative', marginTop: '-19vh' }}>
			<Image
				src='/588.jpg'
				alt='My Image'
				width={1700}
				height={600}
			/>

			<div
				style={{
					position: 'absolute',
					top: '54.3%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					padding: '0.1rem',
					borderRadius: '0.5rem',
					color: 'white',
				}}>
				<Image
					width={2222}
					height={2222}
					style={{
						width: '213vh',
						height: '55.6vh',
						borderRadius: '19vh 1vh 18vh 1vh',
					}}
					src={images[currentImageIndex]}
					alt={`Image ${currentImageIndex}`}
				/>
				<div>
					<button onClick={handlePrevClick}>Prev</button>
					<button onClick={handleNextClick}>Next</button>
				</div>
			</div>
		</div>
	)
}

export default Carousel
