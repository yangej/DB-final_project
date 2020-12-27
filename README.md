We separate this project into two parts, frontend and backend.

In the frontend folder, you could see all the source codes in src folder:

-- api: index includes a factory code gathering all the api methods; interceptor controls user's permission to get data
-- components: here are components shared by views
-- dummies: here are mocked data which were used when api hadn't finished
-- layout: here are layouts designed for two different roles
-- router: index sets all the routes; permission controls the routing behavior
-- stores: here is a data store used when views sharing the same data
-- views: here are views user sees in the website
App.vue: this is the top layer of all the views

In the backend folder, here are the content intro below:

-- config: here is all database config settings
-- controllers: here are api controllers which identify the permission of the requests from the client side
-- models: models are what access needed data from the database
-- routes: routes set all the api path with corresponding controller or model
