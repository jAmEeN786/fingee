import { chromium,expect,test,Page } from "@playwright/test";
test.describe.configure({ mode: 'serial' });
test.use({
        viewport:{
            width: 1024,          //"test": "cucumber-js test"
            height:768
        }})
test.beforeEach('Open start URL', async ({ page }) => {
    await page.goto('http://192.168.1.49:8086/');

    //await page.locator("//mat-icon[text()='view_comfy']").click();
    await page.getByTestId("mat-focus-indicator mat-menu-trigger mat-button mat-button-base").first().click();
    
    //await page.locator("//span[text()='Fingress Explorer']").click();
    await page.getByTestId("app-name").first().click();

    //await page.locator("(//span[@class='fa fa-chevron-down fg-menu-chevron-icon'])[2]").click();
    await page.getByTestId("fa fa-chevron-down fg-menu-chevron-icon").nth(1).click();
    
    //await page.locator("//span[text()='Form Elements']").click();
    await page.getByTestId("mat-ripple mat-menu-ripple").first().click();

    //await page.locator("//div[text()='Selection']").click();
    await page.getByTestId("mat-tab-label-content").nth(3).click();
    
});
test.only('Simple dropdown select-select', async ({ page }) => {
    
    await expect(page.locator("//mat-label[text()='Select ']")).toContainText("Select ");
    console.log("'Select' comment is visibled in placeholder");
    await page.locator("//mat-label[text()='Select ']").click(); 
    await page.locator("//span[text()='Banana ']").click();
    await expect(page.locator("//mat-select-trigger[text()=' Banana ']")).toContainText("Banana ");
    console.log("single(Banana) value only will be selected from dropdown");
    await page.locator("//mat-label[text()='Select ']").click(); 
    await page.locator("//span[text()='Orange ']").click();
    await expect(page.locator("//mat-select-trigger[text()=' Orange ']")).toContainText("Orange ");
    console.log("Banana deselected and orange will be selected");
    await page.pause();
});
test('Simple dropdown select-select with search', async ({ page }) => {
    await expect(page.locator("//mat-label[text()='Select with search ']")).toContainText("Select with search ");
    console.log("'Select with search' comment is visibled in placeholder");
    await page.locator("//mat-label[text()='Select with search ']").click();
    await page.locator("//input[@placeholder='Search...']").fill('o');
    await page.locator("//span[text()='Orange ']").click();
    await expect(page.locator("//mat-select-trigger[text()=' Orange ']")).toContainText(" Orange ");
    console.log("single(Orange) value only will be selected from dropdown");
    await page.locator("//mat-label[text()='Select with search ']").click();
    await page.locator("//input[@placeholder='Search...']").clear();
    await page.locator("//input[@placeholder='Search...']").fill('a');
    await page.locator("//span[text()='Apple ']").click();
    await expect(page.locator("//mat-select-trigger[text()=' Apple ']")).toContainText(" Apple ");
    console.log("selected(Orange) value is deselected and single(apple) value is selected from dropdown");
});
test('Simple dropdown select-select with search and decoration', async ({ page }) => {
    await expect(page.locator("//mat-label[text()='Select with search and decoration ']")).toContainText("Select with search and decoration ");
    console.log("'Select with search and decoration ' comment is visibled in placeholder");
    await page.locator("//mat-label[text()='Select with search and decoration ']").click();
    await page.locator("//input[@placeholder='Search...']").fill("a");
    await page.locator("//span[text()='Australia ']").click();
    await expect(page.locator("//mat-select-trigger[text()=' Australia ']")).toContainText(' Australia ');
    console.log("selected(Australia) value is selected from dropdown");
    await page.locator("//mat-icon[text()='close']").click();
    await expect(page.locator("//mat-label[text()='Select with search and decoration ']")).toContainText("Select with search and decoration ");
    console.log("Value is deselected and 'Select with search and decoration ' comment is visibled in placeholder");
    await page.locator("//mat-label[text()='Select with search and decoration ']").click();
    await page.locator("//input[@data-placeholder='Search...']").clear();
    await page.locator("//input[@data-placeholder='Search...']").fill("b");
    await page.keyboard.press("Enter");
    await expect(page.locator("//div[text()=' No matching items. ']")).toContainText(" No matching items. ");
    console.log("no items found based on search keyword");
});
test('Multi select dropdown', async ({ page }) => {
    await page.locator('#mat-select-4').click(); 
    await page.getByPlaceholder('Search...').fill('F');
    await page.keyboard.press('Enter');
    await expect(page.locator("//mat-option[@role='option'][1]")).toContainText("f");
    console.log("Items searched based on search keyword");
    await page.locator("//span[text()='France ']").click();
    console.log("Searched item can be selected");
});
test('Components-->Form elements-->Selectionss', async ({ page }) => {
    await page.locator('#mat-select-8').click();
    await page.getByPlaceholder('Search...').fill("A");
    await page.keyboard.press('Enter');
    await expect(page.locator("//mat-option[@role='option'][1]")).toContainText("A");
    console.log("Items searched based on search keyword");
    console.log("But items cant taken to process");
   });