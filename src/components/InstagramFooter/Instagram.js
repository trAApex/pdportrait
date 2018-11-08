import React from 'react';
import axios from 'axios';

import InstaImages from './InstaImage'

class Instagram extends React.Component {
	state = {
		images: [],
	};

	componentDidMount() {
		let token = '816875505.8b29e84.5740556eb37841a59f820a81394a6508';
		let num_photos = 10;

			
		axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
			.then(res => {
				this.setState({ images: res.data.data });
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return(
			<article>
				<div className="container">
					{ 
						this.state.images.map((image, i) => {
							return (
								<InstaImages 
									key={i}
									image={image.images.thumbnail.url}
									link={image.link}
								/>
							);
						})
					}
				</div>
			</article>
		)								
	}
}

export default Instagram;