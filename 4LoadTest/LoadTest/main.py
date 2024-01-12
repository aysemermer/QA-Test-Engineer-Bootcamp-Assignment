from locust import HttpUser, task, between

class MyUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def post_create_user(self):
        data = {
            "id": 1234,
            "username": "ayse23",
            "firstName": "ayse",
            "lastName": "loadtest",
            "email": "ayseodevdeneme@test.com",
            "password": "1234",
            "phone": "5555555555",
            "userStatus": 0
        }
        self.client.post("/v2/user", json=data)
        self.wait()

    @task
    def get_login(self):
        self.client.get("/v2/user/login?username=ayse23&password=1234")
        self.wait()

    @task
    def get_logout(self):
        self.client.get("/v2/user/logout")
        self.wait()

    @task
    def delete_delete_user(self):
        self.client.delete("/v2/user/ayse23")
        self.wait()

    @task
    def put_update_user(self):
        data = {
            "id": 200070,
            "username": "ayse07",
            "firstName": "ayse45",
            "lastName": "loadtest2",
            "email": "ayseodevdeneme@test.com",
            "password": "454545",
            "phone": "8528528552",
            "userStatus": 0
        }
        self.client.put("/v2/user/ayse23", json=data)
        self.wait()

    @task
    def post_create_with_list(self):
        data_list = [
        {
            "id": 12346,
            "username": "ayse30",
            "firstName": "ayse",
            "lastName": "loadddtest",
            "email": "odevdeneme@test.com",
            "password": "123",
            "phone": "44440444",
            "userStatus": 0
        },

        {
        "id": 12345,
        "username": "ayse20",
        "firstName": "ayse",
        "lastName": "loadddtest",
        "email": "odevdeneme2@test.com",
        "password": "123",
        "phone": "3330333",
        "userStatus": 0
        }
        ]
        self.client.post("/v2/user/createWithList", json=data_list)
        self.wait()

