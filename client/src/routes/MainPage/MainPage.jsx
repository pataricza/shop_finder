import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'; // eslint-disable-line
import { getAllData, addNewPartner, deletePartner } from '../../actions/partnerActions';
import Header from '../../containers/Header';
import Button from '../../components/Button/Button';
import CustomTable from '../../components/Table/Table';
import PartnerModal from '../../components/PartnerModal/PartnerModal';
import DeleteModal from '../../components/DeleteModal/DeleteModal';

const MainPage = ({
  dispatchGetAllData, partners, businessForms, cities, dispatchAddNewPartner, dispatchDeletePartner,
}) => {
  useEffect(() => {
    dispatchGetAllData();
  }, []);

  const [isPartnerModalOpen, setPartnerModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [modalType, setModalType] = useState('Add new');
  const [itemToDelete, setItemToDelete] = useState(null);

  const [dataToEdit, setDataToEdit] = useState({
    id: null,
    name: null,
    businessForm: null,
    taxNumber: null,
    regNumber: null,
    city: null,
    address: null,
    phone: null,
    bankAccountNo: null,
    note: null,
  });

  const handleInputChange = (data, type) => {
    setDataToEdit({
      ...dataToEdit,
      [type]: data,
    });
  };

  const emptyDataFields = () => {
    setDataToEdit({
      id: null,
      name: null,
      businessForm: null,
      taxNumber: null,
      regNumber: null,
      city: null,
      address: null,
      phone: null,
      bankAccountNo: null,
      note: null,
    });
  };

  return (
    <div className="app-main-page">
      <Header />
      <Button text="Add Partner" onClick={() => setPartnerModalOpen(true)} />
      <PartnerModal
        visible={isPartnerModalOpen}
        businessForms={businessForms}
        cities={cities}
        title={`${modalType} partner`}
        handleOk={() => { dispatchAddNewPartner(dataToEdit); setPartnerModalOpen(false); }}
        handleCancel={() => { setPartnerModalOpen(false); emptyDataFields(); }}
        handleInputChange={handleInputChange}
        dataToEdit={dataToEdit}
      />
      <DeleteModal
        title="Are you sure to delete this partner?"
        visible={isDeleteModalOpen}
        handleOk={() => { dispatchDeletePartner(itemToDelete); setDeleteModalOpen(false); }}
        handleCancel={() => setDeleteModalOpen(false)}
      />
      <div className="app-mainpage-partners-table">
        <div className="app-mainpage-partners-container">
          {
            !partners
              ? (
                <div className="app-mainpage-spinner-container">
                  <Spin size="small" />
                  ...loading
                </div>
              )
              : (
                <CustomTable
                  dataSource={partners}
                  setItemToDelete={setItemToDelete}
                  setDeleteModalOpen={setDeleteModalOpen}
                  setDataToEdit={setDataToEdit}
                  cities={cities}
                  businessForms={businessForms}
                  setModalType={setModalType}
                  setPartnerModalOpen={setPartnerModalOpen}
                />
              )
          }
        </div>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  partners: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  businessForms: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  cities: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  dispatchGetAllData: PropTypes.func.isRequired,
  dispatchAddNewPartner: PropTypes.func.isRequired,
  dispatchDeletePartner: PropTypes.func.isRequired,
};

MainPage.defaultProps = {
  partners: null,
  cities: null,
  businessForms: null,
};

const mapDispatchToProps = {
  dispatchGetAllData: getAllData,
  dispatchAddNewPartner: addNewPartner,
  dispatchDeletePartner: deletePartner,
};

const mapStateToProps = (store) => ({
  partners: store.partners.partners,
  businessForms: store.partners.businessForms,
  cities: store.partners.cities,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
