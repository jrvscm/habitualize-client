import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { DropdownList } from 'react-widgets';
import { 
	setCloseModal, SET_CLOSE_MODAL,
	createNewHabitRequest		
	} from '../actions/index';
import Input from './input';
import moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import {required, nonEmpty} from '../validators';
import './HabitForm.css';
import 'react-widgets/dist/css/react-widgets.css';

export class HabitForm extends React.Component {
    onSubmit(values) {
    	this.props.dispatch(createNewHabitRequest(values, this.props.authToken, this.props.currentUser));
    	this.props.dispatch(setCloseModal());
    }

    render() {

    	momentLocalizer(moment);

    	const numbers = [];

    	for(let i=0; i<=100; i++) {
    		numbers.push(i);
    	}

    	const logData = ["Per Day", "Per Week", "Per Month"];

    	const renderDropdownList = ({ input, data, valueField, textField }) =>
  			<DropdownList {...input}
  			dropUp
    		data={data}
    		valueField={valueField}
    		textField={textField}
    		onChange={input.onChange} />

    	const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
  			<DateTimePicker
    		onChange={onChange}
    		format="DD MMM YYYY"
    		time={showTime}
    		value={!value ? null : new Date(value)} />

        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="habit-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="habitTitle">Habit Title</label>
                <Field
                    component={Input}
                    type="text"
                    name="habitTitle"
                    id="habitTitle"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="habitStartDate">Start Date</label>
          			  <Field
          				name="habitStartDate"
          				showTime={false}
          				component={renderDateTimePicker}
        		/>
                <label id="goodHabitRadioLabel" htmlFor="goodHabitRadio">Good
                <Field
                    component={Input}
                    type="radio"
                    name="goodOrBadRadio"
                    id="goodHabitRadio"
                    value="good"
                />
                </label>
                <label id="badHabitRadioLabel" htmlFor="badHabitRadio">Bad
                <Field
                    component={Input}
                    type="radio"
                    name="goodOrBadRadio"
                    id="badHabitRadio"
                    value="bad"
                />
                </label>
                <label htmlFor="habitGoalDropdown">Goal</label>
			        <Field
          				name="habitGoalDropdown"
          				id="habigGoalDropdown"
          				component={renderDropdownList}
          				data={numbers}
          				valueField="value"
          				textField="goal"
          		/>

          		<label htmlFor="habigLogDropdown">When to log</label>
			        <Field
          				name="habitLogDropdown"
          				id="habitLogDropdown"
          				component={renderDropdownList}
          				data={logData}
          				valueField="value"
          				textField="log"
          			/>

                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'HabitForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('HabitForm', 'habit-start-date'))
})(HabitForm);