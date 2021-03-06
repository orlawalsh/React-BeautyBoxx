import React, { Component } from 'react';
import Moment from 'react-moment';
import { Modal, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

const loadproduct = [

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

class DisplayReview extends Component {


	constructor(props) {
    //console.log("STARTING")
    //console.log()

    if(localStorage.getItem("reviews") == null || localStorage.getItem("reviews") == "undefined" ) {

      localStorage.setItem('reviews', JSON.stringify(loadproduct));
    }
    
	  super(props);

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
    
   

	displayRE() {
		let resultsArray = [];
		this.state.products.filter(searchingFor(this.state.term)).reverse().map((product, i) => {
			resultsArray.push( 
				<div className="col-md-6 bell">
					<div className="thumbnail" id="photo">
						<img src={product.image} id="size" alt={product.brand} />
						<div className="caption" id="list">
			         <h3>{product.proname} </h3>
              <h4>{product.brand} </h4>
			        <h5>{product.username}</h5><br></br>
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


                <br></br>

                <button type="button" className="btn btn-info"> <Link to="/">Return to home </Link></button> &nbsp;
                <button type="button"  className="btn btn-info"><Link to="/Review">Add Review</Link></button>
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
                  placeholder="Review Search"/>  
                </form>
            <br></br>
           
          </div> 
            {this.displayRE()}
            
  
			</div>  
           
		);
	};
}
export default DisplayReview;