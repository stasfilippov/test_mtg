import { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from './components/Header/headerContainerApi'
import Pagination from './components/ui/pagination/paginations'
import { Client, getClients } from './services/app.reducer/app.reducer'
import { AppRootState } from './services/store'

interface AppState {
  currentPageItems: Client[]
}
class App extends Component<AppProps, AppState> {
  handlePageChange = (pageNumber: number = 1) => {
    const itemsPerPage = 10
    const startIndex = (pageNumber - 1) * itemsPerPage
    const currentPageItems = this.props.clients.slice(startIndex, startIndex + itemsPerPage)

    this.setState({ currentPageItems })
  }

  constructor(props: AppProps) {
    super(props)
    this.state = {
      currentPageItems: [],
    }
  }

  componentDidMount() {
    console.log('DID MOUNT')
    this.props.getClients('ru')
  }

  componentDidUpdate(prevProps: Readonly<AppProps>) {
    console.log('DID UPDATE')

    if (this.props.clients !== prevProps.clients) {
      this.handlePageChange()
    }
  }

  render() {
    const { currentPageItems } = this.state

    console.log('currentPageItems', this.state.currentPageItems)

    console.log('clients', this.props.clients)

    return (
      <div>
        <Header />
        <ul>
          {currentPageItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <Pagination
          itemsPerPage={10}
          onPageChange={this.handlePageChange}
          totalItems={this.props.clients.length}
        />
      </div>
    )
  }
}

type MapStateToPropsType = {
  clients: Client[]
}

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    clients: state.app.clients,
  }
}

type MapDispatchToPropsType = {
  getClients: (lang: string) => void
}

export type AppProps = MapDispatchToPropsType & MapStateToPropsType

export const AppContainer = connect(mapStateToProps, { getClients })(App)
