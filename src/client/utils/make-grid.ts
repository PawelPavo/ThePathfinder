export const makeGrid = ({ rows, cols }) => {
	const grid = [];

	let plusOrMinusOrZero,
		seed = Math.floor(Math.random() * cols);

	for (let i = 0; i < rows; i++) {
		let row = Array(cols).fill(1);
		let random = Math.random();

		if (random < 0.33) {
			plusOrMinusOrZero = -1;
		} else if (random > 0.33 && random < 0.66) {
			plusOrMinusOrZero = 0;
		} else if (random > 0.66 && random < 0.99) {
			plusOrMinusOrZero = 1;
		}

		if (i === 0) {
			row[seed] = 0;
			grid.push(row);
		} else {
			seed += plusOrMinusOrZero;

			if (seed > cols - 1) {
				let backOneOrTwo = Math.random() > 0.55 ? -1 : -2;
				seed += backOneOrTwo;
			} else if (seed < 0) {
				let nextOneOrTwo = Math.random() > 0.55 ? 1 : 2;
				seed += nextOneOrTwo;
			}

			row[seed] = 0;
			grid.push(row);
		}
	}

	// console.log(grid);

	return grid;
};