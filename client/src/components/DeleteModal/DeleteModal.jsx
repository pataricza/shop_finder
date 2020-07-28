import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const CustomModal = ({
  title, handleOk, handleCancel, visible,
}) => (
  <div className="modal-container">
    <Modal
      title={title}
      visible={visible}
      onOk={() => { handleOk(); handleCancel(); }}
      onCancel={handleCancel}
    />
  </div>
);

CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default CustomModal;
