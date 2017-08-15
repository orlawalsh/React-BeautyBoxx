import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import Moment from 'react-moment';
import { browserHistory } from 'react-router';
const CLOUDINARYPRESET = 'bceusacm';
const CLOUDINARYURL = 'https://api.cloudinary.com/v1_1/dekzwblnr/upload';




class Product extends Component {
    
	constructor(props) {
        var productstock = JSON.parse(localStorage.getItem('products'));
        if (productstock === null || productstock.length === 0)
            {
            var newId = 0;
            }
        else
            {
        	var newId = (JSON.parse(localStorage.getItem('products'))[JSON.parse(localStorage.getItem('products')).length - 1].id) + 1;
            }
        
        var moment = require('moment');

         var postdate = moment().format("DD-MM-YYYY HH:mm");


	  super(props);
        
	  this.state = {
	  	products: JSON.parse(localStorage.getItem('products')) || [],
	  	newProduct: {
            id: newId,
            proname: "Product Name",
	  		brand: "Brand Name",
	  		description: "About the product",
            price: "Price",
            reviews: [],
            //date: postdate,
	  	},
          
	  	uploadedFileCloudinaryUrl: ''
          
	  };
        
	  this.submitProduct = this.submitProduct.bind(this);
	  this.onImgDrop = this.onImgDrop.bind(this);
        
	}
    
      

	onImgDrop(files) {
		this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
	}

	handleImageUpload(file) {
    let upload = request.post(CLOUDINARYURL)
                        .field('upload_preset', CLOUDINARYPRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

	submitProduct() {
		//console.log('Submit Review');
		//console.log(this.username.value, this.brand.value, this.review.value);
        if (this.proname.value !== '' && this.brand.value !== '' && this.price.value !== '' && this.description.value !== '' )
            {
		let newProduct = this.state.newProduct;
        newProduct.proname = this.proname.value;
		newProduct.brand = this.brand.value;
        newProduct.price = this.price.value;
		newProduct.description = this.description.value;
		newProduct.image = this.state.uploadedFileCloudinaryUrl;

		this.setState({newProduct});

		let products = this.state.products;
		products.push(newProduct);

		this.setState({products});
		localStorage.setItem('products', JSON.stringify(products));
		console.log(products);
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
				<div className="col-sm-12" id="product">
					<h1>Write your review here</h1>
					<form>
            <label htmlFor="dropzone">Product Image (Optional)</label>
					<Dropzone
             style={{"width" : "30%", "height" : "25%", "border" : "2px solid #BBB", "backgroundColor" : "#FFFFFF", "color": "#999" }}
			      multiple={false}
			      accept="image/*"
			      onDrop={this.onImgDrop}>
			      <h5>Drop Image or Click to add.</h5>
                </Dropzone>
            <br>
            </br>
			    <div>
		        {this.state.uploadedFileCloudinaryUrl === '' ? null :
		        <div>
		          <p>{this.state.uploadedFile.name}</p>
		          <img alt={this.state.uploadedFile.name} height="200px" width="200px" src={this.state.uploadedFileCloudinaryUrl} />
		        </div>}
		      </div>
                   
                     <div className="form-group">
					    <label htmlFor="Proname">Product Name </label>
					    <input type="text" 
					    				ref={(input) => {this.proname = input;}}
					    				className="form-control" 
					    				id="name" 
					    				placeholder="Please enter the name of the product" />
					  </div>
                                        
           <div className="form-group">
             <label htmlFor="Brand">Makeup Brand </label>
             <select id="brand" className="form-control" ref={(input)=> this.brand = input}>
              <option value="Mac">Mac</option>
 <option value="Nars">Nars</option>
<option value="ABH">ABH</option>
<option value="Inglot">Inglot</option>
<option value="Makeup Revolution">Makeup Revolution</option>
<option value="Morphe">Morphe</option>
<option value="LA Girl">LA Girl</option>
<option value="Tarte">Tarte</option>
<option value="Lorac">Lorac</option>
<option value="Other">Other...</option>
        </select>
            </div>
                    <div className="form-group">
					    <label htmlFor="Price">Product Price </label>
					    <input type="number" 
					    				ref={(input) => {this.price = input;}}
					    				className="form-control" 
					    				id="price" 
					    				placeholder="Enter Price" />
					  </div>    
                    
					  <div className="form-group">
					    <label htmlFor="description">Product description </label>
					    <input type="textarea" className="form-control" 
					    id="description" 
					    maxlength= "300"
					    					    ref={(input) => {this.description = input;}}
					    placeholder="Enter a product description" />
					  </div>

					  <button type="button" onClick={this.submitProduct} className="btn btn-info">Submit</button>
					</form>
				</div>

			</div>

		);
	}
}

export default Product;