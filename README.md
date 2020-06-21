# Facebook_App
Hackathon Facebook

## Installing mongodb
- [Instruction to install mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

- Also enable it using deamons 

## Creating Role for mongodb
- `$ mongo`
- `> use facebook` 
- `> db.createUser({user: "me-omics",pwd: "mongo101",roles: [{ role: "readWrite", db: "facebook" }]})`

## To login mongo console with new user
- `$ mongo -u me-omics -p 'mongo101' --authenticationDatabase 'facebook'`
