## Create a Blog RSS Engine using Next.js
Project: Create a Blog RSS Engine using Next.js

### Introduction to the project
In this project I’m going to create a Web Application using Next.js.

To goal is to build an app where people can view the latest posts from a list of blogs we selected.

This is the end result we’ll get to:

![image](https://user-images.githubusercontent.com/527135/127383466-d5faee38-743b-47e3-a0d7-a590eb78c968.png)

People can click the “Add a new blog” link and submit a new blog though a form:

![image](https://user-images.githubusercontent.com/527135/127383475-8993d72c-1f93-4d25-bd5b-dcfcad0741cf.png)

We’ll store the data using Airtable as our backend of choice, and we’ll use it to approve the blogs proposed by our users.

The list of blog posts will be fetched from the blog posts RSS/Atom feeds.

And here comes into play one feature of Next.js that will be at the core of our app: the home page and the form pages will be static pages, generated at build time, but at the same time our API will be handled by the server-side code.

We must generate the home page at build time, in particular, because otherwise we’d quickly hit the Airtable API limits, and also it would take a lot of time to keep parsing the RSS feeds, and we’d be causing a waste of resources.

After the app is deployed on Now we’ll be able to set up a deploy hook to rebuild the application every hour, for example.
