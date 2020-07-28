const data = [
  {
    id: 1,
    name: 'teszt',
    businessForm: '1',
    taxNumber: '33323',
    regNumber: '1234',
    city: '1',
    address: 'Hugó utca 1',
    phone: '+36306774617',
    bankAccountNo: '324324234',
    note: 'minden ok',
  },
  {
    id: 2,
    name: 'teszt2',
    businessForm: '2',
    taxNumber: '33323',
    regNumber: '1234',
    city: '1',
    address: 'Hugó utca 1',
    phone: '+36306774617',
    bankAccountNo: '324324234',
    note: 'minden ok',
  },
]


const businessForms = [
  {
    id: 1,
    name: 'Kft',
  },
  {
    id: 2,
    name: 'Rt',
  },
  {
    id: 3,
    name: 'Bt',
  },
];

const cities = [
  {
    id: 1,
    name: 'Budaörs',
  },
  {
    id: 2,
    name: 'Budapest',
  },
  {
    id: 3,
    name: 'Kecskemét',
  },
];

exports.data = data;
exports.businessForms = businessForms;
exports.cities = cities;
