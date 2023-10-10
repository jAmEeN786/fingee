//import {Given,When,Then} from '@cucumber/cucumber';
//import Cucumber from '@cucumber/cucumber';
    //const{Cucumber}=require("@cucumber/cucumber");
    //const { Given, When, Then } = Cucumber;
const { Given, When, Then } = require('@cucumber/cucumber');
//import { page } from '../steps/world';
//import page from '../steps/world';
const { page } = require('../steps/world');


//let page = new page()
//const {page} =require('../steps/world');
//import {expect} from '@playwright/test';
const {expect} =require('@playwright/test');

Given('Single select dropdown in the specified URL', async ()=> {
    await expect(page.locator("//mat-label[text()='Select ']")).toContainText("Select ");
    console.log("'Select' comment is visibled in placeholder");
  });

When('I select the single option from dropdown', async ()=> {
    await page.locator("//mat-label[text()='Select ']").click(); 
    await page.locator("//span[text()='Banana ']").click();
    
  });

Then('the chosen option should be selected',async ()=> {
    await expect(page.locator("//mat-select-trigger[text()=' Banana ']")).toContainText("Banana ");
    console.log("single(Banana) value only will be selected from dropdown");
  });


Given('single select dropdown with chosen option',async ()=> {
    await expect(page.locator("//mat-select-trigger[text()=' Banana ']")).toContainText("Banana ");
    console.log("single(Banana) value only will be selected from dropdown");
  });

When('I select the some other option from dropdown',async ()=> {
    await page.locator("//mat-label[text()='Select ']").click(); 
    await page.locator("//span[text()='Orange ']").click();
  });

Then('the chosen option should be selected after the deselection of selected option in 1st scenario',async ()=>  {
    await expect(page.locator("//mat-select-trigger[text()=' Orange ']")).toContainText("Orange ");
    console.log("Banana deselected and orange will be selected");
  });
  