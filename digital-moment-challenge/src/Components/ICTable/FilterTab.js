import React, {Component} from "react";

export class FilterTab extends Component{
    
    constructor() {
        super();
        this.state = {
            city : '',
            type : '',
            country : ''
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
      }
    
      onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
      onTrigger = (event) => {

        this.props.parentCallback(this.state);
        event.preventDefault();
    }
    onChangeValue(event) {

        this.setState({
            
            type: event.target.value,
          });
        
      }
    render(){

        
        return(
            <form onSubmit = {this.onTrigger}>
                <div class="form-row w-100 text-center"  >
                    <h2 class="m-3"> Search Filters</h2>
                    <div class="col m-3 row" >
                        <div class="form-check col-md-6" >
                            <input class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            value="idea"
                            
                             onChange={this.onChangeValue}   id="flexRadioDefault2" />
                            
                                Ideas
                            
                        </div>
                        <div class="form-check col-md-6" onChange={this.onChangeValue}>
                        <input class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            value="challenge"
                            
                            onChange={this.onChangeValue}   id="flexRadioDefault1" />
                            
                                Challenges
                            
                        </div>
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