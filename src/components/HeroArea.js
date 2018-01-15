import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import '../reset.css';
import './HeroArea.css';

class HeroArea extends Component {
	  componentDidMount() {
 
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
 
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(700);
  }
  handleSetActive(to) {
    console.log(to);
  }
	render() {
		return (
				<div className="hero-area">	
					<section>
						<header>
							<h1>{this.props.title}</h1>
							<h2>{this.props.hook}</h2>
							<button className={'sign-up-button bot-left'} onClick={this.scrollToBottom}>Sign Up</button>
							<button className={'learn-more-button bot-left'} onClick={this.scrollTo}>Learn More</button>
							<h4><FontAwesome.FaAngleDoubleDown onClick={this.scrollTo}/></h4>
						</header>
					</section>
				</div>	
		);
	}
}

export default HeroArea;