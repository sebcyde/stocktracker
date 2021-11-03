import React from 'react';
import PortfolioList from '../Portfolio';

function PortfolioItems() {
	return (
		<div>
			{PortfolioList.map((ListItems) => {
				return (
					<div className="PortfolioListItem">
						<h2>{ListItems.name}</h2>
						<h3></h3>
					</div>
				);
			})}
		</div>
	);
}

export default PortfolioItems;
