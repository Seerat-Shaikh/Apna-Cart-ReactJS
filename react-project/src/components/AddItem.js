import React from "react";

// In class componnets you use this.state this.items etc you don't use use state
class AddItem extends React.Component { //type 'cc' = classcomponent
    constructor(props) { //using constructor because wh have to change their current state with new state we wil enter phone name & prices
        super(props);
        this.state = { //updating state
            productName: "",
            productPrice: 0,
        };
    }
    render() { 
        return <form className="row mb-5" onSubmit={(e) => {
            e.preventDefault(); //when u cick on add page will not refresh
            this.props.addItem(this.state.productName, Number(this.state.productPrice));
            }} 
        >
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
                this.setState({ productName: e.currentTarget.value}); //you can't change state directly so we use setState
            }}
            value={this.state.productName}
          />
          
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
                this.setState({ productPrice: Number(e.currentTarget.value)});
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-4">
          Add
        </button>
      </form>
    }
}
 
export default AddItem;