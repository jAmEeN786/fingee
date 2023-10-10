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
});
        
test('Name', async ({ page }) => {
    const value = 'jameen';
    await expect(value,'Name is required').toContain("");
    await page.locator("(//input[@type='text'])[1]").fill(value);
    console.log('Name:'+value);
    console.log('Value length:'+value.length);
    if(value.length<=2)
    {
      console.log('Name should be contain minimum 3 characters-(Invalid name)');
    }
    else
    {
      console.log('Valid name');
    }
});
test('Email', async ({ page }) => {
    const value = 'jameenmohamed5@gmail.com';
    await page.locator("(//input[@type='text'])[2]").fill(value);
    console.log('Email:'+value);
    await expect(value,'email is invalid').toContain('@gmail.com');
    console.log('email is valid');
});
test('Password', async ({ page }) => {
    const value = 'jameenmohamed';
    await page.locator("//input[@type='password']").fill(value);
    console.log('password:'+value);
    await expect(value,'password should be masked').toBeDefined
    //await expect(page.keyboard.press('Control+.'),'password should be masked').toMatch(value);
});
test('Age', async ({ page }) => {
    const value = '10';
    await page.locator("//mat-label[text()='Age']").fill(value);
    await expect(value,'Age is not defined').toBeDefined();
    console.log('age:'+value);
});
/*test('Input scale', async ({ page }) => {
    await page.locator("//input[@name='tempVal']").click({"10","0"});
});*/
test('Large text', async ({ page }) => {
    const value ='jameen is good tester';
    await page.locator("//textarea[contains(@class,'mat-input-element mat-form-field-autofill')]").fill(value);
    await expect(value,'text is required').toBeDefined();
    console.log('text is required');
    console.log('text:'+value);
    console.log('Value length:'+value.length);
    if(value.length<=2 && value.length>50)
      {
        console.log('Name should be contain minimum 3 characters-(Invalid name)');
      }
    else
      {
        console.log('Valid length text');
      }
});
test('Rich text-part1', async ({ page }) => {
    
    /* 6-undo/7-redo/8-bold/9-italic/10-underline/11-strikethrough/12-subscript
       13-superscript/14-justify left/15-justify center/16-justify right/17-justify full
       18-indent/19-outdent/20-unordered list/21-ordered list//47-textcolor/48-background color/
       58-horizontal line/59-clear formatting/ 60-HTML code/ */
    const j=8;
    const value1='Jameen is a good TESTER.so bluescope will get benefit by him.';
    await page.locator("//div[@class='angular-editor-textarea']").fill(value1);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(3000);
    await page.locator(`(//button[@type='button'])[${j}]`).click();
});
test('Rich text-part2', async ({ page }) => { 
    /* 
     0-standard dropdown-->/ Heading 1 to7 / Paragraph / Predefined /Standard / default / 
     1-timesnew dropdown-->/ Arial /Times New Roman / Calibri / Comic Sans MS /
     2-fontsize dropdown-->/ 1 /to/ 7 /
     3-clear class dropdown-->/ Clear Class / quote / redText / titleText /  */ 
    let i=0;
    const value='Jameen is a good TESTER.so bluescope will get benefit by him.';
    await page.locator("//div[@class='angular-editor-textarea']").fill(value);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(3000);
    await page.locator("//button[@class='ae-picker-label']").nth(i).click();
    await page.locator("//button[text()=' Heading 1 ']").click();
});     
     //22
test('Rich text-part3-image', async ({ page }) => {  
     /*
      56-insert Image-Insert Image link
      */
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator("//button[@id='insertImage-']").click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles("hi.jpg");
    
});
test('Rich text-part3-video/url', async ({ page }) => {
    /*54-insert link/Insert URL link
      55-something/
      57-insert Video-Insert Video link
    */
    await page.locator("//button[@id='insertVideo-']").click();
    page.on('dialog', async dialog => {
    // Verify Dialog Type is prompt  
    expect(dialog.type()).toContain('prompt');  
    // Verify Dialog Message  
    expect(dialog.message()).toContain('Insert Video link');
    //Verify Default Input Value
    expect(dialog.defaultValue()).toContain('https://');
    const URL="google.com"
    // Click on OK Button with any value
    await dialog.accept("http://google.com");
  });
});   
  // Click on Prompt Button
  //await page.click('#prompt-button');
      
  // Verify Message after clicking on Ok button
  //await expect(page.locator('#msg')).toHaveText(`You have entered URL: ${URL}`)

 
