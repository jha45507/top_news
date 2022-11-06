import React, { Component } from 'react'
export default class NewsItem extends Component {
    render() {
        let {title, description,imageUrl,pageUrl,author,date} = this.props;
        return (
            <div className='mybox'>
                <div className="card m-auto">
                    <img src={imageUrl?imageUrl:"https://media.vogue.in/wp-content/uploads/2021/12/Daily-Horoscope-1920x1080.jpg"} className="card-img-top mb-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title?title:"No Title"}</h5>
                        <p className="card-text">{description?description:"No available description"}</p>
                        <p className="card-text my-2">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</p>
                        <a rel="noreferrer" href={pageUrl} target="_blank" className="btn my-2 btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}