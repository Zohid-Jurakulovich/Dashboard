import './stats.css';
import { Search, Notification } from '../../Images/Icons/Icons';
import ProfleImg from '../../Images/img/profile_img.png';
import TrendsImg from "../../Images/img/trends_img.png"


import StatisticsItem from '../StatisticsItem/StatisticsItem';
import TrendsItem from '../TrendsItem/TrendsItem';
import Tickets from '../Ticket/Ticket';
import Task from '../Task/Task';

const Stats = () => {
	return (
		<div className='statistics'>
			<div className='view'>
				<h2 className='view_title'>Overview</h2>
				<div className='view_parametres'>
					<a className='view_searchIcon' href='#link'>
						<Search />
					</a>
					<a className='view_notificationIcon' href='#link'>
						<Notification />
					</a>
				</div>
				<div className='view_profile'>
					<p className='view_profileName'>Jones Ferdinand</p>
					<img className='view_profileImg' src={ProfleImg} alt='' />
				</div>
			</div>
			<ul className='view_list'>
				<StatisticsItem title={'Unresolved'} number={'60'} />
				<StatisticsItem title={'Overdue'} number={'16'} />
				<StatisticsItem title={'Open'} number={'43'} />
				<StatisticsItem title={'On hold'} number={'64'} />
			</ul>

			<div className='view_trends trends'>
				<div className='trends_left'>
					<h2 className='trends_title'>Today’s trends</h2>
					<div className='trends_elements'>
						<address className='trends_address'>
							as of 25 May 2019, 09:41 PM
						</address>
						<div className='trends_days'>
							<div className='trends_day '>
								<span className='trends_line'></span>
								<p className='trends_text'>Today</p>
							</div>
							<div className='trends_day '>
								<span className='trends_line trends_line--active'></span>
								<p className='trends_text'>Yesterday</p>
							</div>
						</div>
					</div>
					<img className='trends_img' src={TrendsImg} />
				</div>
				<div className='trends_right'>
					<ul className='trends_list'>
						<TrendsItem title={'Resolved'} number={'449'} />
						<TrendsItem title={'Received'} number={'426'} />
						<TrendsItem title={'Average first response time'} number={'33m'} />
						<TrendsItem title={'Average response time'} number={'3h 8m'} />
						<TrendsItem
							title={'Average Resolution within SLA time'}
							number={'94%'}
						/>
					</ul>
				</div>
			</div>
			<div className='view_footer'>
			<Tickets />
			<Task />
			</div>
		</div>
	);
};

export default Stats;
