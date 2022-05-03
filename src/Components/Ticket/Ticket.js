import './ticket.css';

const Tickets = () => {
	return (
		<div className='tickets'>
			<div className='tickets_header'>
				<div className='tickets_group'>
					<h2 className='tickets_title'>Unresolved tickets</h2>
					<p className='tickets_text'>
						Group:
						<span className='tickets_text_active'>Support</span>
					</p>
				</div>

				<div className='tickets_details'>
					<p>
						<a className='tickets_summary' href="#link">
						View details
						</a>
						</p>
				</div>
			</div>

			<ul className='tickets_list'>
				<li className='tickets_item'>
					<h3 className='tickets_itemTitle'>Waiting on Feature Request</h3>
					<span className='tickets_itemSpan'>4238</span>
				</li>
				<li className='tickets_item'>
					<h3 className='tickets_itemTitle'>Awaiting Customer Response</h3>
					<span className='tickets_itemSpan'>1005</span>
				</li>
				<li className='tickets_item'>
					<h3 className='tickets_itemTitle'>Awaiting Developer Fix</h3>
					<span className='tickets_itemSpan'>914</span>
				</li>
				<li className='tickets_item'>
					<h3 className='tickets_itemTitle'>Pending</h3>
					<span className='tickets_itemSpan'>281</span>
				</li>
			</ul>
		</div>
	);
};

export default Tickets;
