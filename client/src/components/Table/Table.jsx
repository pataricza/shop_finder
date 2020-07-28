/* eslint-disable */
import React from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';

class CustomTable extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const {
      dataSource, setItemToDelete, setDeleteModalOpen, setDataToEdit,
      cities, businessForms, setModalType, setPartnerModalOpen
    } = this.props;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Business Form',
        dataIndex: 'businessForm',
        key: 'businessForm',
        ...this.getColumnSearchProps('businessForm'),
      },
      {
        title: 'Tax Number',
        dataIndex: 'taxNumber',
        key: 'taxNumber',
      },
      {
        title: 'Reg. No',
        dataIndex: 'regNumber',
        key: 'regNumber',
      },
      {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
        ...this.getColumnSearchProps('city'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Phone No,',
        dataIndex: 'phone',
        key: 'phone',
      },
      {
        title: 'Bank Acc. No.',
        dataIndex: 'bankAccountNo',
        key: 'bankAccountNo',
      },
      {
        title: 'Note',
        dataIndex: 'note',
        key: 'note',
      },
      {
        title: 'Action',
        key: 'action',
        render: (rowData) => (
          <div className="button-actions-container">
            <Button
              text={<DeleteOutlined />}
              onClick={() => { setItemToDelete(rowData.id); setDeleteModalOpen(true); }}
            />
            <Button
              text={<EditOutlined />}
              onClick={() => {
                setDataToEdit({
                  ...rowData,
                  city: cities.find((city) => city.name === rowData.city).id,
                  businessForm: businessForms.find((businessForm) => businessForm.name
                    === rowData.businessForm).id,
                });
                setModalType('Edit');
                setPartnerModalOpen(true);
              }}
            />
          </div>
        ),
      },
    ];
    return <Table rowKey="id" columns={columns} dataSource={dataSource} />;
  }
}

export default CustomTable;
