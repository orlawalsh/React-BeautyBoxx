import React, { Component } from 'react';
import Moment from 'react-moment';
import { Modal, Button } from 'react-bootstrap';

const loadproduct = [
		{
	"id": 1,
    "username": "Sarah777",
    "brand": "Makeup Revolution",
    "review": "Amazing, one of the best contour palettes ever. I especially love the two highlight shades at the end.",
    "price": "12.99",
    "image": "http://res.cloudinary.com/dekzwblnr/image/upload/c_scale,w_320/v1502465868/makeup-revolution-ultra-contour-palette_bicd26.jpg",
    "date": "08-08-17"
		}, {
    "id": 2,
    "username": "Roxie17",
    "brand": "Morphe",
    "review": "One of my favourite palettes, great price for 32 different shades.",
    "price": "23.99",
    "image": "http://res.cloudinary.com/dekzwblnr/image/upload/v1502725089/ufv0uag38nn2fegazqqb.jpg",
    "date": "15-08-17"
        }, {
    "id": 3,
    "username": "Zara Larkin",
    "brand": "Inglot",
    "review": "The best full coverage foundation I've ever come across!!.",
    "price": "33.00",
    "image": "http://res.cloudinary.com/dekzwblnr/image/upload/v1502802160/inglot_bgezjx.jpg",
    "date": "10-08-17"
        }
];

function searchingFor(term){
    return function(x){
        if (x.brand !== undefined)
            {
        return x.brand.toLowerCase().includes(term.toLowerCase()) || x.username.toLowerCase().includes(term.toLowerCase()) || x.review.toLowerCase().includes(term.toLowerCase()) || !term ;
            }
        else
            {
                //console.log("No Search");
            }
    }
}


class Home extends Component {

	constructor(props) {
    console.log("STARTING")
    console.log()

    if(localStorage.getItem("products") == null || localStorage.getItem("products") == "undefined" ) {

      localStorage.setItem('products', JSON.stringify(loadproduct));
    }
    
	  super(props);

    console.log(loadproduct);
    
	  this.state = {

         products: JSON.parse(localStorage.getItem('products')) || [],
                    term: '',
        
	  }

      this.searchHandler = this.searchHandler.bind(this);
        var productstock = JSON.parse(localStorage.getItem('products'));
        if (productstock === null || productstock.length === 0)
            {
                let products = this.state.products;

products.push(loadproduct[0], loadproduct[1], loadproduct[2]);

        
		this.setState({products});
                		localStorage.setItem('products', JSON.stringify(loadproduct));

            }
        else{
            
        }
}   
    
    searchHandler(event){
        this.setState({term: event.target.value})
        
    }
    
     delete(product){
    const newState = this.state.products;
    if (newState.indexOf(product) > -1) {
      newState.splice(newState.indexOf(product), 1);
      this.setState({products: this.state.products});
      localStorage.setItem("products", JSON.stringify(this.state.products))
      products: this.state.products;
    }
     }
    
    edit(product)
    {
         let editproduct = product;
    var usernameset=prompt("Please enter your username",product.username);
    var productset=prompt("Please enter Makeup Brand/Product Name", product.brand);
    var priceset=prompt("Please enter the price of the item", product.price);
    var reviewset=prompt("Please enter your review", product.review);

if (usernameset != null  && productset != null && priceset != null && reviewset != null && 
  usernameset !== ''  && productset !== '' && priceset !== '' && reviewset !== ''){
         editproduct.username = usernameset;
         editproduct.brand = productset;
        editproduct.price = priceset;
        editproduct.review = reviewset;
         this.setState({editproduct});
         let products = this.state.products;
         		      localStorage.setItem('products', JSON.stringify(products));


         console.log(editproduct);
       }
       else
       {
            alert("Please fill in the fields when prompted!");

       }

    }

	displayProduct() {
		let resultsArray = [];
		this.state.products.filter(searchingFor(this.state.term)).reverse().map((product, i) => {
			resultsArray.push( 
				<div className="col-md-6 cell">
					<div className="thumbnail" id="piclist">
						<img src={product.image} alt={product.brand} width="100" height="100" />
						<div className="caption" id="productlist">
			        <h3>{product.proname} </h3>
              <h4>{product.brand} </h4>
			        <p>{product.review}</p>
                			        <p>€{product.price}</p>

                <br></br>
                <br></br>
                <button type="button" onClick={this.delete.bind(this, product)} className="btn btn-danger btn-xs">Delete</button> &nbsp;
                <button type="button" onClick={this.edit.bind(this, product)} className="btn btn-info btn-xs">Edit</button> <br></br>
			      </div>
					</div>
				</div>
				);
		});
		return resultsArray; 

	}

	render() {
		return (
            
           
			<div className="row" id="HomePage">
            <div className="col-md-12">
			<h1>Home</h1>
            
            <form>
            <input type="text"
                 onChange={this.searchHandler}
                 value={this.state.term}
                  placeholder="Product Search"/>  
                </form>
            <br></br>
           
          </div> 
            {this.displayProduct()}
            
  
			</div>  
           
		);
	};
}

export default Home;

   