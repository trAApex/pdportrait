import React from "react";
import RBCarousel from "react-bootstrap-carousel";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

import './Carousel.css';


class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
    rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
    this.setState({ leftIcon, rightIcon });
  };
  render() {
    let { leftIcon, rightIcon } = this.state;
    return (
      <article>
        <div className="container-fluid example">
          <Row>
            
            <Col span={12}>
              <RBCarousel
                animation={true}
                autoplay={this.state.autoplay}
                slideshowSpeed={4000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r => (this.slider = r)}
                version={4}
              >
                <div>
                  <img
                    style={{ width: "100%", height: "70%" }}
                    src={require('../../images/001.jpg')}
                    alt={{}}
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%", height: "70%" }}
                    src={require('../../images/002.jpg')}
                    alt={{}}
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%", height: "70%" }}
                    src={require('../../images/003.jpg')}
                    alt={{}}
                  />
                </div>
                <div>
                  <img
                    style={{ width: "100%", height: "70%" }}
                    src={require('../../images/004.jpg')}
                    alt={{}}
                  />
                </div>
              </RBCarousel>
            </Col>
          </Row>
        </div>
      </article>
    );
  }
}

const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);

export default Carousel;