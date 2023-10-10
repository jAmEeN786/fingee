import { chromium,expect,test,Page, selectors } from "@playwright/test";
import { describe } from "node:test";

test.describe.configure({ mode: 'serial' });

test.use({
        viewport:{
            width: 1024,
            height:768
            
        }})
        
test('Open start URL', async ({ page }) => {
    //redirection to quiklyz site
    await page.goto('https://uat.quiklyz.com/');
    //select city as chennai
    await page.getByTestId("text-center CNA").click();
    //hit 'find cars' option.
    await page.getByTestId("mat-button-wrapper").nth(0).click();
    //hit 'privacy policy' option in footer section.
    await selectors.setTestIdAttribute("type");
    await page.getByTestId("button").nth(5).click();
    //hit 'select city' option to change the city
    await selectors.setTestIdAttribute('aria-hidden');
    await page.getByTestId('true').nth(2).click();
    //end of code-confirmation checking purpose
    console.log("finished");
    await page.locator("Label=Petrol").click();
    await page.pause();
});