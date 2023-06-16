import React, {Component} from 'react';
import menu from '../../img/menu.png';
import '../../../src/App.css';


export default class ExampleCss extends Component {
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
    }
    handleClick() { 
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open')
    }
    render() {
        return (
        <div className='h_icon'>
            <icon
                className="nav__icon"
                type="menu-fold"
                onClick={() => this.handleClick()}>
                    <img src={menu} alt="Link" />
            </icon>
            <div ref={this.wrapperRef} className="wrapper">

                <div className="nav">
                    <div className='headblock'>
                        <a className="home" href="#home1">Home</a>
                        <a href="#section1">Content</a>
                        <a href="#section2">Information</a>
                        <a href="#section3">Contacts</a>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}