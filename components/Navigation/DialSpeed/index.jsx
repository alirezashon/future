/** @format */

import React, { useState } from 'react'
import styles from '../../../styles/components/Navigation/DialSpeed/DialSpeed.module.css'
import { HiMenu } from 'react-icons/hi'
import { set } from 'react-hook-form' 

const SpeedDial = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.menu}>
			<div className={styles.container}>
				<button
					className={styles.mainButton}
					onClick={toggleOpen}>
					<HiMenu />
				</button>
				{isOpen && (
					<div className={styles.itemsContainer}>
						<div className={styles.item}>
							<a
								className={styles.options}
								href='#'>
								1
							</a>
						</div>
						<div className={styles.item}>
							<a
								className={styles.options}
								href='#'>
								2
							</a>
						</div>
						<div className={styles.item}>
							<a
								className={styles.options}
								href='#'>
								3
							</a>
						</div>
						<div className={styles.item}>
							<a
								className={styles.options}
								href='#'>
								4
							</a>
						</div>
						<div className={styles.item}>
							<a
								className={styles.options}
								href='#'>
								5
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default SpeedDial
