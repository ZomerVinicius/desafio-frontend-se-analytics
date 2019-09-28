import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import request from 'umi-request'

const AnalyticsTable = () => {
  const [
    newYorkStockExchangeCompanies,
    setNewYorkStockExchangeCompanies,
  ] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getNewYorkStockExchangeCompanies = async () => {
      const companies = await request(
        'https://financialmodelingprep.com/api/v3/company/stock/list',
      )
      setNewYorkStockExchangeCompanies(companies.symbolsList)
      setLoading(false)
    }
    getNewYorkStockExchangeCompanies()
  }, [])

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => `${a.name}`.localeCompare(b.name),
      width: '50%',
    },
    {
      title: 'Símbolo',
      width: '25%',
      dataIndex: 'symbol',
      sorter: (a, b) => `${a.symbol}`.localeCompare(b.symbol),
    },
    {
      title: 'Preço',
      dataIndex: 'price',
      width: '25%',
      sorter: (a, b) => a.price - b.price,
    },
  ]
  return (
    <Table
      columns={columns}
      dataSource={newYorkStockExchangeCompanies}
      loading={loading}
    />
  )
}
export default AnalyticsTable
