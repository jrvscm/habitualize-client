import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BeatLoader } from 'react-spinners';
import './LoadingSpinner.css';


class LoadingSpinner extends Component {
  
  render() {
    return (

    <Grid fluid>
      <Row className={'fullHeight'}>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={4}>
              <div className='sweet-loading'>
                <BeatLoader
                  color={'#123abc'} 
                  loading={this.props.loading} 
                  margin={'10px'}
                  />
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default LoadingSpinner;