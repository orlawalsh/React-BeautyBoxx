# Assignment 1 - ReactJS app.

Name: Orla Walsh

## Overview.
The concept of this application is for users to be able to search, add products and review products. To reduce the amount of reviws, the reviews are all stored within the product. The user can search for a product by brand or name to check to see if someone has already added that product. If the product is there, the user can click the name of the product and add their review to that product. If the product is not there, the user can add the product, once it is added they can then review it. When adding the product, the user can upload a picture of the product, add the name, brand, price and description of the product. When adding a review, the user must enter a username, select the product they are reviewing and then review the product, the date is added automatically and the review is then displayed underneath the product. They can also see all reviews on a seperate page. Other users can then see all the reviews for that product.

#### List of user features
 
 + Add a product
 + Edit product
 + Delete product
 + Search product
 + Add a review
 + Navbar with routes
 + Contact page

### Installation requirements.
+ ReactJS v15.6.1
+ create-react-app tool
+ Bootstrap 3 
+ react-bootstrap
+ react-dropzone
+ react-moment
+ react-router

### Cloning Application
+ git clone (add link here)
+ cd beauty-boxx
+ npm install
+ npm start

This application runs on http://localhost:3000/

## Data Model Design.
Diagram of app's data model and sample of the test data used (JSON or equivalent).

![][image1]

Use meaningful sample data. Briefly explain any non-trivial issues.

## App Component Design.

A diagram showing the app's hierarchical component design (see example below). 

![][image2]

## UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (user regeneration and login views, if implemented, can be omitted) . . . . . . . 

![][image3]

## Routing.
+ / - displays all products
+ /Product - diplays form for entering a new product
+ /Review - displays form for entering a new review
+ /DisplayReview - displays all reviews
+ /About - displays information about the page
+ /Contact - displays information and contact form

## Extra features

. . . . . Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app . . . . . .  

## Independent learning.

. . . . . State the non-standard aspects of Angular (or other related technologies) that you researched and applied in this assignment . . . . .  



[image1]: ./model.png
[image2]: ./design.jpg
[image3]: ./screen.png


