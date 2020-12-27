# What's in the folder
We separate this project into two parts, **frontend** and **backend**.

## frontend
In the **frontend** folder, intro below describes folders in **src**:

+-- **api**: index includes a factory gathering all the api methods; interceptor controls user's permission to get data<br/>
+-- **components**: here are components shared by views<br/>
+-- **dummies**: here are mocked data which were used when api hadn't finished<br/>
+-- **layout**: here are layouts designed for two different roles<br/>
+-- **router**: index sets all the routes; permission controls the routing behavior<br/>
+-- **stores**: here is a data store used when views sharing the same data<br/>
+-- **views**: here are views user sees in the website<br/>
App.vue: this is the top layer of all the views<br/>

## backend
In the **backend** folder, intro below describes folders inside:

+-- **config**: here is all database config settings<br/>
+-- **controllers**: here are api controllers which identify the permission of the requests from the client side<br/>
+-- **models**: models are what access needed data from the database<br/>
+-- **routes**: routes set all the api path with corresponding controller or model<br/>
