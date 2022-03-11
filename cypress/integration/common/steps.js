
Given('I navigate to login page', ()=> {
    loginPage.navigate();
})

Given('I login as standard user', (table)=> {
    table.hashes().forEach(row => {
        loginPage.enterUsername(row.username)
        loginPage.enterPassword(row.password)
        loginPage.clickLoginButton()
    }); 
})
