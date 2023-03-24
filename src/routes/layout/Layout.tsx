import { Outlet, NavLink } from 'react-router-dom'
import { Layout as AntdLayout, theme } from 'antd'
import Header from './Header'

const { Content } = AntdLayout

function Layout() {

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <AntdLayout>
      <Header />

      <Content style={{ padding: 32 }}>
        <div className="my-layout-content" style={{ background: colorBgContainer }}>
          <Outlet />
        </div>
      </Content>

    </AntdLayout>
  )
}

export default Layout