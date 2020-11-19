import React, { Component } from "react";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default class ImageSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    // we check if we got event from input (and it has target property) or just value from Carousel 
    onChange = e => this.setState({ value: e.target ? e.target.value : e });
    render() {
        return (

            <div>

                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                


                                <Carousel
                                    viewportWidth="400px"
                                    cellPadding={5}
                                    arrows
                                    value={this.state.value}
                                    onChange={this.onChange}
                                >
                                    {this.props.data && this.props.data.slides
                                        ? this.props.data.slides.map((imageObject, index) => {
                                            return <img src={imageObject.imgurl} />
                                        })
                                        : "loading"}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}