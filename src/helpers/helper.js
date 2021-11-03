/* eslint-disable no-useless-escape */
const regexName = /^[a-zA-Z-,](\s{0,1}[a-zA-Z-, ])*[^\s]/i;
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPhone = /^([0-9])*$/;

export const formatCurrency = (currency) => `$${new Intl.NumberFormat().format(currency)}`;
export const isValidName = (name) => regexName.test(name);
export const isValidEmail = (email) => regexEmail.test(email);
export const isValidPhone = (phone) => regexPhone.test(phone);