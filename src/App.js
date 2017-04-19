import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id='background'>
          <video loop muted autoPlay poster='still.png' id='background-video'>
            <source src={require('./350loop.mp4')} type='video/mp4'/>
          </video>
        </div>
        <Header />
        <InformationContainer/>
        <h2 style={{width:'100%', backgroundColor: '#ffa902', padding:15, textAlign: 'center'}}>More surprises coming soon... </h2>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="Header">Fossil Free Berlin</h1>
        <img src={require('./gdm-id-solid.png')} id='gdm-logo'/>
      </div>
    );
  }
}

class InformationContainer extends Component {
  render() {
    return (
      <div className='InformationContainer'>
        <p> 
          <span style={{fontSize:25, fontWeight:'bold'}}>"It is not an investment if it is destroying the planet" - Vandana Shiva</span><br/><br/>
          The stakes have never been higher – 2016 was again the hottest year on record.  Our changing climate is leading to 
          ever more dangerous extremes, from flood disasters to droughts, 
          heatwaves and storms.  It's time to fight back against the money that is causing this madness.<br/><br/>

          From May 5-13, Fossil Free Berlin will join thousands of people around the world for <text className='highlighted-text'>GLOBAL DIVESTMENT MOBILISATION 2017</text> - a week of action to highlight the devastating climate 
          impacts caused by continued institutional support for the fossil fuel industry.  We are calling on our cities, banks, universities, and 
          other institutions to immediately <text className='highlighted-text'>#DIVEST</text> and break their ties with dirty fossil fuel money.<br/><br/>
          
          <span style={{fontWeight:'bold'}}> The city of 
          Berlin divested last year</span>, as one of 600 organizations worldwide. While this was a major success for our campaign, our work is far from done.  
          This May, join us and thousands of other protests around the world for a week of films, workshops, and direct actions.
        </p>
        <h2>
          <i className="fa fa-fw fa-calendar-check-o"/>
          &nbsp;Where to be
        </h2>
        <div className='Calendar'>
          <Event date={'5.5'} 
                 title={'Screening: Beyond the Red Lines'} 
                 location={'Loophole, Neukölln - 20:30'} 
                 description={'Preceded by Before the Flood, a short film by Saleem Gondal'}
            />
          <Event date={'6.5'} 
                 title={'Workshop: What is Divestment?'}
                 location={'Laube Prinzessinnengarten, Kreuzberg - 15:00'}
            />
          <Event date={'8.5'} 
                 title={'Workshop - Trump & Klimapolitik'}
                 location={'Bildungswerk Heinrich-Böll-Stiftung, Sebastianstr. 21, Kreuzberg - 18:00'}
                 description={'Können wir das Klimachaos noch vermeiden? In collaboration with Heinrich-Böll-Stiftung / Lotto-Stiftung'}
            />
          <Event date={'10.5'} 
                 title={'Demo: Break Free from Fossil Fuels'}
                 location={'Pariser Platz, Brandenburger Gate - 16:00'}
                 description={''}
            />
        </div>
      </div>
    );
  }
}

class Event extends Component {
  render() {
    return (
      <li className='Event'>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <text>{this.props.date + ' • ' + this.props.title}</text><br/>
        </div>
        <text className='description'>
          {this.props.location}<br/><br/>
          {this.props.description}
        </text>
      </li>
    );
  }
}

export default App;
