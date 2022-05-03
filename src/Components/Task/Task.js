import { Plus } from '../../Images/Icons/Icons';
import './task.css';

const Task = () => {
	return (
		<div className='task'>
			<div className='task_header'>
				<div className='task_group'>
					<h2 className='task_title'> Tasks</h2>
					<p className='task_text'>Today</p>
				</div>

				<div className='task_details'>
					<p >
						<a className='task_summary' href='#link'>View all</a>
					</p>
				</div>
			</div>
			<div className='task_create'>
				<h3 className='task_createTitle'>Create new task</h3>
				<a className='task_plus' href='#link'>
					<Plus />
				</a>
			</div>

			<form className='task_form form'>
				<label class='form_label'>
					Finish ticket update
					<input className='form_input' type='radio' name='radio' />
					<span class='checkmark'></span>
					<span className='form_badge'>URGENT</span>
				</label>
				<label class='form_label'>
					Create new ticket example
					<input className='form_input' type='radio' name='radio' />
					<span class='checkmark'></span>
					<span className='form_badge form_badgeGreen'>NEW</span>
				</label>
				<label class='form_label'>
					Update ticket report
					<input className='form_input' type='radio' name='radio' />
					<span class='checkmark'></span>
					<span className='form_badge form_badgeGray'>DEFAULT</span>
				</label>
			</form>
		</div>
	);
};

export default Task;
