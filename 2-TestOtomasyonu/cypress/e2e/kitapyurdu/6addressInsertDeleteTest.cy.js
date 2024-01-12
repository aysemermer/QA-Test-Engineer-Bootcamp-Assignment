describe('Address Insert and Delete Test', () => {

    it('Login, Insert and Delete Address Test', () => {
    cy.visit("https://www.kitapyurdu.com/index.php?route=account/login");
    cy.get("[id='login-email']").type("ayseodevdeneme@gmail.com");
    cy.get("[id='login-password']").type("deneme11");
    cy.get("[class='ky-btn ky-btn-orange w-100 ky-login-btn']").click();
  
    cy.wait(2000);
  
    cy.get("[href='https://www.kitapyurdu.com/index.php?route=account/account']").first().click();
    cy.get("[href='https://www.kitapyurdu.com/index.php?route=account/address']").first().click();
    cy.get("[href='https://www.kitapyurdu.com/index.php?route=account/address/insert']").click();
    
    //Adres Başlığı 
    cy.get("[id='address-title']").click();
    cy.get("[id='address-title']").clear();
    cy.get("[id='address-title']").type('QA BOOTCAMP');

    //Ad - Şirket Adı 
    cy.get("[id='address-firstname-companyname']").click();
    cy.get("[id='address-firstname-companyname']").clear();
    cy.get("[id='address-firstname-companyname']").type('techcareer');

    //Soyad - Ünvan 
    cy.get("[id='address-lastname-title']").click();
    cy.get("[id='address-lastname-title']").clear();
    cy.get("[id='address-lastname-title']").type('odevdeneme');

    //il Seçimi
    const ankaraValue = "3321";
    cy.get("#address-zone-id").select(ankaraValue);

    //Seçilen İle Bağlı İlçe Seçimi
    const mamakValue = "83"; 
    cy.get("#address-county-id").select(mamakValue);

    //Adres 
    cy.get("[id='address-address-text']").click();
    cy.get("[id='address-address-text']").clear();
    cy.get("[id='address-address-text']").type('anakara-mamak-123');

    //Telefon Numarası  
    cy.get("[id='address-mobile-telephone']").click();
    cy.get("[id='address-mobile-telephone']").clear();
    cy.get("[id='address-mobile-telephone']").type('5447894545');

    //Adresi Kaydetme
    cy.get("[class='btn-address-save']").click();

    //Adresi Silme 
    cy.get("[class='button delete-address']").first().click();
    
    //Silmek İçin Onay
    cy.get("[class='swal2-confirm swal2-styled']").click();
    
    cy.get(".success").should("contain", "Adresinizi başarılı bir şekilde sildiniz");

    })
  
  })
  