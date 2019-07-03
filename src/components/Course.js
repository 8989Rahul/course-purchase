import React, { Component } from 'react'

export default class Course extends Component {
    state={
        active : false
    }

    clickOnCourse=()=>{
        var active = !this.state.active
        this.setState({active:active})
        this.props.summession(active ? this.props.price : -this.props.price)
    }
    render(){
        return(
            <div>
                <p className="course" onClick={this.clickOnCourse}>{this.props.name} course in just <b> Rs{this.props.price}</b></p>
            </div>
        )
    }
}
