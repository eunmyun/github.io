// Page of quotes to show
import React from 'react';

// PageOne Component
var Resume = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div className="resume-section">
				<embed src="data/Resume.pdf" width="800px" height="1100px" />
			</div>
		);
	}
});

export default Resume;
