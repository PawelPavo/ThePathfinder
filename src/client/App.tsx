//@ts-ignore
import * as React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2'

var mapData = [
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
]

// let winningTiles = []
// for (let step = 10; step < 101; step = step + 10) {
// 	winningTiles.push(mapData.slice(mapData.length - step, mapData.length).indexOf(0))
// }
// console.log(winningTiles)

let arrayOfArrays = []
for (let step = 0; step < mapData.length + 1; step = step + 10) {
	arrayOfArrays.push(mapData.slice(step, mapData.length + 1))
}
console.log(arrayOfArrays)


const App: React.FC<IAppProps> = () => {

	const [totalClicks, setTotalCliks] = useState(0)
	const [rowIndex, setRowIndex] = useState(12)

	const restartClick = () => {
		window.location.reload();
	}

	const [correctColor, setCorrectColor] = useState('primary')

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
		//========================
		// var x = document.getElementById("myId").querySelectorAll(".box");
		// var res = (x[95].innerHTML = '2')
		// e.target.innerHYML = res
		// console.log(e.target.innerHTML)
		// 	if (e.target.innerHTML == 2) {
		// 		('how do i manipulate the dom in react now?')
		// 	}

		//=============================

		console.log('correct')
		// steCorrectPathColor('green')
		setTotalCliks(totalClicks + 1)
	}
	const [color, setColor] = useState('primary')
	const handleInorrectClick = () => {
		console.log('Wrong')
		setTotalCliks(totalClicks + 1)
		setRowIndex(12)
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
				<div className="row justify-content-center">
				<div className="col-2 text-right display-4">&rarr;</div>
					<div className="col-10">
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


export interface IAppProps { }
export default App;
