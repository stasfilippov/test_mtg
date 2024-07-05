import { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from './components/Header/headerContainerApi'
import { Main } from './components/Main/main'
import Pagination from './components/ui/pagination/paginations'
import { getClients } from './services/app-reducer/app-reducer'
import { Client } from './services/app-reducer/types'
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
    this.props.getClients('ru')
  }

  componentDidUpdate(prevProps: Readonly<AppProps>) {
    if (this.props.clients !== prevProps.clients) {
      this.handlePageChange()
    }
  }

  render() {
    const { currentPageItems } = this.state

    return (
      <div>
        <Header />
        <Main clients={currentPageItems} />
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
