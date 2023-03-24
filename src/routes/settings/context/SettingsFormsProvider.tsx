import { useForm } from 'antd/es/form/Form'
import { ReactNode } from 'react'
import { LoginFormValues, ProfileFormValues } from '../settings.type'
import SettingsFormsContext from './SettingsFormsContext'

function SettingsFormProvider({ children }: { children: ReactNode }) {

  const [loginForm] = useForm<LoginFormValues>()
  const [profileForm] = useForm<ProfileFormValues>()

  return (
    <SettingsFormsContext.Provider value={{ loginForm, profileForm }}>
      {children}
    </SettingsFormsContext.Provider>
  )
}

export default SettingsFormProvider