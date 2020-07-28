import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Input, Select } from 'antd';
import './modal.scss';
/* eslint-disable */
const { Option } = Select;
const { TextArea } = Input;

const CustomModal = ({
  title, handleOk, handleCancel, visible, businessForms, cities, handleInputChange,
  dataToEdit,
}) => (
  <div className="modal-container">
    <Modal
      title={title}
      visible={visible}
      onOk={() => { handleOk(); handleCancel(); }}
      onCancel={handleCancel}
      okButtonProps={{
        disabled: dataToEdit.name === null || dataToEdit.name === '' || dataToEdit.city === null,
      }}
    >
      <label>Company Name*</label>
      <Input value={dataToEdit.name} onChange={(e) => handleInputChange(e.target.value, 'name')} />
      <label>Business Form</label>
      <Select
        onChange={(e) => handleInputChange(e, 'businessForm')}
        value={dataToEdit.businessForm}
      >
        {
          businessForms
            ? (
              businessForms.map((form) => (
                <Option key={form.id} value={form.id}>{form.name}</Option>
              ))
            ) : (
              'loading'
            )
        }
      </Select>
      <label>Tax Number</label>
      <Input value={dataToEdit.taxNumber} onChange={(e) => handleInputChange(e.target.value, 'taxNumber')} />
      <label>Registration  Number</label>
      <Input value={dataToEdit.regNumber} onChange={(e) => handleInputChange(e.target.value, 'regNumber')} />
      <label>City*</label>
      <Select
        onChange={(e) => handleInputChange(e, 'city')}
        value={dataToEdit.city}
      >
        {
          cities
            ? (
              cities.map((city) => (
                <Option key={city.id} value={city.id}>{city.name}</Option>
              ))
            ) : (
              'loading'
            )
        }
      </Select>
      <label>Address</label>
      <Input value={dataToEdit.address} onChange={(e) => handleInputChange(e.target.value, 'address')} />
      <label>Phone Number</label>
      <Input
        placeholder="eg.: 36306774617"
        addonBefore="+"
        value={dataToEdit.phone}
        onChange={(e) => handleInputChange(e.target.value, 'phone')}
      />
      <label>Bank Account Number</label>
      <Input
        value={dataToEdit.bankAccountNo}
        onChange={(e) => handleInputChange(e.target.value, 'bankAccountNo')}
      />
      <label>Note</label>
      <TextArea
        value={dataToEdit.note}
        onChange={(e) => handleInputChange(e.target.value, 'note')}
        rows={4}
      />
    </Modal>
  </div>
);

CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  businessForms: PropTypes.arrayOf(PropTypes.shape({})),
  cities: PropTypes.arrayOf(PropTypes.shape({})),
  dataToEdit: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    businessForm: PropTypes.number,
    taxNumber: PropTypes.string,
    regNumber: PropTypes.string,
    city: PropTypes.number,
    address: PropTypes.string,
    phone: PropTypes.string,
    bankAccountNo: PropTypes.string,
    note: PropTypes.string,
  }).isRequired,
};

CustomModal.defaultProps = {
  cities: null,
  businessForms: null,
};

export default CustomModal;
