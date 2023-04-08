/** @format */

import Box from './Box.jsx'

const products = [
	{
		id: 1,
		image: '/me.jpg',
		title: 'Product 1',
		description: 'This is a cute product!',
		price: 10.99,
	},
	{
		id: 2,
		image: '/ali.jpg',
		title: 'Product 2',
		description: 'This is another cute product!',
		price: 15.99,
	},
]

const Shop = () => {
	return (
		<div>
			{products.map((product) => (
				<Box
					key={product.id}
					image={product.image}
					title={product.title}
					description={product.description}
					price={product.price}
				/>
			))}
		</div>
	)
}

export default Shop
