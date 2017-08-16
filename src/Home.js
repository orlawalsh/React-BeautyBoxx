import React, { Component } from 'react';
import Moment from 'react-moment';
import { Modal, Button, Collapse, Well, Table } from 'react-bootstrap';
import { Link } from 'react-router';

const loadproduct = [
	// 	{
	// "id": 1,
 //    "username": "Sarah777",
 //    "brand": "Makeup Revolution",
 //    "reviews": [],
 //    "price": "12.99",
 //    "image": "http://res.cloudinary.com/dekzwblnr/image/upload/c_scale,w_320/v1502465868/makeup-revolution-ultra-contour-palette_bicd26.jpg",
 //    "date": "08-08-17"
	// 	}, {
 //    "id": 2,
 //    "username": "Roxie17",
 //    "brand": "Morphe",
 //    "reviews": [],
 //    "price": "23.99",
 //    "image": "http://res.cloudinary.com/dekzwblnr/image/upload/v1502725089/ufv0uag38nn2fegazqqb.jpg",
 //    "date": "15-08-17"
 //        }, {
 //    "id": 3,
 //    "username": "Zara Larkin",
 //    "brand": "Inglot",
 //    "reviews": [],
 //    "price": "33.00",
 //    "image": "http://res.cloudinary.com/dekzwblnr/image/upload/v1502802160/inglot_bgezjx.jpg",
 //    "date": "10-08-17"
 //        }
];

function searchingFor(term){
    return function(x){
       return x.brand.toLowerCase().includes(term.toLowerCase()) || x.proname.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

function matchingReview(reviewIds){
    return function(x){
        return reviewIds.indexOf(x.id) > -1;
      }
    }


class Home extends Component {

	constructor(props) {
    //console.log("STARTING")
    //console.log()

    

    if(localStorage.getItem("products") == null || localStorage.getItem("products") == "undefined" ) {

      localStorage.setItem('products', JSON.stringify(loadproduct));
    }
    
	  super(props);

     this.state = {};

    //console.log(loadproduct);
    
	  this.state = {

         products: JSON.parse(localStorage.getItem('products')) || [],
         reviews: JSON.parse(localStorage.getItem('reviews')) || [],
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
    var pronameset=prompt("Please enter the product name",product.proname);
    var brandset=prompt("Please enter Makeup Brand", product.brand);
    var priceset=prompt("Please enter the price of the item", product.price);
    var descptset=prompt("Please enter the product description", product.description);

if (pronameset != null  && brandset != null && priceset != null && descptset != null && 
  pronameset !== ''  && brandset !== '' && priceset !== '' && descptset !== ''){
         editproduct.proname = pronameset;
         editproduct.brand = brandset;
        editproduct.price = priceset;
        editproduct.description = descptset;
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

    toggle() {
    console.log(this.state.detailed)
    this.setState({detailed: !this.state.detailed})
  }


 //     createReview() {
 //    //console.log("POPULATING");
 //     let reviews = [];         
 //     for (let i = 0; i < this.state.reviews.length; i++) { 
 //        let review = this.state.reviews[i];           
 //          reviews.push(<option key={i} value={i}>{review.reviews}</option>);   
          
 //     }
 //     return reviews;
 // } 

	displayProduct() {
		let resultsArray = [];
		this.state.products.filter(searchingFor(this.state.term)).reverse().map((product, i) => {
			resultsArray.push( 
				<div className="col-md-6">
					<div className="thumbnail" id="photo">
						<img src={product.image} id="size" alt={product.brand} />
						<div className="caption" id="list">
			         <Link to="/Review"><h3>{product.proname} </h3></Link>
              <h4>{product.brand} </h4>
			        <p>{product.description}</p>
                			        <p>€{product.price}</p>

                        <Button className="btn btn-primary" onClick={ ()=> this.setState({ open: !this.state.open })}>
          Show Reviews
        </Button> &nbsp;
        <button type="button" className="btn btn-info"> <Link to="/DisplayReview">See all reviews</Link></button> <br></br>

        <Collapse in={this.state.open}>
          <div style={{zIndex: 300 }}>
            <Well>


                  <Table striped bordered condensed hover>
            <thead>
             <tr>
        <th>Username</th>
        <th>Review</th>
        <th>Date</th>
      </tr>
    </thead>
<tbody>
              {this.state.reviews.filter(matchingReview(product.reviews)).map((review, i) => {

          

        return <tr><td><b>{review.username}</b></td>
        <td><i>{review.review}</i></td>
        <td>{review.date}</td>
      </tr>;

 
              })}
                    </tbody>
  </Table>

            </Well>
          </div>
        </Collapse>
    
                <br></br>
                <button type="button" onClick={this.delete.bind(this, product)} className="btn btn-danger">Delete</button> &nbsp;
                <button type="button" onClick={this.edit.bind(this, product)} className="btn btn-info">Edit</button> <br></br>
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

   