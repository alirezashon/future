/** @format */

// /** @format */

// import { useEffect, useRef } from 'react'
// import styles from '../styles/test.module.css'

// export default function MyComponent() {
// 	const elementRef = useRef()

// 	useEffect(() => {
// 		const element = elementRef.current
// 		const onScroll = () => {
// 			const top = element.getBoundingClientRect().top
// 			const height = window.innerHeight
// 			if (top < height && top > 0) {
// 				element.classList.add(styles.animate)
// 			} else {
// 				element.classList.remove(styles.animate)
// 			}
// 		}
// 		onScroll()
// 		window.addEventListener('scroll', onScroll)
// 		return () => window.removeEventListener('scroll', onScroll)
// 	}, [])

// 	return (
// 		<div>
// 			<div
// 				ref={elementRef}
// 				className={styles.myElement}>
// 				My animated element
// 			</div>
// 		</div>
// 	)
// }

// import { useEffect, useRef } from 'react'
// import * as d3 from 'd3'

// const MyComponent = () => {
//   const svgRef = useRef(null)

//   useEffect(() => {
//     const svg = d3.select(svgRef.current)
// 	const data = [1,2,3,4,5]
//     const quarterWidth = 250
//     const quarterHeight = 250
//     const radius = 150
//     const angle = 2 * Math.PI / data.length

//     const centerX = 2.8 * quarterWidth
//     const centerY = quarterHeight / 2

//     const circles = svg
//       .selectAll('circle')
//       .data(data)
//       .enter()
//       .append('circle')
//       .attr('cx', (d, i) => centerX + radius * Math.cos(i * angle))
//       .attr('cy', (d, i) => centerY + radius * Math.sin(i * angle))
//       .attr('r', 30)
//       .style('fill', 'blue')
//       .style('stroke', 'red')
//       .style('stroke-width', '2px')

//     svg
//       .selectAll('circle')
//       .transition()
//       .duration(4000)
//       .attrTween('transform', function (d, i) {
//         return d3.interpolateString(
//           `rotate(0, ${centerX}, ${centerY})`,
//           `rotate(${i * (360 / data.length)}, ${centerX}, ${centerY})`
//         )
//       })
//   }, [])

//   return (
//     <svg ref={svgRef} width={1500} height={2500}>
//     </svg>
//   )
// }

// export default MyComponent

import styles from '@/styles/test.module.css'
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
				<div className={styles.carousel}>
					<div className={styles.imageWrapper}>
						{images.map((image, index) => (
							<img
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
