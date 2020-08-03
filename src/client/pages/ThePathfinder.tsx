//@ts-nocheck

import * as React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'

var mapData = [
	1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
	1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
	1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
	1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
]

let arrayOfArrays = []
for (let step = 0; step < mapData.length + 1; step = step + 10) {
	arrayOfArrays.push(mapData.slice(step, mapData.length + 1))
}
// console.log(arrayOfArrays)


const ThePathfinder: React.FC<IThePathfinderProps> = () => {

	const [totalClicks, setTotalCliks] = useState(0)
	const [rowIndex, setRowIndex] = useState(arrayOfArrays.length-2)

	const restartClick = () => {
		window.location.reload();
	}

	const [correctColor, setCorrectColor] = useState('success')

	const handleCorrectClick = () => {
		setTimeout(() => {
			setRowIndex(rowIndex - 1)
		}, 250)

		setCorrectColor('success')
		setTimeout(function () {
			setCorrectColor('primary')
		}, 100);
		if (rowIndex == 0) {
			setRowIndex(12)
			Swal.fire<unknown>({
				title: 'SO LUCKY!',
				text: 'You found the path...',
				imageUrl: 'https://news-api.s3.us-east-2.amazonaws.com/1595527001268.jpg',
				imageWidth: 300,
				imageHeight: 200,
				imageAlt: 'Custom image',
				timer: 5000,
				onClose: () => {
					restartClick()
				}
			})
		}
		setTotalCliks(totalClicks + 1)
	}
	const [color, setColor] = useState('primary')
	const handleInorrectClick = () => {
		console.log('Wrong')
		setTotalCliks(totalClicks + 1)
		setRowIndex(arrayOfArrays.length-2)
		setColor('danger')
		setTimeout(function () {
			setColor('primary')
		}, 100);
	}

	function GamePlay(props: any) {
		if (props.tile != 1) {
			return (
					<div
						onClick={handleCorrectClick}
						className={`box btn-${correctColor} rounded`}>
					</div >
			)
		} else {
			return (
				<div
					onClick={handleInorrectClick}
					className={`box btn-${color} rounded`}>
				</div>
			)
		}
	}

	return (
		<>
			<div className="container">
				<div className="row justify-content-center text-monospace">
					<h1>The Pathfinder</h1>
				</div>
				<div className="row d-flex justify-content-around mt-5 mb-2">
					<h4
						className="text-primary text-monospace my-auto">
						Total Guesses: {totalClicks}
					</h4>

				</div>
				<p className="text-warning text-monospace my-auto">Rows Left: {rowIndex + 1}</p>
				<div className="row justify-content-center">
					<div className="col-2 text-right display-4">&rarr;</div>
					<div className="col-10 ">
						<div className="grid" id="myId">
							{arrayOfArrays[rowIndex].map((tile) => (
								<GamePlay key={Math.random()} tile={tile} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}


export interface IThePathfinderProps { }
export default ThePathfinder;