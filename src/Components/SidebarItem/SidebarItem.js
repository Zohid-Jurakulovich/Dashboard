import "./sidebarItem.css"



const SidebarItem = ({text, Icon}) => {
  return (
    <li className="sidebar_item">
      <Icon />
      <strong className="sidebar_text">
      {text}
      </strong>
    </li>
  )
} 

export default SidebarItem