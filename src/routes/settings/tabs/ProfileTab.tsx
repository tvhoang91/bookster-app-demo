import { Button, Form, Input } from "antd"
import { saveProfile } from "../api/settingsApi"
import useSettingsForms from "../context/useSettingsForms"
import { ProfileFormValues } from "../settings.type"

function ProfileTab() {
  const { profileForm } = useSettingsForms()

  async function onFinish(values: ProfileFormValues) {
    try {
      await saveProfile(values)
      profileForm.resetFields()
    } catch (error) {
      console.log("Error Saving Profile", error)
    }
  }

  return <>
    <Form
      name="profile"
      form={profileForm}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      style={{ maxWidth: 800, paddingTop: 32, margin: "0 auto" }}
      onFinish={onFinish}
    >
      <Form.Item label="First Name" name="firstname"
        rules={[{ required: true, message: 'Please input your First Name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name="lastname"
        rules={[{ required: true, message: 'Please input your Last Name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  </>
}

export default ProfileTab