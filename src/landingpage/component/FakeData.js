import { faker } from '@faker-js/faker';

export const generateCityData = () => {
  // Generate random population for each city using faker.number.int()
  const lagos = faker.number.int({ min: 20, max: 40 });
  const benin = faker.number.int({ min: 10, max: 30 });
  const abuja = faker.number.int({ min: 10, max: 25 });
  const niger = faker.number.int({ min: 5, max: 15 });
  const others = faker.number.int({ min: 5, max: 15 });

  // Calculate total population
  const total = lagos + benin + abuja + niger + others;

  // Return data with calculated percentages
  return [
    { id: 'Lagos', label: 'Lagos', value: (lagos / total) * 100 },
    { id: 'Benin', label: 'Benin', value: (benin / total) * 100 },
    { id: 'Abuja', label: 'Abuja', value: (abuja / total) * 100 },
    { id: 'Niger', label: 'Niger', value: (niger / total) * 100 },
    { id: 'Others', label: 'Others', value: (others / total) * 100 }
  ];
};
export const generateChartData = () => {
    const months = ['July', 'August', 'September', 'October'];
  
    const basicData = months.map(month => ({
      x: month, // x-axis value (month)
      y: faker.number.int({ min: 100, max: 400 }) // Random value for Basic
    }));
  
    const premiumData = months.map(month => ({
      x: month, // x-axis value (month)
      y: faker.number.int({ min: 100, max: 400 }) // Random value for Premium
    }));
  
    return [
      {
        id: 'Basic',
        data: basicData,
      },
      {
        id: 'Premium',
        data: premiumData,
      }
    ];
  };
  export const generateCityBarData = () => {
    const months = ['July', 'August', 'September', 'October', 'November', 'December'];
    const cities = ['Lagos', 'Benin', 'Abuja', 'Niger'];
  
    // Create data for each month with values for each city
    return months.map(month => ({
      month, // Month name
      Lagos: faker.number.int({ min: 10, max: 40 }),
      Benin: faker.number.int({ min: 10, max: 40 }),
      Abuja: faker.number.int({ min: 10, max: 40 }),
      Niger: faker.number.int({ min: 10, max: 40 }),
    }));
  };