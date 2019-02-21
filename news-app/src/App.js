import React, { Component } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";
import fetchArticles from "./service/news";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articleData: [],
      formQuery: ""
    };
    this.fetchNews = this.fetchNews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    await fetchArticles(formQuery);
    this.fetchNews();
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  async fetchNews() {
    const articleData = await fetchArticles(this.state.formQuery);
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
        <h1>Hello react news App</h1>
        <Form
          formQuery={this.state.formQuery}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList />
      </div>
    );
  }
}

export default App;
