import React, {Component} from "react";

export class FilterTab extends Component{
    
    constructor() {
        super();
        this.state = {
            city : '',
            postal_code : '',
            country : ''
        };
        this.onInputchange = this.onInputchange.bind(this);
        
      }
    
      onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
      onTrigger = (event) => {
        console.log(this.state);
        this.props.parentCallback(this.state);
        event.preventDefault();
    }
    render(){

        
        return(
            <form onSubmit = {this.onTrigger}>
                <div class="form-row w-100"  >
                    <h2 class="m-3"> Search Filters</h2>
                    <div class="col m-3">
                    <input 
                    name="postal_code"
                    type="text"
                    value={this.state.postal_code}
                    onChange={this.onInputchange}
                    class="form-control" placeholder="Zip"/>
                    </div>
                    <div class="col m-3">
                    <input 
                    name="city"
                    type="text"
                    value={this.state.city}
                    onChange={this.onInputchange}
                     class="form-control" placeholder="City"/>
                    </div>
                    <div class="col m-3">
                    <input name="country"
                    type="text"
                    value={this.state.country}
                    onChange={this.onInputchange}
                     class="form-control" placeholder="Country"/>
                    </div>
                </div>
                <div class="row" >
                    <div class="col-md-6 text-center">
                        <button type="submit"  class="btn btn-primary">Search</button>
                    </div>
                    <div class="col-md-6 text-center">
                        <button type="button" class="btn btn-warning">Reset</button>
                    </div>
                </div>
                
                </form>
                
        )
    }
}

export default FilterTab