/** @format */

import React, { useContext, useState } from 'react'
import { BasketContext } from './Context'
import Image from 'next/image'

function Product({ id, name, price, image }) {
	const [quantity, setQuantity] = useState(1)
	const { addItemToBasket } = useContext(BasketContext)

	const handleAddToBasket = () => {
		addItemToBasket({ id, name, price, quantity })
		setQuantity(1)
	}

	return (
		<div className='product-post'>
			<Image
				src={image}
				alt={name}
				width={222}
				height={222}
			/>
			<h3>{name}</h3>
			<p>${price}</p>
			<div className='quantity-controls'>
				<button onClick={() => setQuantity(quantity - 1)}>-</button>
				<span>{quantity}</span>
				<button onClick={() => setQuantity(quantity + 1)}>+</button>
			</div>
			<button onClick={handleAddToBasket}>Add to Basket</button>
		</div>
	)
}

export default Product
