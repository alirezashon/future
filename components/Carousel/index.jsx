import styles from '../../styles/components/Carousel/Carosoul.module.css'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Carousel = () => {
	const images = [{ src: '/1.jpeg' }, { src: '/2.jpg' }, { src: '/3.jpg' }]
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((currentIndex + 1) % images.length)
		}, 4000)
		return () => clearInterval(interval)
	}, [currentIndex, images.length])

	const handleImageClick = (index) => {
		setCurrentIndex(index)
	}

	return (
		<div style={{ position: 'relative', marginTop: '-19vh' }}>
			<Image
				src='/585.jpg'
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
				<div className={styles.carousel}>
					<div className={styles.imageWrapper}>
						{images.map((image, index) => (
							<Image
								width={ 2000}
								height={2000}
								key={index}
								src={image.src}
								alt={`Image ${index + 1}`}
								className={`${styles.image} ${
									index === currentIndex ? styles.active : ''
								}`}
								onClick={() => handleImageClick(index)}
							/>
						))}
						<div className={styles.circleWrapper}>
							{images.map((image, index) => (
								<div
									key={index}
									className={`${styles.circle} ${
										index === currentIndex ? styles.active : ''
									}`}
									onClick={() => handleImageClick(index)}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Carousel
