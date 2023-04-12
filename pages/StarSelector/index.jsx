/** @format */

import React, { useState, useRef, useEffect } from 'react'
import * as d3 from 'd3'

const index = () => {
	const svgRef = useRef(null)
	const project = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

	useEffect(() => {
		const svg = d3.select(svgRef.current)
		const { width, height } = svg.node().getBoundingClientRect()
		const quarterWidth = width / 4
		const quarterHeight = height / 4
		const radius = 133
		const angle = (2 * Math.PI) / project.length

		function generateSequence(n, arr) {
			if (n === 0) return arr
			const last = arr[arr.length - 1]
			const next = last === 1 ? 2 : 1
			return generateSequence(n - 1, [...arr, next])
		}

		// -----------------Star--------Selector ----------------
		//  ایجاد اولیه خطوط برای عدم نمایش داخل دایره اصلی
		const lines = svg.append('g').selectAll('line').data(project).enter()

		// ایجاد دایره اصلی و پیوست تصویر به آن
		const userImg = svg
			.append('defs')
			.append('clipPath')
			.attr('id', 'circle-clips')
			.append('circle')
			.attr('cx', 2.8 * quarterWidth)
			.attr('cy', quarterHeight / 2)
			.attr('r', 30)
			.attr('id', 'image')

		const userImgBox = svg
			.append('g')
			.attr('clip-path', 'url(#circle-clips)')
			.append('image')
			.attr('href', '/me.jpg')
			.attr('x', 2.8 * quarterWidth - 30)
			.attr('y', quarterHeight / 2 - 30)
			.attr('width', 60)
			.attr('height', 60)

		// فراخوانی خطوط
		lines
			.append('line')
			.attr('x1', 2.8 * quarterWidth)
			.attr('x2', 2.8 * quarterWidth)
			.attr('y1', quarterHeight / 2)
			.attr('y2', quarterHeight / 2)
			.transition()
			.duration(2222)
			.attr('x1', 2.8 * quarterWidth)
			.attr('x2', (d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle))
			.attr('y1', quarterHeight / 2)
			.attr('y2', (d, i) => quarterHeight / 2 + radius * Math.sin(i * angle))
			.attr('fill', 'none')
			.attr('stroke', '#a5cd39')
			.attr('stroke-width', 2)

		const projectsBox = svg
			.append('g')
			.selectAll('circle')
			.data(project)
			.enter()
			.append('circle')
			.attr('cx', (d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle))
			.attr('cy', (d, i) => quarterHeight / 2 + radius * Math.sin(i * angle))
			.attr('r', 22)
			.style('fill', '#FFFFFF')
			.style('stroke', '#a5cd39')
			.style('stroke-width', '3px')
			.attr('opacity', 0.2)

		projectsBox
			.transition()
			.duration(1800)
			.attrTween('transform', function (d, i) {
				return d3.interpolateString(
					`rotate(${i * (360 / project.length)}, ${2.8 * quarterWidth}, ${
						quarterHeight / 2
					})`,
					`rotate(${i * (0 / project.length) + 360}, ${2.8 * quarterWidth}, ${
						quarterHeight / 2
					})`
				)
			})

		setTimeout(() => {
			projectsBox.style('opacity', 1)
		}, 777)

		const projectsName = svg
			.append('g')
			.selectAll('text')
			.data(project)
			.enter()
			.append('text')
			.attr('x', (d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle))
			.attr('y', (d, i) => quarterHeight / 2 + radius * Math.sin(i * angle))
			.attr('text-anchor', 'middle')
			.attr('alignment-baseline', 'middle')
			.text((d) => d)
			.style('cursor', 'pointer')
			.style('opacity', 0)
	}, [])

	return (
		<>
			<svg
				ref={svgRef}
				width='100%'
				height='300vh'></svg>
		</>
	)
}

export default index
