import { useContext } from "react"
import SettingsFormsContext from "./SettingsFormsContext"

function useSettingsForms() {
  const settingsForms = useContext(SettingsFormsContext)
  if (!settingsForms) throw new Error('Missing SettingsFormsContext.Provider in the tree')
  return settingsForms
}

export default useSettingsForms