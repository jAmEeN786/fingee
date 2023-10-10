import { chromium,expect,test,Page } from "@playwright/test";
test.describe.configure({ mode: 'serial' });
test.use({
        viewport:{
            width: 1024,
            height:768
        }})
describe("greet ",()=>{
test.beforeEach('Open start URL', async ({ page }) => {
    await page.goto('http://192.168.1.49:8086/');
    await page.locator("//mat-icon[text()='view_comfy']").click();
    await page.locator("//span[text()='Fingress Explorer']").click();
    await page.locator("(//span[@class='fa fa-chevron-down fg-menu-chevron-icon'])[2]").click();
    await page.locator("//span[text()='Static']").click();
});
        
test('Paragraph', async ({ page }) => {
    
    await expect(page.locator("(//span[@class='p ng-star-inserted'])[1]")).toBeVisible();
    console.log("Entered paragraph title text is visibled");
    await expect(page.locator("(//p[@class='p ng-star-inserted'])[1]")).toBeVisible();
    console.log("Entered paragraph inside text is visibled");
});
test('Heading',async({page})=>{
    await expect(page.locator("(//span[@class='p ng-star-inserted'])[2]")).toBeVisible();
    console.log("Entered heading title text is visibled");
    await expect(page.locator("(//p[@class='h1 fc-red ng-star-inserted'])[1]")).toHaveCSS('font-size','40px');
    await expect(page.locator("(//p[@class='h1 fc-red ng-star-inserted'])[1]")).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    console.log("Heading 1 text visibled as red color with 40px font size");
    await expect(page.locator("(//p[@class='h2 fc-pink ng-star-inserted'])[1]")).toHaveCSS('font-size','32px');
    await expect(page.locator("(//p[@class='h2 fc-pink ng-star-inserted'])[1]")).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    console.log("Heading 2 text visibled as pink color with 32px font size");
    await expect(page.locator("(//p[@class='h3 fc-purple ng-star-inserted'])[1]")).toHaveCSS('font-size','28px');
    await expect(page.locator("(//p[@class='h3 fc-purple ng-star-inserted'])[1]")).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    console.log("Heading 3 text visibled as purple color with 28px font size");
    await expect(page.locator("(//p[@class='h4 fc-deep-purple ng-star-inserted'])[1]")).toHaveCSS('font-size','24px');
    await expect(page.locator("(//p[@class='h4 fc-deep-purple ng-star-inserted'])[1]")).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    console.log("Heading 4 text visibled as deep purple color with 24px font size");
    await expect(page.locator("(//p[@class='h5 fc-brown ng-star-inserted'])[1]")).toHaveCSS('font-size','20px');
    await expect(page.locator("(//p[@class='h5 fc-brown ng-star-inserted'])[1]")).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    console.log("Heading 5 text visibled as brown color with 20px font size");
    await expect(page.locator("(//p[@class='h6 fc-lime ng-star-inserted'])[1]")).toHaveCSS('font-size','16px');
    await expect(page.locator("(//p[@class='h6 fc-lime ng-star-inserted'])[1]")).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    console.log("Heading 6 text visibled as lime color with 16px font size");
});
test('Block quote',async({page})=>{
    await expect(page.locator("(//span[@class='p ng-star-inserted'])[3]")).toBeVisible();
    console.log("Entered block quote title text is visibled");
    await expect(page.locator("(//blockquote[@class='ng-star-inserted'])[1]")).toBeVisible();
    console.log("Entered block quote inside text is visibled along with footer");
    await expect(page.locator("(//footer[@class='blockquote-footer ng-star-inserted'])[1]")).toBeVisible();
    console.log("Block quote footer text is visibled");
});
test('Numbered ordered list',async({page})=>{
    await expect(page.locator("(//p[@class='p ng-star-inserted'])[2]")).toBeVisible();
    console.log("numbered ordered list title text is visibled");
    let k=1;
        for(k=1;k<4;k++)
        {
            await expect(page.locator(`(//span[text()=" List item ${k} "])[1]`)).toBeDefined();
            console.log(`List item ${k} can be defined`);
        }
    console.log("List of items can be defined in the manner of (numbered) ordered list");
});
test('Bullet ordered list',async({page})=>{
    await expect(page.locator('(//span[@class="p ng-star-inserted"])[7]')).toBeVisible();
    console.log("bullet ordered list title text is visibled");
    let k1=1;
        for(k1=1;k1<4;k1++)
        {
            await expect(page.locator(`(//span[text()=" List item ${k1} "])[2]`)).toBeDefined();
            console.log(`List item ${k1} can be defined`);
        }
    console.log("List of items can be defined in the manner of (bullet) ordered list");
});
test('Decorated ordered list',async({page})=>{   
    await expect(page.locator('(//span[@class="p ng-star-inserted"])[11]')).toBeVisible();
    console.log("decorated list title text is visibled");
    let k2=3;
        for(k2=3;k2<=5;k2++)
            { 
              await expect(page.locator(`(//i[@aria-hidden='true'])[${k2}]`)).toBeVisible();
              console.log(`decorated list item ${k2-2} image is visibled`);
              await expect(page.locator(`//p[@class="p ng-star-inserted"])[${k2+2}]`)).toBeDefined();
              console.log(`decorated list items ${k2-2} can be defined`);
            }
});
test('Table data',async({page})=>{
    await expect(page.locator("(//span[@class='p ng-star-inserted'])[12]")).toBeVisible();
    console.log("Table title text can be defined");
    await expect(page.locator('(//div[@class="card-body container-fluidy ng-star-inserted"])[7]')).toHaveCSS("text-align","left");
    console.log("Data's arranged in left middle in the each box of table.");
    await expect(page.locator('(//div[@class="card-body container-fluidy ng-star-inserted"])[7]')).toHaveCSS("box-sizing","border-box");
    console.log("Tables columns and rows are differentiated by border");
    await page.locator("//a[text()=' More']").click();
    await expect(page.locator('(//div[@class="card-body container-fluidy ng-star-inserted"])[7]')).toHaveCSS("height","596px");
    console.log("table height is expanded and data's expanded to more than 5.");
    console.log("more option clickable");
    await page.locator("//a[text()=' Less']").click();
    await expect(page.locator('(//div[@class="card-body container-fluidy ng-star-inserted"])[7]')).toHaveCSS("height","433.797px");
    console.log("table height is resized and data's reduced to 5.");
    console.log("less option clickable");
}); 
test('Rich text',async({page})=>{    
    await expect(page.locator("//p[text()=' Rich Text ']")).toBeVisible();
    console.log("Rich text title text is visibled");
    await page.locator("(//button[@type='button'])[2]").hover();
    await expect(page.locator("(//button[@type='button'])[2]")).toHaveCSS("background-color","rgb(0, 123, 255)");
    console.log("signup free button is hovered");
    await page.locator("(//button[@type='button'])[2]").click();
    await expect(page.locator("(//button[@type='button'])[2]")).toBeEnabled();
    console.log("signup free button is clicked");
    await page.locator("(//button[@type='button'])[3]").hover();
    await expect(page.locator("(//button[@type='button'])[3]")).toHaveCSS("background-color","rgb(0, 105, 217)");
    console.log("get started button is hovered");
    await page.locator("(//button[@type='button'])[3]").click();
    await expect(page.locator("(//button[@type='button'])[3]")).toBeEnabled();
    console.log("signup free button is deselected and get started button is clicked");
    await page.locator("(//button[@type='button'])[4]").hover();
    await expect(page.locator("(//button[@type='button'])[4]")).toHaveCSS("background-color","rgb(0, 105, 217)");
    console.log("contact us button is hovered");
    await page.locator("(//button[@type='button'])[4]").click();
    await expect(page.locator("(//button[@type='button'])[4]")).toBeEnabled();
    console.log("get started button is deselected and contact us button is clicked");

});
});