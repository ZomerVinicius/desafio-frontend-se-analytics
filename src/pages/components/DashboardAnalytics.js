import React from 'react'
import styles from '../index.css'
import AnalyticsTable from './AnalyticsTable'

export default function DashboardAnalytics() {
  return (
    <div className={styles.normal}>
      <h2 className={styles.title}>
        Empresas na bolsa de valores de Nova York
      </h2>
      <AnalyticsTable />
    </div>
  )
}
