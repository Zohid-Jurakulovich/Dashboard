import './statisticsItem.css';

const StatisticsItem = ({ title, number }) => {
	return (
		<li className='view_item'>
			<h3 className='view_itemTitle'>{title}</h3>
			<span className='view_text'>{number}</span>
		</li>
	);
};

export default StatisticsItem;
