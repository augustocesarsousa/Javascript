const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'test1',
        email: 'test1@email.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'test2',
        email: 'test2@email.com',
        password_hash: await bcryptjs.hash('234567', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'test3',
        email: 'test3@email.com',
        password_hash: await bcryptjs.hash('345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'test4',
        email: 'test4@email.com',
        password_hash: await bcryptjs.hash('456789', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'test5',
        email: 'test5@email.com',
        password_hash: await bcryptjs.hash('567891', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: () => {},
};
