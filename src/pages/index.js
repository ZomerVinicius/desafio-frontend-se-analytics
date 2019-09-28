import { ConfigProvider } from 'antd'
import ptBR from 'antd/es/locale/pt_BR'
import moment from 'moment'
import 'moment/locale/pt-br'
import React from 'react'
import DashboardAnalytics from './components/DashboardAnalytics'

moment.locale('pt')

export default function() {
  return (
    <ConfigProvider locale={ptBR}>
      <DashboardAnalytics />
    </ConfigProvider>
  )
}
