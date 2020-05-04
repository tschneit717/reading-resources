import React, { Component } from 'react'
import sources from './data/soruces.json'
import ReadingItem from './readingItem'
import Cookies from 'js-cookie'
Cookies.set('visited', false)
if(!Cookies.get('visited')) {
  localStorage.setItem('state', JSON.stringify(sources))
}
let returnedObj = JSON.parse(localStorage.getItem('state'))
class ReadingList extends Component {
  state = {
    sources: (returnedObj ? returnedObj : sources)
  }
  handleDeleteItem = (source) => {
    console.log(this.state)
    this.setState((prevState) => ({
      sources: prevState.sources.filter((s) => {
        return s.id !== source.sources.id
      })
    }))
  }
  render() {
    localStorage.setItem('state', JSON.stringify(this.state.sources))
    Cookies.set('visited', true)

    return(
      <div>
        {this.state.sources.map((source) => (
          <ReadingItem key={source.id} onDeleteItem={this.handleDeleteItem} sources={source}></ReadingItem>
        ))}
      </div>
    )
  }
}

export default ReadingList