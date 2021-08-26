import React, { Component } from 'react'
import './PokeFetch.css';


// I'm sorry I missed this assignment!! Life got very crazy and I just didn't have time. I won't miss any other assignments!! Sorry!! It's not even done yet!! I was hoping it would be due at midnight, oops. A mess!


class PokeFetch extends Component {
  constructor() {
    super()
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
      timeKeeper: 10
    }
  }

  async fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
        })
      })
      .catch((err) => console.log(err))

      for (this.state.timeKeeper = 10; this.state.timeKeeper >= 1; this.state.timeKeeper--){
        
       await this.setState({
          timeKeeper: this.state.timeKeeper 
        })
      }
      
  }



  render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
        <h1 className={'timer'} >Timer Display {this.state.timeKeeper}</h1>
        <div className={'pokeWrap'}>
          <img onChange={() => this.timer()} className={'pokeImg'} src={this.state.pokeSprite}/>
          <h1 className={'pokeName'}>{this.state.pokeName}</h1>
        </div>
      </div>
    )
  }

  // async componentDidUpdate(){
  //   let timeKeeper = this.state.timeKeeper

  //   for (let i=10; i >= 1; i--){
  //     await this.setState({
  //       timeKeeper: this.state.timeKeeper
  //     })
  //   }

  //   console.log(timeKeeper)
  // }

}

export default PokeFetch;