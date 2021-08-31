import React from 'react'
import PropTypes from 'prop-types'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../components/exhibition.css'

const Exhibition = ({ className, title, description }) => (
  <div className={className}>
    <div className="exhibition__container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="exhibition__title">
            <h1>{title}</h1>
          </div>
          <div className="exhibition__description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="exhibition__content">
        <AwesomeSlider>
          <div className="columns container">
            <div className="column is-10 is-offset-1">
              <div>1</div>
            </div>
          </div>
          <div className="columns container">
            <div className="column is-10 is-offset-1">
              <div>2</div>
            </div>
          </div>
          <div className="columns container">
            <div className="column is-10 is-offset-1">
              <div>3</div>
            </div>
          </div>
          <div className="columns container">
            <div className="column is-10 is-offset-1">
              <div>4</div>
            </div>
          </div>
        </AwesomeSlider>
      </div>
    </div>
  </div>
)

Exhibition.propTypes = {
  Exhibition: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Exhibition