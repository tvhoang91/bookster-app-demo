import "./Header.scss"
import { Layout as AntdLayout, Menu } from 'antd'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useMemo } from "react"

const AntdHeader = AntdLayout.Header

function Header() {

  const location = useLocation()
  const selectedKeys = useMemo(() => {
    const keys = location.pathname.split('/').filter((key) => key !== '')
    if (keys.length === 0) return ["home"]
    return keys
  }, [location.pathname])

  return (
    <AntdHeader className="my-layout-header">
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={selectedKeys}
        items={[
          {
            key: 'home', label: <Link to="/">
              Home
            </Link>
          },
          {
            key: 'settings', label: <Link to="/settings/login">
              Settings
            </Link>,
            children: [
              {
                key: 'login', label: <Link to="/settings/login">
                  Login
                </Link>
              },
              {
                key: 'profile', label: <Link to="/settings/profile">
                  Profile
                </Link>
              }
            ]
          },
        ]}
      />
    </AntdHeader>
  )
}

export default Header