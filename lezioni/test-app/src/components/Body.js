import React from 'react';

function Body(){
	const name = "Michele"
	return(
		<main>
			<h1>BODY TITLE</h1>
			<p>Questo è il contenuto principale. Creato da {name}.</p>
			<p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet vehicula turpis, et dignissim est. Ut non turpis feugiat ipsum malesuada pulvinar vitae vel massa. Vivamus venenatis, lectus eget dignissim dapibus, velit nunc finibus purus, et finibus justo tellus vel nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ut velit eu purus placerat porttitor quis ac quam. Integer vel bibendum nunc. Sed at finibus nibh, quis dignissim tellus. Maecenas tristique augue nisi, at vestibulum metus porta sed. Cras malesuada dolor quis cursus gravida. Phasellus non posuere orci, in accumsan nisl. Morbi porta velit sed orci ornare mollis. Cras eget velit est. Donec vitae finibus velit. Vestibulum quis molestie nibh. Suspendisse id massa neque. Aenean nec enim id mauris cursus aliquet a id velit.</p>
			<ul>
				<li>Lista 1</li>
				<li>Lista 2</li>
				<li>Lista 3</li>
			</ul>
		</main>
	)
}

export default Body
