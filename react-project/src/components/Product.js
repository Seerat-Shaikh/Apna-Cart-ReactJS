import React from "react"; //type rfc for direct written functional component

export default function Product(props) {

  //your particular product will come one by one here
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">Rs{props.product.price}</span>
        </h2>
      </div>

      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" class="btn btn-danger" onClick={() => props.decrementQuantity(props.index)}>
            -
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          <button type="button" class="btn btn-success" onClick={() => props.incrementQuantity(props.index)}> 
          {/*creating outer anonymous func which is not called but inner increment function will be called */}
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.quantity*props.product.price}
      </div>
      <button className="col-2 btn btn-danger" onClick={() => {props.removeItem(props.index)}}>
        Remove
      </button>
    </div>
  );
}
