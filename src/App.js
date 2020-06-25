import React, { Component } from 'react';
import axios from 'axios'; 
import initialState from './initialState';
import Header from './components/Header';
import PhotoBox from './components/PhotoBox';
import QuoteBox from './components/QuoteBox';
import Footer from './components/Footer';
import './App.css';
import soundfilePink from './Erik Satie_20170606_128.mp3';
import soundfileBlue from './0267 (online-audio-converter.com).mp3';
import Sound from 'react-sound';


class App extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();
    this.state = {
      //initial state is stored in a separate file
      boxList: initialState,
      quote: '',
      author: '',
      isToggled: false,
    };
  }

  handleToggle = () => {
    this.setState({
      isToggled: !this.state.isToggled,  
    })
  };
  

  getBoxes(toggledColor) {
    const photoBoxes = this.state.boxList.map((box, index) => (
      <PhotoBox
        key={index}
        mood={box.mood}
        url={box.url}
        altTag={box.alt}
        numBox={index}
        getImages={this.getImages}
        removeImages={this.removeImages}
        newColor={toggledColor}
      />
    ));
    const quoteBox = (
      <QuoteBox 
        quote={this.state.quote}
        author={this.state.author}
        removeQuote={this.removeQuote}
        getQuote={this.getQuote}
        newColor={this.state.isToggled ? 'ToggledClass' : 'NotToggledClass'}
      />
    );
    return [
      photoBoxes[0],
      quoteBox,
      ...photoBoxes.slice(1),
    ];
  }


 // Getting images from Unsplash API
  getImages = (photoMood, numBox) => {
    axios({
        url: 'https://api.unsplash.com/photos/random',
        method: 'GET',
        responseType: 'json',
        params: {
            client_id: 'Ro76YKYpmutB58ImuEKT8izDBYKA669WYcjJWz-U6TA',
            query: photoMood,
            orientation: 'squarish',
        },
    }).then(({ data }) => {
      let url = data.urls.regular;
      let altTag = data.alt_description;
      const copy = [...this.state.boxList];
      copy[numBox] = {
        url:  url,
        mood: photoMood,
        alt: altTag
      };

      this.setState({
        boxList: copy,
      });
    });
  };

  removeImages = (numBox) => {
    const copy = [...this.state.boxList];
    copy[numBox] = {
      url:  '',
      mood: '',
      alt: ''
    };
    this.setState({
      boxList: copy,
    });
  };


 // Getting a random quote from Api
  getQuote = () => {
    axios({
        url: 'https://type.fit/api/quotes',
        method: 'GET',
        responseType: 'json',
        params: {}
    }).then(({ data }) => {
      const filterQuotes = function(text){
        return text.text.length < 50;
      };
      let filteredData = data.filter(filterQuotes);
      let quoteId = Math.floor(Math.random() * filteredData.length);
      let randomQuote = filteredData[quoteId].text;
      let author = filteredData[quoteId].author;
      this.setState({
        quote: randomQuote,
        author: author,
      })
    })
  };

// Removing the quote from UI
  removeQuote = () => {
    this.setState({
      quote: '',
      author: '',
    });
  };

  render() {
    const newColor = this.state.isToggled ? 'ToggledClass' : 'NotToggledClass';
    const boxes = this.getBoxes(newColor);
    // const soundfile = this.state.isToggled ? soundfileBlue : soundfilePink;


    return (
      <div>
        {this.state.isToggled ? (
          <Sound
             url={soundfileBlue}
             playStatus={Sound.status.PLAYING}
             onLoading={this.handleSongLoading}
             onPlaying={this.handleSongPlaying}
             onFinishedPlaying={this.handleSongFinishedPlaying}
           />
        ) : (
          <Sound
            url={soundfilePink}
            playStatus={Sound.status.PLAYING}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        )}
        <Header
          handleToggle={this.handleToggle}
          newColor={newColor}
          />
        <div className={`mainContainer ${newColor}`} >
          <div className='wrapper'>
            <div className="mainGrid" id="mainGrid">
              {boxes}
            </div>
          </div>
        </div>
        <Footer
          newColor={newColor}
        />
      </div>
    )
  };
}

export default App;