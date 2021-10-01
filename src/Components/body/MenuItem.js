import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Badge, CardText, CardImg, CardColumns, CardFooter } from 'reactstrap';


class MenuItem extends Component {

    render() {

        return (
            <div className='col-12 col-md-4 my-3 '>

                <Card style={{ textAlign: 'left', textTransform: 'capitalize' }} className='cardHgt'>

                    <CardImg src={"http://localhost:3002/" + this.props.dishItem.img} alt={this.props.dishItem.title} className='cardImg' />

                    <CardBody>
                        <p >Name: <span style={{
                            fontWeight: '2rem',
                            letterSpacing: '2px',
                        }}>{this.props.dishItem.title}</span> </p>

                        <p>Price: {this.props.dishItem.price} $</p>

                    </CardBody>

                    <CardFooter className="cardFooter" style={{ cursor: "pointer", textAlign: 'center' }} onClick={() => this.props.onDishSelect(this.props.dishItem)}>View Detailes</CardFooter>
                </Card>

                <div>
                </div>
            </div>
        )
    }

}

export default MenuItem;