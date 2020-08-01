import { makeGrid } from './make-grid';

export const initialState = {
	incorrect: 0,
	correct: 0,
	gameRow: 0,
	disabled: false,
	grid: makeGrid({ rows: 10, cols: 10 })
};

export const countReducer = (state, action) => {
	switch (action.type) {
		case 'RIGHT':
			return { ...state, correct: state.correct + 1, gameRow: state.gameRow + 1 };
		case 'WRONG':
			return { ...state, incorrect: state.incorrect + 1 };
		case 'GRID_CHANGE':
			return {
				...state,
				grid: makeGrid({ rows: action.payload.rows, cols: action.payload.cols })
			};
		case 'DISABLE':
			return { ...state, disabled: true };
		default:
			return state;
	}
};