/** @format */
import Image from 'next/image'
import React from 'react'
import Styles from '../../styles/components/Post/Post.module.css'
const JewelryShop = () => {
	const jewelryItems = [
		{
			id: 1,
			title: 'Diamond Earrings',
			category: 'Earrings',
			price: 500,
			image: '/me.jpg',
		},
		{
			id: 2,
			title: 'Gold Necklace',
			category: 'Necklaces',
			price: 800,
			image: '/ali.jpg',
		},
		{
			id: 1,
			title: 'Diamond Earrings',
			category: 'Earrings',
			price: 500,
			image: '/me.jpg',
		},
		{
			id: 2,
			title: 'Gold Necklace',
			category: 'Necklaces',
			price: 800,
			image: '/ali.jpg',
		},
		{
			id: 1,
			title: 'Diamond Earrings',
			category: 'Earrings',
			price: 500,
			image: '/me.jpg',
		},
		{
			id: 2,
			title: 'Gold Necklace',
			category: 'Necklaces',
			price: 800,
			image: '/ali.jpg',
		},

		// Add more items as needed
	]

	return (
		<div className={Styles.postBox}>
			{jewelryItems.map((item) => (
				<div
					key={item.id}
					className={Styles.postcard}>
					<Image
						width={222}
						height={222}
						src={item.image}
						alt={item.title}
						className={Styles.postcardImage}
					/>
					<div className={Styles.postcardDetails}>
						<h3 className={Styles.postcardTitle}>{item.title}</h3>
						<p className={Styles.postcardCategory}>{item.category}</p>
						<p className={Styles.postcardPrice}>${item.price}</p>
						<input
							type='submit'
							value='+'
						/>
						<input
							type='submit'
							value='-'
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default JewelryShop
