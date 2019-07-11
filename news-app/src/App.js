import React, { Component } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";
import fetchAllArticles from "./service/news";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articleData: [],
      formQuery: "sleepy",
      lastQuery: "sleepy"
    };
    this.fetchNews = this.fetchNews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      lastQuery: this.state.formQuery
    });
    await fetchAllArticles(this.state.formQuery);
    await this.fetchNews();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  async fetchNews() {
    const articleData = await fetchAllArticles(this.state.formQuery);
    console.log(articleData);
    this.setState({
      articleData: articleData,
      formQuery: ""
    });
  }

  async componentDidMount() {
    this.fetchNews();
  }
  render() {
    return (
      <div className="App">
        <Header lastQuery={this.state.lastQuery} />
        <Form
          formQuery={this.state.formQuery}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <div className="all-articles">
          <ArticleList articleData={this.state.articleData} />
        </div>
      </div>
    );
  }
}

export default App;
