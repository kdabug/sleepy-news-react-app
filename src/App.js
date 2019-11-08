import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import TopNewsArticles from "./components/TopNewsArticles";
import EverythingArticles from "./components/EverythingArticles";
import { fetchTopicsArticles, fetchTopUSArticles } from "./service/news";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      usLiveArticleData: [],
      topicArticleData: [],
      formQuery: "sleepy",
      lastQuery: "sleepy"
    };
    this.fetchTopLiveNews = this.fetchTopLiveNews.bind(this);
    this.fetchTopicsNews = this.fetchTopicsNews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      lastQuery: this.state.formQuery
    });
    await this.fetchTopicsNews();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  async fetchTopicsNews() {
    const topicArticleData = await fetchTopicsArticles(this.state.formQuery);
    //console.log(topicArticleData);
    this.setState({
      topicArticleData: topicArticleData,
      formQuery: ""
    });
  }
  async fetchTopLiveNews() {
    const articleData = await fetchTopUSArticles();
    //console.log(articleData);
    this.setState({
      usLiveArticleData: articleData
    });
  }

  async componentDidMount() {
    await this.fetchTopicsNews();
    await this.fetchTopLiveNews();
  }
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Welcome</Link>
          <Link to="/top-news">Top News</Link>
          <Link to="/all-news">Search </Link>
        </nav>
        <main>
          <Route
            exact
            path="/"
            render={() => <Welcome lastQuery="mikayda's" />}
          />
          <Route
            path="/top-news"
            render={props => (
              <TopNewsArticles
                {...props}
                usLiveArticleData={this.state.usLiveArticleData}
              />
            )}
          />
          <Route
            path="/all-news"
            render={props => (
              <EverythingArticles
                {...props}
                lastQuery={this.state.lastQuery}
                topicArticleData={this.state.topicArticleData}
                formQuery={this.state.formQuery}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
