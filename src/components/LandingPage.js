import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import HeroArea from './HeroArea';
import InfoItem from './InfoItem';
import SignUpForm from './SignUpForm';
import Footer from './Footer';
import './LandingPage.css';

class LandingPage extends Component {
  render() {

    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (this.props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
    
    <Grid fluid> 
      <div className="landing-page-container">
        <Navbar />

        <HeroArea 
        title={'Habitualize'} 
        hook={'Track your habits. Crush your goals. Repeat'} 
        />

        <Row>
        <Col xs>
          <InfoItem 
          title={'Simple habit tracking'} 
          info={'Habitualize helps you track your habits so you can stay productive. Habit tracking trains your mind to instinctively do the things you find worthwhile.'}
          /> 
        </Col>

        <Col xs>
          <InfoItem 
          title={'Compete against yourself'} 
          info={'Custom streaks and user feedback push you to take your tracking to the next level. Beat your current streak and set personal records.'}
          /> 
        </Col>

        <Col xs>
          <InfoItem 
          title={'Track your progress'} 
          info={"Interactive charts and personalized statistics keep you motivated and let you know exactly how you're progressing."}
          /> 
        </Col>
        
      </Row>

          <SignUpForm />

          <Footer title={'Footer Stuff'} />
      </div>
    </Grid>      
    );
  }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);