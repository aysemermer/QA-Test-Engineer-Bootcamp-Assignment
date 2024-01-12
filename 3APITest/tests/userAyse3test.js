const chakram = require('chakram'),
 expect = chakram.expect;

describe("User Module", function() {

     it("POST - CreateUser", function () {
         const resBody = {"code":200,"type":"unknown","message":"1234"};

        const body = {
            "id": 1234,
            "username": "ayse1234",
            "firstName": "ayse",
            "lastName": "odev",
            "email": "ayseodevdenemeomail.com",
            "password": "1234",
            "phone": "5555555555",
            "userStatus": 0
          };
        const response = chakram.post("https://petstore.swagger.io/v2/user", body);
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json'); 
        return chakram.wait();
     });

     it("GET - GetUserInfo", function () {
      const resBody = {
         "id": 1234,
         "username": "ayse1234",
         "firstName": "ayse",
         "lastName": "odev",
         "email": "ayseodevdenemeomail.com",
         "password": "1234",
         "phone": "5555555555",
         "userStatus": 0
     };

        const response = chakram.get("https://petstore.swagger.io/v2/user/ayse1234");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody);
        expect(response).to.have.header('content-type', 'application/json'); 
        return chakram.wait();
     });

     it("DELETE - DeleteUser", function () {
      const resBody = {
         "code": 200,
         "type": "unknown",
         "message": "ayse1234"
     };
        const response = chakram.delete("https://petstore.swagger.io/v2/user/ayse1234");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json'); 
        return chakram.wait();
     });

     it("PUT - UpdateUserInfo", function () {
      const resBody = {
         "code": 200,
         "type": "unknown",
         "message": "1234"
     };

        const body = {
            "id": 1234,
            "username": "ayse1234",
            "firstName": "ayse",
            "lastName": "odev",
            "email": "codevimdenemeamail.com",
            "password": "1234",
            "phone": "44444444",
            "userStatus": 0
          };
        const response = chakram.put("https://petstore.swagger.io/v2/user/ayse1234", body);
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody); 
        expect(response).to.have.header('content-type', 'application/json'); 
        return chakram.wait();
     });

     it("GET - GetUserInfo", function () {
      const resBody = {
            "id": 1234,
            "username": "ayse1234",
            "firstName": "ayse",
            "lastName": "odev",
            "email": "codevimdenemeamail.com",
            "password": "1234",
            "phone": "44444444",
            "userStatus": 0
     };

        const response = chakram.get("https://petstore.swagger.io/v2/user/ayse1234");
        expect(response).to.have.status(200);
        expect(response).to.comprise.of.json(resBody);
        expect(response).to.have.header('content-type', 'application/json'); 
        return chakram.wait();
     });

     it("GET - GetUserInfo Nonexistent User", function () {
      const resBody = {
          "code": 1,
          "type": "error",
          "message": "User not found"
      };
  
      const response = chakram.get("https://petstore.swagger.io/v2/user/aysedeneme123");
      expect(response).to.have.status(404);
      expect(response).to.comprise.of.json(resBody);
      expect(response).to.have.header('content-type', 'application/json');
      return chakram.wait();
     });

     it("DELETE - DeleteNonexistentUser", function () {
      const nonexistentUsername = "aysedeneme11";
      const response = chakram.delete(`https://petstore.swagger.io/v2/user/aysedeneme11`);

      return response.then(function (res) {
          expect(res).to.have.status(404);
          return chakram.wait();
      });
     });


});