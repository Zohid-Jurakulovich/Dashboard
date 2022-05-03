import "./trendsItem.css"


const TrendsItem = ({ title, number }) => {
	return (
		<li className='trends_item'>
			<h3 className='trends_itemTitle'>{title}</h3>
			<span className='trends_itemText'>{number}</span>
		</li>
	);
};


export default TrendsItem