import { chromium,expect,test,Page, selectors } from "@playwright/test";
import { describe } from "node:test";

test.describe.configure({ mode: 'serial' });

test.use({
        viewport:{
            width: 1024,
            height:768
            
        }})
test('Open start URL', async ({ page }) => {

     await page.goto("https://demo.competethemes.com/");
     await selectors.setTestIdAttribute("a");
     await page.getByTestId("Blog").click();
     await page.pause();




});