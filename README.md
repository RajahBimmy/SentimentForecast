# Sentiment Forecast 1.0

### Built for HackNYU Hackathon

## Synopsis

__Sentiment Forecast__ is a javascript data visualization application running on d3, with an aim to display shifts in sentiment in the form of a stock market-esque graphing.

## Usage

This project can be accessed in your web browser via [this link](http://rajahbimmy.github.io/SentimentForecast/).

To run this project locally, navigate to your `SentimentForecast` directory and enter `python -m SimpleHTTPServer`. With this complete, open a web browser and go to `localhost:8000`. This will allow d3 to read any tsv or JSON files used in the program without any permission errors.

## Dependencies

In version 1.0, we're relying on a pre-parsed JSON object of sentiment data returned from a call to Alchemy in an earlier process. Version 2.0 aims to implement a Mongo Database to handle this in the future.

### Authors
* [Savannah Lim](https://github.com/hannavas)
* [Dennis McDaid](https://github.com/RajahBimmy)
* [Carter Yu](https://github.com/carteryu)
* [Eugen Hotaj](https://github.com/EugenHotaj)

### Resources Used
* [AlchemyAPI](http://www.alchemyapi.com/) - Sentiment Analysis
* [d3.js](https://d3js.org/) - Data Visualization
* [Twitter API](https://dev.twitter.com/overview/documentation) - Used for acquiring Tweet data
* [Tumblr API](https://www.tumblr.com/docs/en/api/v2) - Used for acquiring Tumblr post data
