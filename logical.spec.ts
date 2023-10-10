import { chromium,expect,test,Page } from "@playwright/test";
test.describe.configure({ mode: 'serial' });
test.use({
        viewport:{
            width: 1024,
            height:768
        }})
test.beforeEach('Open start URL', async ({ page }) => {
    await page.goto('http://192.168.1.49:8086/');
    await page.locator("//mat-icon[text()='view_comfy']").click();
    await page.locator("//span[text()='Fingress Explorer']").click();
    await page.locator("(//span[@class='fa fa-chevron-down fg-menu-chevron-icon'])[2]").click();
    await page.locator("//span[text()='Form Elements']").click();
    await page.locator("//div[text()='Logical']").click();
});
test('Simple checkbox group', async ({ page }) => {
    
    console.log("successfully navigated to Components-->Form elements-->Logical");
    await page.locator("(//span[text()=' Apple '])[1]").click();
    await expect(page.locator("(//span[text()=' Apple '])[1]")).toBeChecked();
    console.log("Simple check box group(apple) can be checked");
    await page.locator("(//span[text()=' Orange '])[1]").click();
    await expect(page.locator("(//span[text()=' Orange '])[1]")).toBeChecked();
    console.log("Simple check box group(orange) can be checked");
    await page.locator("(//span[text()=' Apple '])[1]").click();
    await expect(page.locator("(//span[text()=' Apple '])[1]")).not.toBeChecked();
    console.log("Simple check box group(apple) can be unchecked");
});
test('Check box as button group', async ({ page }) => {
    await page.locator("(//span[text()=' Apple '])[2]").click();
    await expect(page.locator("(//span[text()=' Apple '])[2]")).toBeEnabled();
    console.log("Check box as button group(apple) can be checked");
    await page.locator("(//span[text()=' Orange '])[2]").click();
    await expect(page.locator("(//span[text()=' Orange '])[2]")).toBeEnabled();
    console.log("Simple check box group(orange) can be checked");
    await expect(page.locator("(//span[text()=' Apple '])[2]")).not.toBeFocused();
    console.log("Check box as button group(apple) can be unchecked");
});
test('Check box group as pills', async ({ page }) => {
    await page.locator("(//span[text()='Apple'])[1]").click();
    await expect(page.locator("(//span[text()='Apple'])[1]")).toBeChecked();
    console.log("Check box group(apple) as pills can be checked");
    await page.locator("(//span[text()='Orange'])[1]").click();
    await expect(page.locator("(//span[text()='Orange'])[1]")).toBeChecked();
    console.log("Check box group(orange) as pills can be checked");
    await page.locator("(//span[text()='Apple'])[1]").click();
    await expect(page.locator("(//span[text()='Apple'])[1]")).not.toBeChecked();
    console.log("Check box group(apple) as pills can be unchecked");
});
test('Radio buttons horizontal1', async ({ page }) => {
    await page.locator("(//span[text()='Apple'])[2]").click();
    await expect(page.locator("(//span[text()='Apple'])[2]")).toBeChecked();
    console.log("Radio buttons(apple) horizontal can be checked");
    await page.locator("(//span[text()='Orange'])[2]").click();
    await expect(page.locator("(//span[text()='Orange'])[2]")).toBeChecked();
    console.log("Radio buttons(orange) horizontal can be checked");
    await page.locator("(//span[text()='Apple'])[2]").click();
    await expect(page.locator("(//span[text()='Apple'])[2]")).not.toBeChecked();
    console.log("Radio buttons(apple) horizontal can be unchecked");
});
test('Radio buttons vertical1', async ({ page }) => {
    await page.locator("(//span[text()='Apple'])[3]").click();
    await expect(page.locator("(//span[text()='Apple'])[3]")).toBeChecked();
    console.log("Radio buttons(apple) vertical can be checked");
    await page.locator("(//span[text()='Orange'])[3]").click();
    await expect(page.locator("(//span[text()='Orange'])[3]")).toBeChecked();
    console.log("Radio buttons(orange) vertical can be checked");
    await page.locator("(//span[text()='Apple'])[3]").click();
    await expect(page.locator("(//span[text()='Apple'])[3]")).not.toBeChecked();
    console.log("Radio buttons(apple) vertical can be unchecked");
});
test('Radio buttons vertical', async ({ page }) => {
    await page.locator("(//button[text()='Apple'])[1]").click();
    await expect(page.locator("(//button[text()='Apple'])[1]")).toBeEnabled();
    console.log("Radio buttons(apple) vertical  can be checked");
    await page.locator("(//button[text()='Orange'])[1]").click();
    await expect(page.locator("(//button[text()='Orange'])[1]")).toBeEnabled();
    console.log("Radio buttons(orange) vertical  can be checked");
    //await page.locator("(//button[text()='Apple'])[1]").click();
    await expect(page.locator("(//button[text()='Apple'])[1]")).not.toBeFocused();
    console.log("Radio buttons(apple) vertical  can be unchecked");
});
test('Radio buttons horizontal', async ({ page }) => {
    await page.locator("(//button[text()='Apple'])[2]").click();
    await expect(page.locator("(//button[text()='Apple'])[2]")).toBeEnabled();
    console.log("Radio buttons(apple) horizontal can be checked");
    await page.locator("(//button[text()='Orange'])[2]").click();
    await expect(page.locator("(//button[text()='Orange'])[2]")).toBeEnabled();
    console.log("Radio buttons(orange) horizontal can be checked");
    //await page.locator("(//button[text()='Apple'])[2]").click();
    await expect(page.locator("(//button[text()='Apple'])[2]")).not.toBeFocused();
    console.log("Radio buttons(apple) horizontal can be checked");
});
test('terms', async ({ page }) => {
    await page.locator("(//span[@class='mat-checkbox-inner-container'])[1]").click();
    await expect(page.locator("(//span[@class='mat-checkbox-inner-container'])[1]")).toBeChecked();
    console.log("Caption on the right side can be checked");
    await page.locator("(//span[@class='mat-checkbox-inner-container'])[1]").click();
    await expect(page.locator("(//span[@class='mat-checkbox-inner-container'])[1]")).not.toBeChecked();
    console.log("Caption on the right side can be unchecked");
    await page.locator("(//span[@class='mat-checkbox-inner-container'])[2]").click();
    await expect(page.locator("(//span[@class='mat-checkbox-inner-container'])[2]")).toBeChecked();
    console.log("Caption on the left side can be checked");
    await page.locator("(//span[@class='mat-checkbox-inner-container'])[2]").click();
    await expect(page.locator("(//span[@class='mat-checkbox-inner-container'])[2]")).not.toBeChecked();
    console.log("Caption on the left side can be unchecked");
    await page.locator("(//span[@class='mat-checkbox-inner-container'])[3]").click();
    await expect(page.locator("(//span[@class='mat-checkbox-inner-container'])[3]")).toBeChecked();
    console.log("Caption with a link to show more content can be checked");
    await page.locator("(//span[@class='mat-checkbox-inner-container'])[3]").click();
    await expect(page.locator("(//span[@class='mat-checkbox-inner-container'])[3]")).not.toBeChecked();
    console.log("Caption with a link to show more content can be unchecked");  
});
 

  