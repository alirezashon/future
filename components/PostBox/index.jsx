/** @format */

import { AiOutlineShoppingCart } from 'react-icons/ai'
import React, { useState, useEffect } from 'react'
import styles from '../../styles/components/PostBox/PostBox.module.css'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cart/action'
const posts = [
	{
		id: 1,
		title: 'Post 1',
		description: 'Description of Post 1',
		price: 10,
		photo: '/123.jpg',
	},
	{
		id: 2,
		title: 'Post 2',
		description: 'Description of Post 2',
		price: 20,
		photo: '/124.jpg',
	},
	{
		id: 3,
		title: 'Post 3',
		description: 'Description of Post 3',
		price: 30,
		photo: '/127.jpg',
	},
	{
		id: 6,
		title: 'Post 1',
		description: 'Description of Post 1',
		price: 10,
		photo: '/128.jpg',
	},
	{
		id: 5,
		title: 'Post 2',
		description: 'Description of Post 2',
		price: 20,
		photo: '/124.jpg',
	},
	{
		id: 4,
		title: 'Post 3',
		description: 'Description of Post 3',
		price: 30,
		photo: '/123.jpg',
	},
]

const PostBox = () => {

		const [quantity, setQuantity] = useState(1)
		const dispatch = useDispatch()

		const handleAddToCart = () => {
			dispatch(removeFromCart(posts.id))
			dispatch(addToCart(posts, quantity))
			toast.success('محصول به سبد خرید اضافه شد')
		}

	

	const [count, setCount] = useState(0)
	const [selectedPostId, setSelectedPostId] = useState(null)

	const incrementCount = (postId) => {
		if (selectedPostId === postId) {
			setCount(count + 1)
		} else {
			setCount(1)
			setSelectedPostId(postId)
		}
	}

	const decrementCount = (postId) => {
		if (count === 1) {
			setSelectedPostId(null)
		} else {
      setCount(count - 1)
			setSelectedPostId(postId)
		}
	}

	return (
		<div className={styles.container}>
			{posts.map((post) => (
				<div
					key={post.id}
					className={styles.card}>
					<img
						src={post.photo}
						alt={post.title}
						className={styles.photo}
					/>
					<div className={styles.content}>
						<h3 className={styles.title}>{post.title}</h3>
						<p className={styles.description}>{post.description}</p>
						<div className={styles.basketContainer}>
							<div
								className={styles.basketButton}
								onClick={() => incrementCount(post.id)}>
								{selectedPostId === post.id ? (
									<>
										<button
											className={styles.decrementButton}
											onClick={() => decrementCount(post.id)}>
											-
										</button>
										<div className={styles.count}>{count}</div>
										<button
											className={styles.incrementButton}
											onClick={() => incrementCount(post.id)}>
											+
										</button>
									</>
								) : (
									<AiOutlineShoppingCart />
								)}
							</div>
						</div>
						<button className={styles.price}>{`${post.price}`}</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default PostBox
