import React, { useState } from 'react';
import { FaChevronLeft, FaExpandAlt } from 'react-icons/fa';
import { FaRegFolderOpen, FaRegUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import { SidebarContent, SidebarHeader, SubMenu } from 'react-pro-sidebar';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// Actions
import { logoutSuccess } from '../../../Redux/actions/authActions';
// Helpers
import { data } from './Sidebar.helper';
// Assets
import Logo from '../../../../assets/img/logo-footer.svg';
// Styles
import './Sidebar.scss';
import Style from './Sidebar.style';

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const { handleToggleSidebar, toggled } = props;
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsedChange = () => {
    collapsed ? setCollapsed(false) : setCollapsed(true);
  };

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  /* TODO: Refact styles */
  return (
    <Style collapsed={collapsed}>
      <ProSidebar
        collapsed={collapsed}
        breakPoint='md'
        width={toggled ? 300 : 440}
        onToggle={handleToggleSidebar}
        toggled={toggled}
      >
        <div
          style={{
            display: collapsed ? 'flex' : '',
            justifyContent: collapsed ? 'center' : '',
          }}
        >
          <img
            src={Logo}
            alt='Logo'
            width={40}
            height={48}
            className='logo'
            style={{
              marginLeft: collapsed ? '' : '88px',
            }}
          />
        </div>
        <SidebarHeader>
          <div
            className='title'
            style={{
              display: collapsed ? 'none' : '',
            }}
          >
            {'ADMIN'}
          </div>
        </SidebarHeader>
        {/* Minimizar y salida */}
        <SidebarContent>
          <Menu className='menu'>
            {data.map(({ title, id, links = [] }) => (
              <SubMenu
                title={title}
                icon={
                  collapsed ? <FaRegFolderOpen className='menu__icon' /> : null
                }
                defaultOpen={toggled ? true : false}
                className='menu__submenu'
                style={{
                  display: collapsed ? '' : 'flex',
                  fontSize: toggled ? 20 : 32,
                }}
                key={id}
              >
                {links.map((link, index) => (
                  <MenuItem
                    icon={<FaRegUserCircle />}
                    className='menu__submenu__item'
                    style={{
                      marginTop: toggled || collapsed ? 16 : 32,
                      marginBottom: toggled || collapsed ? 16 : 0,
                    }}
                    key={index}
                  >
                    <NavLink
                      key={index}
                      to={link.url}
                      exact
                      activeClassName='link'
                    >
                      {link.name}
                    </NavLink>
                  </MenuItem>
                ))}
              </SubMenu>
            ))}

            <MenuItem
              className='menu__submenu__actions'
              style={{
                display: collapsed ? '' : 'flex',
              }}
              icon={collapsed ? <FaExpandAlt /> : <FaChevronLeft />}
              onClick={handleCollapsedChange}
            >
              Minimizar
            </MenuItem>
            <MenuItem
              className='menu__submenu__actions'
              style={{
                display: collapsed ? '' : 'flex',
              }}
              icon={<FaSignOutAlt />}
              onClick={handleLogout}
            >
              Cerrar sesión
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </Style>
  );
};

export default Sidebar;
