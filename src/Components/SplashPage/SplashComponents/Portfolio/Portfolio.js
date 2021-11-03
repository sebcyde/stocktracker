import React, { useState } from 'react';
import axios from 'axios';

function Portfolio() {
	const PortfolioList = [];
	const [SearchTerm, setSearchTerm] = useState('');

	function SearchTickers(event) {
		event.preventDefault();
		console.log(SearchTerm);
		axios
			.get(`https://api.coingecko.com/api/v3/coins/${SearchTerm}`)
			.then((response) => {
				console.log(response.data);
				return (
					<div className="Response">
						<h1>{Response.data.name}</h1>
					</div>
				);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	return (
		<div>
			<form>
				<input
					placeholder="Search"
					type="text"
					className="PortSearchBar"
					onChange={(event) => {
						setSearchTerm(event.target.value);
					}}
				></input>
				<button type="submit" onClick={SearchTickers}>
					Go
				</button>
			</form>
		</div>
	);
}

export default Portfolio;
