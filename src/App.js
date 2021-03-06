import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { getAllCategories, isUserLoggedIn, getInitialData } from "./actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Categories from "./containers/Categories";

function App() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLoggedIn());
		}
		dispatch(getAllCategories());
		dispatch(getInitialData());
	});

	return (
		<div className="App">
			<Switch>
				<PrivateRoute exact path="/" component={Home} />
				<PrivateRoute path="/products" component={Products} />
				<PrivateRoute path="/orders" component={Orders} />
				<PrivateRoute path="/categories" component={Categories} />

				<Route path="/signin" component={SignIn} />
				<Route path="/signup" component={SignUp} />
			</Switch>
		</div>
	);
}

export default App;
