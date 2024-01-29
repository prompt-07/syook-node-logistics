### node-logistics

>Step 1 : Clone repo\
>Step 2 : install necessary dependencies\
>Step 3 : run **npm run devStart** in terminal

---

##### useful urls and payloads for testing
login first and get jwt

1. ITEMS\
http://localhost:8000/api/items/create \
payload
```json
{
    "name" : "demo",
    "price" :  400
}
```

http://localhost:8000/api/items/update \
payload
```json
{
    "itemName" : "demo",
    "newPrice" : 400
}
```
---

2. CUSTOMER\

http://localhost:8000/api/customer/get/Demo%20User 

http://localhost:8000/api/customer/create \
payload
```json
{
    "name": "Demo User",
    "city": "Pune"
}
```
---

3. LOGIN\
http://localhost:8000/user/login \
payload
```json
{
    "username": "rambo",
    "hashedpassword": "password123"
}
```
---

4. ORDERS\
http://localhost:8000/api/orders/create \
payload
```json
{
    "itemId": "BBB",
    "customerId": "61f6b38000bdc9e79d888206"
}
```
http://localhost:8000/api/orders/update \
payload
```json
{
    "orderId": "61f6e331985f86b2bfea4064",
    "isDelivered": true
}
```
---

5. DELIVERY VEHICLES\
http://localhost:8000/api/delivery-vehicle/create \
payload
```json
{
    "registrationNumber": "VV7812",
    "vehicleType": "truck",
    "city": "Pune"
}
```
