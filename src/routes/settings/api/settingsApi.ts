import { doRandomRequest } from "../../../helpers/random.helper"
import { LoginFormValues, ProfileFormValues } from "../settings.type"

export async function saveLogin(values: LoginFormValues) {
  await doRandomRequest(1, 3)
  console.log("Saved Login", values)
}

export async function saveProfile(values: ProfileFormValues) {
  await doRandomRequest(0, 3)
  console.log("Saved Profile", values)
}
