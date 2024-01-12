describe('Favori Yönetimi - Ürün Ekleme ve Çıkarma', () => {

it('Favorilere Ürün Ekleme ve Çıkarma ', () => {


  cy.visit("https://www.kitapyurdu.com/index.php?route=account/login");
  cy.get("[id='login-email']").type("ayseodevdeneme@gmail.com");
  cy.get("[id='login-password']").type("deneme11");
  cy.get("[class='ky-btn ky-btn-orange w-100 ky-login-btn']").click();
    
  cy.wait(3000);
  cy.get("[id='search-input']").type("nutuk");
  cy.get("[class='common-sprite button-search']").click();
  cy.get("[class='sprite sprite-stars-5']").click();
  cy.get(".filter-item[onclick=\"filterSelected('publisher', '7');\"]").click();
  cy.get("[href='https://www.kitapyurdu.com/kitap/nutuk-sozlugu/424799.html&filter_name=nutuk']").first().click();
  cy.get("[class='personal-lists__text']").first().click();
  cy.wait(3000);
  cy.get("[href='https://www.kitapyurdu.com/index.php?route=account/account']").first().click();
  cy.get("[class='fa fa-heart fa-fw']").click();
  cy.get("[class='image']").click();
  cy.get("[class='sprite__product icon__favourite-active icon--dimension-addlist']").first().click();
  cy.wait(3000);
 })
  
})

