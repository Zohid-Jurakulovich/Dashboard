import SidebarItem from '../SidebarItem/SidebarItem';

import {Logo ,  Overview ,Ideas  ,Contacts , Tickets, Subscription, Settings , Articles , Agents} from '../../Images/Icons/Icons';
import './sidebar.css';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='logo'>
				<a className='logo_link' href='#'>
					<Logo />
					<strong className='logo_text'>Dashboard Kit</strong>
				</a>
			</div>

			<ul className='sidebar_list'>
				<SidebarItem Icon={Overview} text={'Overview'} />
				<SidebarItem Icon={Tickets} text={'Tickets'} />
        <SidebarItem Icon={Ideas} text={'Ideas'} />
				<SidebarItem Icon={Contacts} text={'Contacts'} />
				<SidebarItem Icon={Agents} text={'Agents'} />        
				<SidebarItem Icon={Articles} text={'Articles'} />
        <li><span className='line'></span></li>

        <SidebarItem Icon={Settings} text={'Settings'} />
				<SidebarItem Icon={Subscription} text={'Subscription'} />
        
        
      </ul>
		</div>
	);
};

export default Sidebar;
