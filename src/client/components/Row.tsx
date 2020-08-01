import React, { useState } from 'react';
import styled from 'styled-components';
import Tile from './Tile';

const Row = ({ tiles, gameRow, whichRow, ...rest }) => {
	const [rowDim, setRowDim] = useState(false);

	return (
		<GameRow gameRow={gameRow} whichRow={whichRow}>
			{tiles.map((tile, i) => (
				<Tile
					key={`col-${i}`}
					tile={tile}
					rowDim={rowDim}
					gameRow={gameRow}
					whichRow={whichRow}
					setRowDim={setRowDim}
					{...rest}
				/>
			))}
		</GameRow>
	);
};

const GameRow = styled.div`
	display: flex;
	justify-content: center;
	padding: 5px 10px;
	${({ gameRow, whichRow }) =>
		gameRow === whichRow &&
		`
	background-color: #4fd1c5;
	border: 1px solid #234e52;
	border-radius: 5px;
`}
`;

export default Row;