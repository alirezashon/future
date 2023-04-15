/** @format */

import React, { useRef, useState, useEffect } from 'react'
import * as d3 from 'd3'
 
const index = () => {
	const [issues, setIssues] = useState([1,2,3,4,5,6,7,8,9,10])
	const [project, setProject] = useState([1,2,3,4 ,3,32,1,213,123,13,])
  	const svgRef = useRef(null)

	 

	useEffect(() => {
		const svg = d3.select(svgRef.current)

		const { width, height } = svg.node().getBoundingClientRect()
		const quarterWidth = width / 4
		const quarterHeight = height / 4
		// STAR----------------------------------------------------------------SELECTOR----------------------------------------------------------------

		const radius = 133
		const angle = (2 * Math.PI) / project.length

		//------------------TREE--CODES----------------------------------------------------------------
		const x1 = quarterWidth / 2.8
		const x2 = quarterWidth * 1.3
		const projectRectWidth = 150
		const projectRectHeight = 50
		let paddingY = 40
		let lineY1 = 40
		let lineY2 = 40
		function generateSequence(n, arr) {
			if (n === 0) return arr
			const last = arr[arr.length - 1]
			const next = last === 1 ? 2 : 1
			return generateSequence(n - 1, [...arr, next])
		}
		const numberOfIssues = issues.length
		const treeData = generateSequence(numberOfIssues, [])

		const projectKey = svg
			.append('rect')
			.attr('x', quarterWidth - projectRectWidth / 2)
			.attr('y', 27)
			.attr('width', projectRectWidth)
			.attr('height', projectRectHeight)
			.attr('rx', 11)
			.attr('ry', 11)
			.style('fill', 'none')
			.style('stroke', '#499b01')
			.style('stroke-width', '2px')
			.style('fill', '#FFFFFF')

		svg
			.append('text')
			.attr('x', quarterWidth)
			.attr('y', 50)
			.attr('text-anchor', 'middle')
			.attr('alignment-baseline', 'middle')
			.text('alireza')
			.attr('fill', 'darkgreen')
			.style('cursor', 'pointer')

		// ----------------خط وسط ----------------
		const treeItems = svg.append('g')

		const centerline = treeItems
			.selectAll('line')
			.data(issues)
			.enter()
			.append('line')
			.transition()
			.duration(500)
			.attr('x1', quarterWidth)
			.attr('x2', quarterWidth)
			.attr('y1', 77)
			.attr('y2', (d) => {
				if (issues.length < 3) {
					return 110
				} else if (issues.length % 2 === 0) {
					return ((issues.length - 1) / 2) * 70 + 77
				} else {
					return ((issues.length - 1) / 2) * 70 + 110
				}
			})
			.attr('stroke', '#a5cd39')
			.attr('stroke-width', 2)

		const treeLines = svg
			.append('g')
			.selectAll('line')
			.data(treeData)
			.enter()
			.append('line')
			.transition()
			.duration(500)
			.attr('x1', quarterWidth)
			.attr('x2', (d, i) => (i % 2 === 0 ? x1 + projectRectWidth : x2))
			.attr('y1', (d, i) => {
				if (i % 2 === 0) {
					lineY1 += 70
					return lineY1
				}
				return lineY1
			})
			.attr('y2', (d, i) => {
				if (i % 2 === 0) {
					lineY2 += 70
					return lineY2 + projectRectHeight / 2
				}
				return lineY2 + projectRectHeight / 2
			})
			.attr('id', 'ali')
			.attr('stroke', '#499b01')
			.attr('stroke-width', 2)

		// ---------------RECTS-------------

		const rects = treeItems
			.selectAll('rect')
			.data(treeData)
			.enter()
			.append('rect')
			.transition()
			.duration(500)
			.attr('x', (d, i) => (i % 2 === 0 ? x1 : x2))
			.attr('y', (d, i) => {
				if (i % 2 === 0) {
					paddingY += 70

					return paddingY
				}

				return paddingY
			})
			.attr('width', projectRectWidth)
			.attr('height', projectRectHeight)
			.attr('rx', 11)
			.style('fill', '#FFFFFF')
			.style('stroke', '#a5cd39')
			.style('stroke-width', '3px')

		paddingY = 40

		const texts = treeItems
			.selectAll('text')
			.data(issues)
			.enter()
			.append('text')
			.attr('x', (d, i) =>
				i % 2 === 0 ? x1 + projectRectWidth / 2 : x2 + projectRectWidth / 2
			)
			.attr('y', (d, i) => {
				if (i % 2 === 0) {
					paddingY += 70
					return paddingY + projectRectHeight / 2
				}

				return paddingY + projectRectHeight / 2
			})
			.attr('text-anchor', 'middle')
			.attr('alignment-baseline', 'middle')
			.text((d, i) => d.key)
			.attr('fill', 'darkgreen')
			.style('cursor', 'pointer')
			.style('opacity', 0)
		 
		d3.range(10).forEach((i) => {
			setTimeout(() => {
				texts.style('opacity', 0.1 * i)
			}, i * 110)
		})

	}, [issues,  project])

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
