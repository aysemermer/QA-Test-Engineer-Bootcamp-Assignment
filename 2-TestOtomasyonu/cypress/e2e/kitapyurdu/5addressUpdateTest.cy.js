describe('Address Update Test', () => {

  it('Login and Update Address Test', () => {
    cy.visit("https://www.kitapyurdu.com/index.php?route=account/login");
    cy.get("[id='login-email']").type("ayseodevdeneme@gmail.com");
    cy.get("[id='login-password']").type("deneme11");
    cy.get("[class='ky-btn ky-btn-orange w-100 ky-login-btn']").click();

    cy.wait(4000);

    // cy.get("[href='https://www.kitapyurdu.com/index.php?route=account/account']").first().click();
    cy.get("[href='https://www.kitapyurdu.com/index.php?route=account/address']").first().click();
    cy.get("[href='https://www.kitapyurdu.com/index.php?route=account/address/update&address_id=11516437']").click();
    
    //Adres Başlığı Değiştirme
    cy.get("[id='address-title']").click();
    cy.get("[id='address-title']").clear();
    cy.get("[id='address-title']").type('bootcamp');

    //Ad - Şirket Adı Değiştirme
    cy.get("[id='address-firstname-companyname']").click();
    cy.get("[id='address-firstname-companyname']").clear();
    cy.get("[id='address-firstname-companyname']").type('asya');

    //Soyad - Ünvan Değiştirme
    cy.get("[id='address-lastname-title']").click();
    cy.get("[id='address-lastname-title']").clear();
    cy.get("[id='address-lastname-title']").type('odevdeneme');
   
    //Adres Değiştirme
    cy.get("[id='address-address-text']").click();
    cy.get("[id='address-address-text']").clear();
    cy.get("[id='address-address-text']").type('odev adres degisimi 123 no 123');
    
    cy.get("[class='btn-address-save']").click();
    cy.get(".success").should("contain", "Adresinizi başarılı bir şekilde güncellediniz");
    
  })

})
