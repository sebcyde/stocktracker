import React, { useState } from 'react';
import Portfolio from './SplashComponents/Portfolio/Portfolio';
import './SplashPage.css';

function SplashPage() {
	const [isDark, setisDark] = useState(false);

	return (
		<div className="SplashPage">
			{/* <Nav /> */}
			<button className="DarkToggle">Go Dark</button>
			<Portfolio />
		</div>
	);
}

export default SplashPage;
