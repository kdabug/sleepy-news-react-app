import React, { Component } from "react";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Form from "./components/Form";
import fetchAllArticles from "./service/news";

class App extends Component {
  constructor() {
    super();
    this.state = {
      articleData: [],
      formQuery: "puppies"
    };
    this.fetchNews = this.fetchNews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
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
        <h1>Hello react news App</h1>
        <Form
          formQuery={this.state.formQuery}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList articleData={this.state.articleData} />
      </div>
    );
  }
}

export default App;
