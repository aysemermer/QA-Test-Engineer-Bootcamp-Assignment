describe('Cart Operations', () => {

    it('Add to Cart - Update Cart', () => {
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
  
      cy.get("[id='product-668162']").first().click();
      cy.get("[id='button-cart']").click();
      cy.get("[id='cart-items']").click();
      cy.get("[id='js-cart']").click();
      
      cy.get("[name='quantity']").click();
      cy.get("[name='quantity']").clear();
      cy.get("[name='quantity']").type('3');
      cy.get("[class='fa fa-refresh green-icon']").click();
  
      cy.get("[name='quantity']").click();
      cy.get("[name='quantity']").clear();
      cy.get("[name='quantity']").type('2');
      cy.get("[class='fa fa-refresh green-icon']").click();
  
      cy.get("[name='quantity']").click();
      cy.get("[name='quantity']").clear();
      cy.get("[name='quantity']").type('1');
      cy.get("[class='fa fa-refresh green-icon']").click();
  
      cy.get('.alert.warning').should('contain', 'Sipariş verebilmeniz için sepet tutarı en az');
    });
  
  });