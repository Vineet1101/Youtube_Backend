Steps for any backend related project, tech stack doesn't matter these are logical steps that must be performed.

1.) Make the appropriate folders for each type of files. Generally db (For connecting database), controllers(for writing controller logic), models (for writing database models), routes( for routing logic), and app.ts constants.ts and index.ts file for initialization of the app and server

2.) Add code for connecting to db first in db/index.ts folder
2a) Database is always in another continent so always use try catch and async await to connect to db and gracefully handle errors
2b) When you import that fn in main index file then make sure to add .then and .catch after calling that fn because that fn still return promise so we have to handle that

3) Write custom api and errors for your app