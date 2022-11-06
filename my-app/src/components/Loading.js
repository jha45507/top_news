import React, { Component } from 'react'
import loading from './loading.gif.gif'
export default class Loading extends Component {
    render() {
        return (
            <div className='text-center d-flex justify-center my-2'>
                <img className='my-2' src={loading} alt="loading"/>
            </div>
        )
    }
}
