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
+ git clone https://github.com/orlawalsh/React-BeautyBoxx.git
+ cd beauty-boxx
+ npm install
+ npm start

This application runs on http://localhost:3000/

## Data Model Design.
Diagram of app's data model and sample of the test data used (JSON or equivalent).
![][image1]

## JSON Sample Data
```sh
const loadproduct = [
		{
	        "id": 1,
            "proname": "Ultra Contour Palette",
            "brand": "Makeup Revolution",
            "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",
            "price": "12.99",
            "image": "http://res.cloudinary.com/dekzwblnr/image/upload/c_scale,w_320/v1502465868/makeup-revolution-ultra-contour-palette_bicd26.jpg",
            "reviews": []
		}, {
		    "id": 2,
            "proname": "35S",
            "brand": "Morphe",
            "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",
             "price": "23.99",
            "image": "http://res.cloudinary.com/dekzwblnr/image/upload/v1502725089/ufv0uag38nn2fegazqqb.jpg",
            "reviews": []
        }, {

        "id": 3,
            "proname": "HD Foundation No. 73",
            "brand": "Inglot",
            "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live.",
            "price": "33.00",
            "image": "http://res.cloudinary.com/dekzwblnr/image/upload/v1502802160/inglot_bgezjx.jpg",
            "reviews": []
        }
];
```

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
+ Users can search for a product
+ Users can delete & edit products
+ react-dropzone was used for the purpose of being able to upload product images
+ Images are stored using cloudinary
+ use of the JSON local storage
+ react-moment is used to display the time the review was posted
+ Routes in a navbar for easy naviagtion between pages

## Independent learning.

. . . . . State the non-standard aspects of Angular (or other related technologies) that you researched and applied in this assignment . . . . .  



[image1]: ./model.png
[image2]: ./design.jpg
[image3]: ./screen.png


