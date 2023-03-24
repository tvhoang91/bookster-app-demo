import { Tabs, TabsProps } from 'antd'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useSettingsForms from './context/useSettingsForms'
import { getFormByTabId, promtSaveForm, saveFormByTabId, validateForm } from './settings.helper'
import LoginTab from './tabs/LoginTab'
import ProfileTab from './tabs/ProfileTab'

function Settings() {
  const { tabId } = useParams()
  const navigate = useNavigate()
  const settingsForms = useSettingsForms()

  const onTabClick: TabsProps['onTabClick'] = async (key) => {

    try {
      const currentForm = getFormByTabId(tabId, settingsForms)
      if (currentForm.isFieldsTouched()) {
        if (confirm("Do you want to save the form?")) {
          const values = await currentForm.validateFields()
          await saveFormByTabId(tabId, values)
        } else {
          currentForm.resetFields()
        }
      }

      console.log("Navigate Tab")
      navigate(`/settings/${key}`)

    } catch (error) {
      console.log("Error", error)
    }
  }

  return <div style={{ padding: 24 }}>
    <Tabs
      activeKey={tabId}
      onTabClick={onTabClick}
      items={[
        {
          key: 'login', label: "Login",
          children: <LoginTab />
        },
        {
          key: 'profile', label: "Profile",
          children: <ProfileTab />
        },
      ]}
    />
  </div>
}

export default Settings