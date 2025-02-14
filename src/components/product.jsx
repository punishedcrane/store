import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function Product(props) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.product.image} className="productImg"/>
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>Price: {props.product.price}</Card.Text>
          <Button variant="primary">View Products</Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default Product;
