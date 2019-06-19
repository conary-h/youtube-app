import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { setTime, setDate } from '../actions/timeDateActions';

class TimeWidget extends Component {

  componentDidMount() {
    this.props.setTime();
    this.props.setDate();
    this.timer = window.setInterval(() => this.props.setTime(), 30000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <Fragment>
        <div className="time-widget ib">
          <div className="info">
            <big className="hour">{this.props.time}</big>
            <span className="date">{this.props.date}</span>
          </div>
          <div className="red-bar" />
        </div>
      </Fragment>
    )
  }
}


const mapStateToProps = state => ({
  time: state.dateTime.time,
  date: state.dateTime.date
});
const mapDispatchToProps = dispatch => {
  return {
    setTime: () => dispatch(setTime()),
    setDate: () => dispatch(setDate()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TimeWidget);