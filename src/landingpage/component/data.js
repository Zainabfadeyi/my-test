import { faker } from '@faker-js/faker';

export const generateFakeData = (numEntries) => {
  return Array.from({ length: numEntries }, () => ({
    name: faker.name.fullName(), 
    email: faker.internet.email(),
    amount: parseFloat(faker.finance.amount(10, 1000, 2)), // Amount between $10 and $1000
  }));
};

const fakeData = generateFakeData(12);
console.log(fakeData);
