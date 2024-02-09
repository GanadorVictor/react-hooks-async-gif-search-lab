// GifListContainer.js
import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.fetchGifs("dolphin"); // Initial search query
  }

  fetchGifs = (query) => {
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          gifs: data.data.slice(0, 3) // Store first 3 gifs in state
        });
      })
      .catch((error) => {
        console.error("Error fetching gifs:", error);
      });
  };

  handleSearch = (query) => {
    this.fetchGifs(query);
  };

  render() {
    return (
      <div>
        <GifSearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
