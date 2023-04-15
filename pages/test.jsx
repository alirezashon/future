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

// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// class DemoCarousel extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <div>
//                     <img src="/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="/me.jpg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="ali.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// }
// export default DemoCarousel

// import { useState } from 'react';

// const provinces = [
//   {
//     "id": 1,
//     "name": "آذربایجان شرقی",
//     "slug": "آذربایجان-شرقی"
//   },
//   {
//     "id": 2,
//     "name": "آذربایجان غربی",
//     "slug": "آذربایجان-غربی"
//   },
// ];

// const cities = [
//   {
//     "id": 1,
//     "name": "اسکو",
//     "slug": "اسکو",
//     "province_id": 1
//   },
//   {
//     "id": 2,
//     "name": "اهر",
//     "slug": "اهر",
//     "province_id": 1
//   },
//   {
//     "id": 84,
//     "name": "شوط",
//     "slug": "شوط",
//     "province_id": 2
//   },
//   {
//     "id": 85,
//     "name": "فیرورق",
//     "slug": "فیرورق",
//     "province_id": 2
//   },
// ];

// export default function CascadingSelectBox() {
//   const [selectedProvince, setSelectedProvince] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);

//   const handleProvinceChange = (event) => {
//     const provinceId = event.target.value;
//     setSelectedProvince(provinceId);

//     // Filter the cities based on the selected province
//     const filteredCities = cities.filter(city => city.province_id === parseInt(provinceId));

//     // If the selected province has cities, set the first city as the selected city
//     if (filteredCities.length > 0) {
//       setSelectedCity(filteredCities[0].id);
//     } else {
//       setSelectedCity(null);
//     }
//   };

//   const handleCityChange = (event) => {
//     const cityId = event.target.value;
//     setSelectedCity(cityId);
//   };

//   return (
//     <div>
//       <label htmlFor="province">استان:</label>
//       <select id="province" name="province" onChange={handleProvinceChange}>
//         <option value="">انتخاب کنید</option>
//         {provinces.map(province => (
//           <option key={province.id} value={province.id}>{province.name}</option>
//         ))}
//       </select>

//       <label htmlFor="city">شهر:</label>
//       <select id="city" name="city" onChange={handleCityChange} disabled={!selectedProvince}>
//         <option value="">انتخاب کنید</option>
//         {cities
//           .filter(city => city.province_id === parseInt(selectedProvince))
//           .map(city => (
//             <option key={city.id} value={city.id}>{city.name}</option>
//           ))
//         }
//       </select>

//       <p>استان انتخاب شده: {selectedProvince ? provinces.find(province => province.id === parseInt(selectedProvince)).name : 'هیچ'}</p>
//       <p>شهر انتخاب شده: {selectedCity ? cities.find(city => city.id === parseInt(selectedCity)).name : 'هیچ'}</p>
//     </div>
//   );
// }

// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// export default function App() {
// 	const notify = () => toast('Wow so easy!')

// 	return (
// 		<div>
// 			<button onClick={notify}>Notify!</button>
// 			<ToastContainer />
// 		</div>
// 	)
// }

// import React, { useState } from "react";
// import styles from "@/styles/test.module.css";

// const SpeedDial = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
// 		<div className={styles.menu}>
// 			<div className={styles.container}>
// 				<button
// 					className={styles.mainButton}
// 					onClick={toggleOpen}>
// 					+
// 				</button>
// 				{isOpen && (
// 					<div className={styles.itemsContainer}>
// 						<div className={styles.item}>
// 							<a className={styles.options} href='#'>1</a>
// 						</div>
// 						<div className={styles.item}>
// 							<a className={styles.options} href='#'>2</a>
// 						</div>
// 						<div className={styles.item}>
// 							<a className={styles.options} href='#'>3</a>
// 						</div>
// 						<div className={styles.item}>
// 							<a className={styles.options} href='#'>4</a>
// 						</div>
// 						<div className={styles.item}>
// 							<a className={styles.options} href='#'>5</a>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	)
// };

// export default SpeedDial;

// import React from 'react'
// import styles from '@/styles/test.module.css'

// export default function GoldBox() {
// 	const [currentPost, setCurrentPost] = React.useState(0)
// 	const posts = [
// 		{ index: 1, name: 'ali', imgSrc: '/me.jpg' },
// 		{ index: 2, name: 'alireza', imgSrc: '/me.jpg' },
// 		{ index: 3, name: 'alxi', imgSrc: '/me.jpg' },
// 		{ index: 1, name: 'alsai', imgSrc: '/me.jpg' },
// 		{ index: 2, name: 'alasdi', imgSrc: '/me.jpg' },
// 		{ index: 3, name: 'aliwe', imgSrc: '/me.jpg' },
// 		{ index: 1, name: 'alic', imgSrc: '/me.jpg' },
// 		{ index: 2, name: 'aliad', imgSrc: '/me.jpg' },
// 		{ index: 3, name: 'ali', imgSrc: '/me.jpg' },
// 	]
// 	const handleNext = () => {
// 		setCurrentPost((currentPost + 1) % posts.length)
// 	}

// 	const handlePrev = () => {
// 		setCurrentPost((currentPost - 1 + posts.length) % posts.length)
// 	}

// 	return (
// 		<div className={styles.box}>
// 			<div className={styles.postContainer}>
// 				{posts.map((post, index) => (
// 					<div
// 						key={index}
// 						className={`${styles.post} ${
// 							index === currentPost ? styles.current : ''
// 						}`}
// 						onClick={() => {
// 							setCurrentPost(index)
// 						}}>
// 						<img
// 							src={post.imgSrc}
// 							alt={post.name}
// 						/>
// 						<div className={styles.postDetails}>
// 							<div className={styles.postName}>{post.name}</div>
// 							<div className={styles.postPrice}>{post.price}</div>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 			<button
// 				className={styles.prevButton}
// 				onClick={handlePrev}>
// 				&lt;
// 			</button>
// 			<button
// 				className={styles.nextButton}
// 				onClick={handleNext}>
// 				&gt;
// 			</button>
// 		</div>
// 	)
// }

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cart/action'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const PostBox = () => {

	
	const ProductPage = () => {
		const [quantity, setQuantity] = useState(1)
		const dispatch = useDispatch()
	
		const handleAddToCart = () => {
			dispatch(removeFromCart(product.id))
			dispatch(addToCart(product, quantity))
			toast.success('محصول به سبد خرید اضافه شد')
		}

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
}
export default PostBox
