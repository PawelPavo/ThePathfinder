//@ts-nocheck
import React, { useState } from 'react';
import styled from 'styled-components';

const Tile = ({ tile, rowDim, setRowDim, gameRow, whichRow, dispatch }) => {
	const [hitOrMiss, setHitOrMiss] = useState(null);
	const [clicked, setClicked] = useState(false);

	const tileClick = e => {
		if (clicked || rowDim || gameRow !== whichRow) return;
		if (Number(e.target.id) === 0) {
			setHitOrMiss('right');
			setRowDim(true);
			dispatch({ type: 'RIGHT' });
			dispatch({ type: 'DISABLE' });
		} else {
			setHitOrMiss('wrong');
			dispatch({ type: 'WRONG' });
			dispatch({ type: 'DISABLE' });
		}
		setClicked(true);
	};

	return <TileStyle hitOrMiss={hitOrMiss} rowDim={rowDim} onClick={tileClick} id={tile} />;
};

const TileStyle = styled.div`
-webkit-box-shadow: inset 1px 1px 5px #333;
-moz-box-shadow:    inset 1px 1px 5px #333;
box-shadow:         inset 1px 1px 5px #333;
	border: 1.5px solid black;
	border-radius: 5px;
	box-sizing: border-box;
	height: 25px;
	width: 25px;
	margin: 0px 3px;
	@media (min-width: 768px) {
		height: 50px;
		width: 50px;
		margin: 0px 2px;
	}
	${({ hitOrMiss }) => {
		switch (hitOrMiss) {
			case null:
				return 'background-color: #375e97;';
			case 'right':
				return 'background-color: #3f681c !important;';
			case 'wrong':
				return 'background-color: #8d230f !important;';
		}
	}}
	${({ rowDim }) => rowDim && 'background-color: #4a5568;'}
`;

export default Tile;