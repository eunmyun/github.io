// Page of quotes to show
import React from 'react';

// PageOne Component
var About = React.createClass({
	// Render a <Quote> element for each element in the state
	render() {
		return (
			<div className="about-section">
				<div className="prof-pic">

				</div>
				<div className="prof-desc">
					<p>Hi! My Name is Lucy. <br /> I am a developer with experiences with Java, HTML, CSS, JavaScript, and Swift.
					I am interested in working with client side web development, as well as with data structures.
					I am also open to learning and trying new things.
					Outside of my career interests, I love playing keyboards, riding bike, and walking.</p>
				</div>
			</div>
		);
	}
});

export default About;
