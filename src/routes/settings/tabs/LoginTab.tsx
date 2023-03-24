import { Button, Form, Input } from "antd"
import { saveLogin } from "../api/settingsApi"
import useSettingsForms from "../context/useSettingsForms"
import { LoginFormValues } from "../settings.type"

function LoginTab() {
  const { loginForm } = useSettingsForms()

  async function onFinish(values: LoginFormValues) {
    try {
      await saveLogin(values)
      loginForm.resetFields()
    } catch (error) {
      console.log("Error Saving Login", error)
    }
  }

  return <>
    <Form
      name="login"
      form={loginForm}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      style={{ maxWidth: 800, paddingTop: 32, margin: "0 auto" }}
      onFinish={onFinish}
    >
      <Form.Item label="Username" name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  </>
}

export default LoginTab