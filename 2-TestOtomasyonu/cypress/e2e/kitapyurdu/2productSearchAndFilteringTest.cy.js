describe('Product Search and Filtering', () => {

  it('Product Search - Filtering', () => {
    cy.visit("https://www.kitapyurdu.com/index.php?route=account/login");
    cy.get("[id='login-email']").type("ayseodevdeneme@gmail.com");
    cy.get("[id='login-password']").type("deneme11");
    cy.get("[class='ky-btn ky-btn-orange w-100 ky-login-btn']").click();
    cy.wait(4000);

    cy.get("[id='search-input']").type("2024 ajanda");
    cy.get("[class='common-sprite button-search']").click();

    cy.get("[name='selected_sell_price_min']").click();
    cy.get("[name='selected_sell_price_min']").type("10");

    cy.get("[name='selected_sell_price_max']").click();
    cy.get("[name='selected_sell_price_max']").type("100");

    cy.get("[onclick='postPriceInterval();']").click();

    cy.get("[class='sprite sprite-stars-2']").click();
    
  });

});



