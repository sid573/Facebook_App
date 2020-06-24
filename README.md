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

# Messenger Docs
## Idea
To have a messenger app for a shop with extra features during corona virus pandemic.

## Features
First the conversation will be done by quick replies.
Stock of each item will be stored in our database(GraphQL).
And if user asks about stock of any item our messenger will display it.
 User can also book the available time slots using quick replies.
If any extra queries will be there we will handover it to shopkeeper.
Notifications will be generated prior to the time slot and if any stock is available that user has told us to remind them when available.


## Submission:

### What it does:
Me-Omics messenger bot helps reduce and maintain the number of customers at a time in a particular shop.

Using messenger, Me-Omics allow customers to place orders for your daily household need products separated in different categories. 
Customer can select pick-up/visiting date and time.
Notify the user few minutes before his/her selected time slot.
Copy of final order PDF generated accessible to both the customer and shop.
Different shops can be registered through the app, providing each shop with a bot. (Currently only for a shop)

### How we built it:
Used the messenger API with node.js express for backend.
Webview was built using HTML, javascript.
Mongodb for database.

### Challenges we ran into:
Connecting all APIs and connecting app with the webhook.
Rendering web view template dynamically.

### Accomplishments that We're proud of:
We don't have deep experience with node.js and messenger APIs but we tried our best to justify the project.

### What We learned
Learned how to make an interactive messenger bot.
Learned how to host web apps and make API calls in and around.
Learned to incorporate webpages in messenger bot.

### What's next for Me-omics:
Incorporating handover protocol wherein customers can contact the shopkeeper directly in case of any difficulty.
A registration system for different shops.
