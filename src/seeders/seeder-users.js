'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { //chạy bt, thêm dữ liệu vào...
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Daniel',
      lastName: 'Phan',
      address: 'USA',
      phonenumber: '0123456789',
      gender: 1,
      roleId: 'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => { //rollback (muốn cancel việc thêm data)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
