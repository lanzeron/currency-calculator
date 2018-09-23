import {
  getFormatedDate,
  calculateKuna,
  calculateFromKuna
} from './';
import {
  calculateKunaMock,
  dateFormattedMock,
  calculateFromKunaMock
} from '../config/mockData';

describe('Test dateFormatted method', () => {
  it('test  should return valid date', () => {
    expect(getFormatedDate(dateFormattedMock.mockDate)).toBe(dateFormattedMock.expectedResult);
  });

  it('test should return invalid date', () => {
    expect(getFormatedDate(dateFormattedMock.mockDate.toString())).toEqual(dateFormattedMock.expectedErrorResult)
  })

});

describe('Test calculateKuna method', () => {
  it('test should return correct kuna value if, currency unit value = 1', () => {
    expect(calculateKuna(calculateKunaMock.value, calculateKunaMock.currencyType1)).toBe(calculateKunaMock.expectedValue1)
  });

  it('test should return correct kuna value if, currency unit value = 100', () => {
    expect(calculateKuna(calculateKunaMock.value, calculateKunaMock.currencyType2)).toBe(calculateKunaMock.expectedValue2)
  })
});

describe('Test calculateFromKuna method', () => {
  it('test should return correct currency value if, currency unit value = 1', () => {
    expect(calculateFromKuna(calculateFromKunaMock.value, calculateFromKunaMock.currencyType1)).toBe(calculateFromKunaMock.expectedValue1)
  });

  it('test should return correct currency value if, currency unit value = 100', () => {
    expect(calculateFromKuna(calculateFromKunaMock.value, calculateFromKunaMock.currencyType2)).toBe(calculateFromKunaMock.expectedValue2)
  })
});
