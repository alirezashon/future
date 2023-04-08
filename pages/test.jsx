/** @format */

import { useEffect, useRef } from 'react'
import styles from '../styles/test.module.css'

export default function MyComponent() {
	const elementRef = useRef()

	useEffect(() => {
		const element = elementRef.current
		const onScroll = () => {
			const top = element.getBoundingClientRect().top
			const height = window.innerHeight
			if (top < height && top > 0) {
				element.classList.add(styles.animate)
			} else {
				element.classList.remove(styles.animate)
			}
		}
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<div>
			<div
				ref={elementRef}
				className={styles.myElement}>
				My animated element
			</div>
		</div>
	)
}
