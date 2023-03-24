import { FormInstance } from "antd"

export type SettingsTab = "login" | "profile"

export type LoginFormValues = {
  username: string
  password: string
}

export type ProfileFormValues = {
  firstName: string
  lastName: string
}

export type SettingsForms = {
  loginForm: FormInstance<LoginFormValues>
  profileForm: FormInstance<ProfileFormValues>
}