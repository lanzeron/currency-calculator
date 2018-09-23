export const calculateKunaMock = {
  value: 10,
  currencyType1: {
    unit_value: 1,
    median_rate: 2
  },
  currencyType2: {
    unit_value: 100,
    median_rate: 2
  },
  expectedValue1: 20,
  expectedValue2: 2000
};

export const dateFormattedMock = {
  mockDate: 1537613586129,
  expectedResult: '09/22/2018',
  expectedErrorResult: new Error('invalid date is passed!')
};

export const calculateFromKunaMock = {
    value: 10,
    currencyType1: {
      unit_value: 1,
      median_rate: 2
    },
    currencyType2: {
      unit_value: 100,
      median_rate: 2
    },
    expectedValue1: 5,
    expectedValue2: 0.050
};
