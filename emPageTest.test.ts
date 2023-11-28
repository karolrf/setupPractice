import {Builder, Capabilities, WebDriver, until, WebElement, By} from 'selenium-webdriver'; 
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

//import our class from the page object file

import { methodsPage } from './emPageObject';
const mp = new methodsPage(driver); 

//test set up 

describe("Page Objects", () => {
    beforeEach(async () => {
        await mp.navigate(); 
    });
    afterAll(async () => {
        await mp.driver.quit(); 
    }); 

    test('adding an employee', async () => {
        await mp.click(mp.addEmployee); 
        await mp.click(mp.newEmployee); 
        await mp.setInput(mp.nameInput, 'John Dutton'); 
        await mp.setInput(mp.phoneInput,12345678901); 
        await mp.setInput(mp.titleInput, 'COO'); 
        await mp.click(mp.saveBtn); 
    }); 

}); 