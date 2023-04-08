/** @format */
import React from 'react'
import Link from 'next/link'
import styles from '../../../styles/components/Navigation/pc.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Menu = () => {
	const items = [
		{ label: 'Rings', link: '/rings' },
		{ label: 'Earrings', link: '/earrings' },
		{ label: 'Necklaces', link: '/necklaces' },
		{ label: 'Bracelets', link: '/bracelets' },
		{ label: 'Watches', link: '/watches' },
	]
	const dropdownItems = [
		{ label: 'Rings', link: '/rings' },
		{ label: 'Earrings', link: '/earrings' },
		{ label: 'Necklaces', link: '/necklaces' },
		{ label: 'Bracelets', link: '/bracelets' },
		{ label: 'Watches', link: '/watches' },
	]
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

			if (prevScrollPos > currentScrollPos) {
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
			<header className={styles.header}>
				<div className={styles.leftContainer}>
					<Image
						width={111}
						height={77}
						className={styles.logo}
						src='/me.jpg'
						alt='Logo'
					/>
				</div>
				<div className={styles.rightContainer}>
					<form className={styles.searchContainer}>
						<input
							className={styles.searchInput}
							type='text'
							placeholder='Search...'
						/>
						<button
							className={styles.searchButton}
							type='submit'>
							search
						</button>
					</form>
				</div>
			</header>
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
							Toggle
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
			</div>
		</>
	)
}

export default Menu
