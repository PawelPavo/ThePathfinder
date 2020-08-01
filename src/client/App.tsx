
import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation'
import Pathfinder from './pages/ThePathfinder'
import PathfinderDue from './pages/ThePathfinderDuo'

const App: React.FC<IAppProps> = () => {

	return (
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path="/">
					{/* <Home /> */}
				</Route>
				<Route exact path="/pathfinder">
					<Pathfinder />
				</Route>
				<Route exact path="/pathfinder-duo">
					<PathfinderDue />
				</Route>
				<Route exact path="/login">
					{/* <Login /> */}
				</Route>
				<Route exact path="/register">
					{/* <Register /> */}
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export interface IAppProps { }

export default App;