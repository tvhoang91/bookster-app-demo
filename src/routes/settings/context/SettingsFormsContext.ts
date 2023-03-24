import { createContext } from 'react'
import { SettingsForms } from '../settings.type'

const SettingsFormsContext = createContext<SettingsForms | null>(null)

export default SettingsFormsContext