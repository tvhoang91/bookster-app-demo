import { doRandomRequest, getRandomBoolean } from "../../helpers/random.helper"
import { LoginFormValues, ProfileFormValues, SettingsForms } from "./settings.type"
import { saveLogin, saveProfile } from "./api/settingsApi"

export function validateForm(probability = 0.6) {
  const isValid = getRandomBoolean(probability)
  if (!isValid) {
    throw new Error("Form is invalid")
  }
}

export async function promtSaveForm() {
  if (confirm("Do you want to save the form?")) {
    await doRandomRequest()
  }
}

export function getFormByTabId(tabId: string | undefined, settingsForms: SettingsForms) {
  switch (tabId) {
    case "login":
      return settingsForms.loginForm
    case "profile":
      return settingsForms.profileForm
    default:
      throw new Error(`Unknown tab id: ${tabId}`)
  }
}

export async function saveFormByTabId(tabId: string | undefined, values: LoginFormValues | ProfileFormValues) {
  switch (tabId) {
    case "login":
      await saveLogin(values as LoginFormValues)
      break
    case "profile":
      await saveProfile(values as ProfileFormValues)
      break
    default:
      throw new Error(`Unknown tab id: ${tabId}`)
  }
}
