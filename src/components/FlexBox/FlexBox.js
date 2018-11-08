import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './FlexBox.css';

class FlexBox extends Component {
  render() {
    return (
			<article>
				<div className="container">  
					<Grid>
						<Row className="">
							<Col md={3} mdPull={3}></Col>
							<Col md={6} mdPull={6}>
								<div className="icons1">
										<div className="content">
											<div className="availability">Elérhetőségek</div>
										</div>
											<ul className="first">
												<li className="facebook">
													<a href="https://www.facebook.com/daniel.pitlik.9" target="_blank" rel="noopener noreferrer"><img src={require('../../images/facebook.png')} alt={'facebook'}/></a>
												</li>
												<li className="instagram">
													<a href="https://www.instagram.com/pitlikdanifoto/" target="_blank" rel="noopener noreferrer"><img src={require('../../images/instagram.png')} alt={'instagram'}/></a>
												</li>
												<li className="gmail">
													<a href="mailto:pitlikdani@gmail.com" target="_blank" rel="noopener noreferrer"><img src={require('../../images/gmail.png')} alt={'gmail'}/></a>
												</li>
												<li className="telephone">
													<a href="tel:06307912552"><img src={require('../../images/phone.png')} alt={'telephone'}/></a>
												</li>
												<li className="viber">
													<a href="tel:06307912552"><img src={require('../../images/viber.png')} alt={'viber'}/></a>
												</li>
											</ul>
								</div>
							</Col>
							<Col md={3} mdPull={3}></Col>
						</Row>
					</Grid>
				</div>
			</article>
    );
  }
}

export default FlexBox;