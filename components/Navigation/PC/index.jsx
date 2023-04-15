/** @format */
import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/components/Navigation/pc.module.css'
import { useState, useEffect } from 'react'

const Menu = () => {
	const items = [
		{ label: 'محصولات', link: '/products' },
		{ label: 'سفارشی سازی', link: '/Customization' },
		{ label: 'هدیه', link: '/present' },
		{ label: 'تماس با ما', link: '/contact-us' },
		{ label: 'درباره ما', link: '/about-us' },
	]
	const dropdownItems = [
		{ label: 'گوشواره', link: '/rings' },
		{ label: 'دستبند', link: '/earrings' },
		{ label: 'گردنبند', link: '/necklaces' },
		{ label: 'انگشتر', link: '/bracelets' },
		{ label: 'پابند', link: '/watches' },
	]
	 const [isChecked, setIsChecked] = useState(false)

		const handleSwitch = () => {
			setIsChecked(!isChecked)
		}
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	const handleMouseLeave = () => {
		setIsOpen(false)
	}

	const [showDiv, setShowDiv] = useState(true)
	const [prevScrollPos, setPrevScrollPos] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset

			if (prevScrollPos > currentScrollPos-10) {
				setShowDiv(true)
			} else {
				setShowDiv(false)
			}

			setPrevScrollPos(currentScrollPos)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [prevScrollPos])

	return (
		<>
			<div
				className={`${styles.scrollingDiv} ${
					showDiv ? styles.show : styles.hide
				}`}>
				{items.map((menuItem, index) => (
					<Link
						key={menuItem.link}
						className={styles.link}
						href={menuItem.link}>
						<p className={styles.menuItem}>{menuItem.label}</p>
					</Link>
				))}

				<div className=''>
					<div className={styles.container}>
						<button
							className={styles.toggleButton}
							onMouseEnter={handleToggle}>
							نوع محصول
						</button>
						{isOpen && (
							<div
								className={styles.dropdown}
								onMouseLeave={handleMouseLeave}>
								{dropdownItems.map((dropdownItems, index) => (
									<Link
										key={dropdownItems.link}
										className={styles.link}
										href={dropdownItems.link}>
										<p className={styles.dropdownItem}>{dropdownItems.label}</p>
									</Link>
								))}
							</div>
						)}
					</div>
				</div>
				<div className={styles.switchWrapper}>
					<label className={styles.label}>نقره</label>

					<input
						type='checkbox'
						className={styles.switch}
						checked={isChecked}
						onChange={handleSwitch}
					/>
					<label className={styles.label}>طلا</label>
				</div>
			</div>
		</>
	)
}

export default Menu
