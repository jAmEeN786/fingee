//import {AfterAll,BeforeAll,setDefaultTimeout} from '@cucumber/cucumber';
const {AfterAll,BeforeAll}= require ("@cucumber/cucumber");

//import{Browser,chromium,Page} from("@playwright/test");
//const {Browser,chromium,Page}= require ("@playwright/test");    
const {chromium,Page}=require("playwright");
//let browser:Browser;
//let page=Page;


var {setDefaultTimeout} = require('@cucumber/cucumber'); 
setDefaultTimeout(60 * 1000);

BeforeAll(async()=>{
    try{
    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('http://192.168.1.49:8086/');
    await page.locator("//mat-icon[text()='view_comfy']").click();
    await page.locator("//span[text()='Fingress Explorer']").click();
    await page.locator("(//span[@class='fa fa-chevron-down fg-menu-chevron-icon'])[2]").click();
    await page.locator("//span[text()='Form Elements']").click();
    await page.locator("//div[text()='Selection']").click();
    console.log(`Captured site title as ${await page.title()}`);
    }
    catch{
        console.log(`chrome navigation to demo site failed due to ${Error}`);
        throw new Error(`chrome navigation to demo site failed due to ${Error}`);
    }
    //return page;
});
AfterAll(async()=>{
    //await page.close();
    //await browser.close();
});
//module.exports{page,browser};
