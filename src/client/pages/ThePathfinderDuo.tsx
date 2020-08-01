import React, { useReducer, useState, useLayoutEffect } from 'react';
import { countReducer, initialState } from '../utils/count-reducer';
import styled from 'styled-components';
import Row from '../components/Row';

const ThePathfiderDuo = () => {
	const [state, dispatch] = useReducer(countReducer, initialState);
	const [counts, setCounts] = useState({
		rows: 10,
		cols: 10
	});
	const [disabled, setDisabled] = useState(false);

	const handleChange = e => {
		e.persist();
		setCounts(state => ({ ...state, [e.target.name]: Number(e.target.value) }));
	};

	useLayoutEffect(() => {
		dispatch({ type: 'GRID_CHANGE', payload: counts });
	}, [counts]);

	return (
		<Layout>
			<Totals>
				<Menu>
					<Flexed>
						{!state.disabled ? (
							<SmallText>{counts.rows} / 20 rows</SmallText>
						) : (
							<LockedIn>{counts.rows} rows</LockedIn>
						)}
						<input
							disabled={state.disabled}
							type="range"
							name="rows"
							value={counts.rows}
							onChange={handleChange}
							min="5"
							max="20"
						/>
					</Flexed>
					<Flexed>
						{!state.disabled ? (
							<SmallText>{counts.cols} / 20 cols</SmallText>
						) : (
							<LockedIn>{counts.cols} cols</LockedIn>
						)}
						<input
							disabled={state.disabled}
							type="range"
							name="cols"
							value={counts.cols}
							onChange={handleChange}
							min="5"
							max="20"
						/>
					</Flexed>
				</Menu>
				<Menu>
					<h5>
						Total Correct: <Correct>{state.correct}</Correct>
					</h5>
					<h5>Total Guesses: {state.correct + state.incorrect}</h5>
					<h5>
						Total Wrong: <Incorrect>{state.incorrect}</Incorrect>
					</h5>
				</Menu>
			</Totals>
			{state.grid.slice(0, counts.rows).map((row, i) => (
				<Row
					key={`row-${i}`}
					whichRow={i}
					colCount={counts.cols}
					gameRow={state.gameRow}
					tiles={row}
					dispatch={dispatch}
				/>
			))}
		</Layout>
	);
};

const Layout = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	font-family: Arial, Helvetica, sans-serif;
`;

const Totals = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-bottom: 2px solid black;
	margin-bottom: 10px;
	min-width: 50vw;
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Flexed = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
`;

const SmallText = styled.small`
	margin: 0 0 10px 0;
`;

const LockedIn = styled.small`
	margin: 0 0 10px 0;
	font-weight: 900;
`;

const Correct = styled.span`
	color: #2f855a;
`;

const Incorrect = styled.span`
	color: #9b2c2c;
`;

export default ThePathfiderDuo;