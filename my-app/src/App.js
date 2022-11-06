import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState
      ({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <NavBar />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} key="general" country="in" category="general" />} />
            <Route path="/general" element={<News setProgress={this.setProgress} key="general" country="in" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} key="health" country="in" category="health" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" country="in" category="sports" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} key="business" country="in" category="business" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" country="in" category="technology" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} key="science" country="in" category="science" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainmeent" country="in" category="entertainment" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
