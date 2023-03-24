import { Tabs } from 'antd'
import { Link, useParams } from 'react-router-dom'
import LoginTab from './tabs/LoginTab'
import ProfileTab from './tabs/ProfileTab'

function Settings() {
  const { tabId } = useParams()

  return <div style={{ padding: 24 }}>
    <Tabs
      activeKey={tabId}
      items={[
        {
          key: 'login', label: <Link to="/settings/login"
            style={{ color: 'inherit' }}
          >
            Login
          </Link>,
          children: <LoginTab />
        },
        {
          key: 'profile', label: <Link to="/settings/profile"
            style={{ color: 'inherit' }}
          >
            Profile
          </Link>,
          children: <ProfileTab />
        },
      ]}
    />
  </div>
}

export default Settings