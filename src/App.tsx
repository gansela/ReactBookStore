import React from 'react';
import './App.css';
import bookData from "./data/bookData"
import Header from "./components/header"
import { covers } from "./assets/images/imagesLoader.js"
import BookList from "./components/BookList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/search';
import AddBook from "./components/AddBook"
import Pay from "./components/Pay"
import TableList from "./components/TableList"


bookData.sort((a: any, b: any) => (a.year > b.year) ? 1 : -1)


class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props)

    this.state = {
      data: bookData,
      pics: covers,
      newData: bookData,
      searchValue: "",
      hebrew: false,
      languegue: "all",
      hwArray: [],

    }
  }

  delArray = (book: any) => {

    const { hwArray: array } = this.state
    console.log(array[0].title)
    const index = array.find((item: any, i: number) => {
      if (item.title === book.value) return i
    })
    console.log(index)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ hwArray: array });
    }
  }

  setArray = (book: any) => {
    // console.log("hey")
    const { hwArray: x } = this.state
    const y = [...x, book]
    this.setState({ hwArray: y })
  }
  searchOperation = (searchText: string, hebrew: Boolean, languegue: string): void => {
    // if (!searchText || !onSale) return;
    const { data, } = this.state
    const filteredData = data.filter((book: any) => {
      let isLanguege = false
      if (languegue === "all") isLanguege = true
      if (languegue === book.language) isLanguege = true
      return book.title.toLowerCase().includes(searchText) && isLanguege
    })
    this.setState({ newData: filteredData, searchValue: searchText, hebrew, languegue })

  }
  addNewBook = (newBook: any): void => {
    const { data, newData, } = this.state
    const newBookData = [...data, newBook]
    this.setState({ data: newBookData, newData: newBookData })
  }
  render() {
    const { data, pics, hebrew, languegue, searchValue, hwFunc } = this.state
    const searchProps = { searchOperation: this.searchOperation, hebrew, searchValue, languegue, categories: categories(data) }
    const searchProos2 = { addNewBook: this.addNewBook }
    // console.log(pics[0].slice(14).split(".")[0])
    return (
      <div>
        <Header content="Book Store" />
        <Header content="Add-Book" />
        <AddBook  {...searchProos2} />
        <Header content="Search" />

        <Search {...searchProps} />
        {/* <BookList list={this.state.newData} pic={pics} isOpacity={this.state.hebrew} func={this.setArray} /> */}
        <TableList list={this.state.newData} pic={pics} isOpacity={this.state.hebrew} func={this.setArray} />
        {console.log(this.state.hwArray)}
        <Header content="cart" />
        <TableList list={this.state.hwArray} pic={pics} isOpacity={this.state.hebrew} func={this.delArray} />
        <Header content="pay" />
        <Pay />
      </div >
    );
  }
}

function categories(fullList: any) {
  const reduced: any = fullList.reduce((ecumilator: any, item: any) => {
    return { ...ecumilator, [item.language]: true }
  }, {})
  const x = Object.keys(reduced).map(item => item)
  return x
}


export default App;
