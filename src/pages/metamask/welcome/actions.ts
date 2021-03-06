import { WebDriver } from 'selenium-webdriver';

import { clickElement, fillText } from '../../../utils/helpers/actions';
import selectors from './selectors';

export const clickBtnStartNow = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnStartNow);
};

export const clickBtnImportWallet = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnImportWallet);
};

export const clickBtnNoThanks = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnNoThanks);
};

export const fillRecoveryPhrase = async (driver: WebDriver, phrase: string) => {
  await fillText(driver, selectors.inputRecoveryPhrase, phrase);
};

export const fillNewPassword = async (driver: WebDriver, password: string) => {
  await fillText(driver, selectors.inputNewPassword, password);
};

export const fillConfirmPassword = async (driver: WebDriver, password: string) => {
  await fillText(driver, selectors.inputConfirmPassword, password);
};

export const checkTermsOfUse = async (driver: WebDriver) => {
  await clickElement(driver, selectors.checkboxTermsOfUse);
};

export const clickBtnImport = async (driver: WebDriver) => {
  await clickElement(driver, selectors.btnImport);
};
