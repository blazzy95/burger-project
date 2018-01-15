import React from 'react';
import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SlideDrawer from '../Navigation/SlideDrawer/SlideDrawer';


const layout = (props) => (
	<Auxi>
		<Toolbar />
		<SlideDrawer/>
		<main className = {classes.Content}>
			{props.children}
		</main>
	</Auxi>
);

export default layout;