import React, { Component } from 'react';
import Moment from 'react-moment';
import { browserHistory } from 'react-router';


class Review extends Component {
    
	constructor(props) {
        var productstock = JSON.parse(localStorage.getItem('reviews'));
        if (productstock === null || productstock.length === 0)
            {
            var rewId = 0;
            }
        else
            {
        	var rewId = (JSON.parse(localStorage.getItem('reviews'))[JSON.parse(localStorage.getItem('reviews')).length - 1].id) + 1;
            }
        
        var moment = require('moment');

         var postdate = moment().format("DD-MM-YYYY HH:mm");


	  super(props);
        
	  this.state = {
	  	reviews: JSON.parse(localStorage.getItem('reviews')) || [],
	  	products: JSON.parse(localStorage.getItem('products')) || [],

	  	newReview: {
            id: rewId,
            username: "User Name",
	  		brand: "Makeup brand/Product name",
	  		review: "Write your review here",
            date: postdate,
	  	},
          
	  };
        
	  this.submitReview = this.submitReview.bind(this);
        
	}
    

  createSelectProduct() {
  	console.log("POPULATING");
     let products = [];         
     for (let i = 0; i < this.state.products.length; i++) { 
     		let product = this.state.products[i];           
          products.push(<option key={i} value={i}>{product.proname}</option>);   
          
     }
     return products;
 }  

onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
   
}

	submitReview() {
		console.log('Submit Review');
		console.log(this.username.value, this.brand.value, this.review.value);
        if (this.username.value !== '' && this.brand.value !== '' && this.review.value !== '' )
            {
		let newReview = this.state.newReview;
        newReview.username = this.username.value;
		newReview.brand = this.brand.value;
        
		newReview.review = this.review.value;
		

		this.setState({newReview});

		let reviews = this.state.reviews;
		reviews.push(newReview);

		// update product.reviews
		this.state.products[this.brand.value].reviews.push(newReview.review);
		localStorage.setItem('products', JSON.stringify(this.state.products));


		this.setState({reviews});
		localStorage.setItem('reviews', JSON.stringify(reviews));
		console.log(reviews);
		browserHistory.push('/');
                }
        else
            {
                //console.log("Oops")
                alert("Please Fill The Required Fields");

            }

	}


		render() {
            
            
		return (
			<div className="row">
				<div className="col-sm-12" id="review">
					<h1>Write your review here</h1>
					<form>
		     
                   
                     <div className="form-group">
					    <label htmlFor="username">Username </label>
					    <input type="text" 
					    				ref={(input) => {this.username = input;}}
					    				className="form-control" 
					    				id="name" 
					    				placeholder="Please enter your username" />
					  </div>
                                        
           <div className="form-group">
             <label htmlFor="Brand">Product to review </label>
        <select id="brand"
        								ref={(input) => {this.brand = input;}}
					    				className="form-control" 
					    				id="brand" 
					    				placeholder="Please select the brand to review"
        onChange={this.onDropdownSelected}>
         {this.createSelectProduct()} </select>
     
            </div>

            <div className="form-group">
					    <label htmlFor="username">Product Review </label>
					    <input type="textarea" 
					    				ref={(input) => {this.review = input;}}
					    				className="form-control" 
					    				id="name" 
					    				placeholder="Please enter your review" />
					  </div>
					

					  <button type="button" onClick={this.submitReview} className="btn btn-info">Submit</button>
					</form>
				</div>

			</div>

		);
	}
}

export default Review;