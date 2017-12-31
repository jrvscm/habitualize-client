import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { DropdownList } from 'react-widgets';
import { setCloseModal } from '../actions/index';
import Input from './input';
import moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import {required, nonEmpty} from '../validators';
import './HabitForm.css';
import 'react-widgets/dist/css/react-widgets.css';

export class HabitForm extends React.Component {
    onSubmit(values) {
       console.log(values)
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
  			//dropUp
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
                <label htmlFor="HabitTitle">Habit Title</label>
                <Field
                    component={Input}
                    type="text"
                    name="HabitTitle"
                    id="HabitTitle"
                    validate={[required, nonEmpty]}
                />

                <label htmlFor="habit-start-date">Start Date</label>
          			  <Field
          				name="habit-start-date"
          				showTime={false}
          				component={renderDateTimePicker}
        		/>
                <label id="good-habit-label" htmlFor="good-habit-radio">Good
                <Field
                    component={Input}
                    type="radio"
                    name="good-habit-radio"
                    id="good-habit-radio"
                    value="good"
                />
                </label>
                <label id="bad-habit-label" htmlFor="bad-habit-radio">Bad
                <Field
                    component={Input}
                    type="radio"
                    name="good-habit-radio"
                    id="bad-habit-radio"
                    value="bad"
                />
                </label>
                <label htmlFor="habit-goal-dropdown">Goal</label>
			        <Field
          				name="habit-goal-dropdown"
          				component={renderDropdownList}
          				data={numbers}
          				valueField="value"
          				textField="goal"
          		/>

          		<label htmlFor="habit-log">When to log</label>
			        <Field
          				name="habit-log-dropdown"
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
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(HabitForm);
