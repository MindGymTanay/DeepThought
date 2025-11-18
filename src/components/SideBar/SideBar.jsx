import './SideBar.css'
import { useState } from 'react'
import collapseIcon from '../../assets/sideBar_collapse_icon.svg'
import expandIcon from '../../assets/sideBar_expand_icon.svg'

export default function SideBar({ placement = 'left', initialCollapsed = false }) {
  const isRight = placement === 'right'
  const [collapsed, setCollapsed] = useState(isRight ? true : initialCollapsed)

  const handleToggle = () => {
    if (!isRight) {
      // LEFT (Journey Board): toggle expand/collapse
      // RIGHT (Notice Board): opens on hover only (CSS-based)
      setCollapsed((prev) => !prev)
    }
  }

  const rootClassName = [
    'dt-sidebar',
    `dt-sidebar--${placement}`,
    collapsed ? 'dt-sidebar--collapsed' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const title = placement === 'left' ? 'Journey Board' : 'Notice Board'
  const titleText = isRight || !collapsed ? title : ''

  return (
    <aside className={rootClassName}>
      <div className="dt-sidebar__title-bar">
        <span className="dt-sidebar__title">{titleText}</span>

        {/* LEFT: expand / collapse icons */}
        {!isRight && (
          <button
            className="dt-sidebar__back"
            aria-label={collapsed ? `Open ${title}` : `Collapse ${title}`}
            onClick={handleToggle}
          >
            <img
              src={collapsed ? expandIcon : collapseIcon}
              alt={collapsed ? 'Expand panel' : 'Collapse panel'}
            />
          </button>
        )}
      </div>

      {!collapsed && placement === 'left' && (
        <div className="dt-sidebar__content">
          <h3 className="dt-sidebar__heading">
            Explore the world of management
          </h3>

          <ul className="dt-sidebar__list dt-sidebar__list--outer">
            <li>Technical Project Management</li>
            <li>Threadbuild</li>
            <li>Structure your pointers</li>
            <li>4SA Method</li>
          </ul>
        </div>
      )}
    </aside>
  )
}