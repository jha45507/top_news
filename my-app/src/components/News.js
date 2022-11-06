import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 3,
        category: "general",
    }
    PropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    firstCapitalLater = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        };
        document.title = `${this.firstCapitalLater(this.props.category)} - News Monkey App`
    }
    async updateNews() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9ebe18bee6ff43078777416909a349b9&page=${this.state.page}&pageSize=3`
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(40)
        let parsedata = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: parsedata.articles,
            totalResults: parsedata.totalResults,
            loading: false
        });
        this.props.setProgress(100)
    }
    async componentDidMount() {
        this.updateNews()
    }
    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9ebe18bee6ff43078777416909a349b9   
        &page=${this.state.page + 1}&pageSize=3`
        this.setState({ page: this.state.page + 1 })
        let data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedata.articles),
            totalResults: parsedata.totalResults
        });
    };
    render() {
        return (
            <>
                <div className='fluid-container'>
                    <h1 className='fs-1 text-center mt-20 mb-5 fw-bold text-light'>News Monkey App - Top {this.firstCapitalLater(this.props.category)} News Headlines </h1>
                    {this.state.loading && <Loading />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Loading />}
                    >
                        <div className='container'>
                            <div className='row'>
                                {this.state.articles.map((element) => {
                                    return <div className='col-md-4' key={element.url}>
                                        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} pageUrl={element.url} author={element.author} date={element.publishedAt} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }
}
