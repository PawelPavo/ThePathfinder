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
]

const App: React.FC<IAppProps> = () => {

	const [totalClicks, setTotalCliks] = useState(0)
	const [correctPathColor, steCorrectPathColor] = useState<any>('')

    const restartClick = () => {
        window.location.reload();
    }

	const handleCorrectClick = () => {
		console.log('Correct')
		steCorrectPathColor('red')
		setTotalCliks(totalClicks + 1)
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
	const handleInorrectClick = () => {
		console.log('Wrong')
		setTotalCliks(totalClicks + 1)
		steCorrectPathColor('')
	}

	function GamePlay(props: any) {
		if (props.tile == 1) {
			return (
				<div
					onClick={handleInorrectClick}
					className="box btn-primary rounded">
				</div>
			)
		} else {
			return (
				<div
					onClick={handleCorrectClick}
					style={{ background: correctPathColor }}
					className="box btn-primary rounded">
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
					<div className="grid">
						{mapData.map((tile) => (
							<GamePlay key={Math.random()} tile={tile} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export interface IAppProps { }
export default App;
