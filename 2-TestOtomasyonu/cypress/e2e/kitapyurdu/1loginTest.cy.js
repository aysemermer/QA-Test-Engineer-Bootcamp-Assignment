describe('Login Test', () => {

it('Login Test', () => {
  
    cy.visit("https://www.kitapyurdu.com/index.php?route=account/login");
    cy.get("[id='login-email']").type("ayseodevdeneme@gmail.com");
    cy.get("[id='login-password']").type("deneme11");
    cy.get("[class='ky-btn ky-btn-orange w-100 ky-login-btn']").click();
    cy.wait(4000);

  })
  
})
