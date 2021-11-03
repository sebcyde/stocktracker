import React, { useState } from 'react';
import LeftSection from './SplashComponents/LeftSection/LeftSection';
import RightSection from './SplashComponents/RightSection/RightSection';
import './SplashPage.css';

function SplashPage() {
	const [isDark, setisDark] = useState(false);

	return (
		<div className="SplashPage">
			{/* <Nav /> */}
			<button className="DarkToggle">Go Dark</button>
			<LeftSection />
			<RightSection />
		</div>
	);
}

export default SplashPage;
