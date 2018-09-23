import { Calculator, List} from "../screens";

export default [
  {
    label: 'Currency calculator',
    path: '/',
    exact: true,
    component: Calculator
  },
  {
    label: 'Exchange rate ',
    path: '/list',
    exact: true,
    component: List
  }
];
