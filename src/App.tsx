import { Component } from 'react'

import { Header } from './components/Header/headerContainerApi'
import Pagination from './components/ui/pagination/paginations'
import { clientsApi } from './services/app.reducer/apiClients'

interface AppState {
  currentPageItems: string[]
}
export class App extends Component<{}, AppState> {
  private items: string[]

  handlePageChange = (pageNumber: number) => {
    const itemsPerPage = 10
    const startIndex = (pageNumber - 1) * itemsPerPage
    const currentPageItems = this.items.slice(startIndex, startIndex + itemsPerPage)

    this.setState({ currentPageItems })
  }

  constructor(props: {}) {
    super(props)
    this.items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`)
    this.state = {
      currentPageItems: [],
    }
  }

  componentDidMount() {
    this.handlePageChange(1)

    const res = clientsApi.getClients('ru')

    console.log('res', res)
  }
  render() {
    const { currentPageItems } = this.state

    return (
      <div>
        <Header />
        <ul>
          {currentPageItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Pagination
          itemsPerPage={10}
          onPageChange={this.handlePageChange}
          totalItems={this.items.length}
        />
      </div>
    )
  }
}
