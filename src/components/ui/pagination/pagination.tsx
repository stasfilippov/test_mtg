import { Component } from 'react'

import s from './paginations.module.scss'

interface PaginationProps {
  itemsPerPage: number
  onPageChange: (pageNumber: number) => void
  totalItems: number
}

interface PaginationState {
  currentPage: number
}

export class Pagination extends Component<PaginationProps, PaginationState> {
  handleClick = (pageNumber: number) => {
    this.setState({ currentPage: pageNumber })
    this.props.onPageChange(pageNumber)
  }

  renderPageNumbers = () => {
    const { itemsPerPage, totalItems } = this.props
    const { currentPage } = this.state

    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const pageNumbers = []

    const maxPage = totalPages
    const firstPage = 1

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            className={s.pageNumber + ` ${currentPage === i ? s.active : ''}`}
            key={i}
            onClick={() => this.handleClick(i)}
            type={'button'}
          >
            {i}
          </button>
        )
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(
            <button
              className={s.pageNumber + ` ${currentPage === i ? s.active : ''}`}
              key={i}
              onClick={() => this.handleClick(i)}
              type={'button'}
            >
              {i}
            </button>
          )
        }
        pageNumbers.push(<span key={'ellipsis-end'}>...</span>)
        pageNumbers.push(
          <button
            className={s.pageNumber + ` ${currentPage === maxPage ? s.active : ''}`}
            key={maxPage}
            onClick={() => this.handleClick(maxPage)}
            type={'button'}
          >
            {maxPage}
          </button>
        )
      } else if (currentPage > totalPages - 2) {
        pageNumbers.push(
          <button
            className={s.pageNumber + ` ${currentPage === firstPage ? s.active : ''}`}
            key={firstPage}
            onClick={() => this.handleClick(firstPage)}
            type={'button'}
          >
            {firstPage}
          </button>
        )
        pageNumbers.push(<span key={'ellipsis-start'}>...</span>)
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(
            <button
              className={s.pageNumber + ` ${currentPage === i ? s.active : ''}`}
              key={i}
              onClick={() => this.handleClick(i)}
              type={'button'}
            >
              {i}
            </button>
          )
        }
      } else {
        pageNumbers.push(
          <button
            className={s.pageNumber + ` ${currentPage === firstPage ? s.active : ''}`}
            key={firstPage}
            onClick={() => this.handleClick(firstPage)}
            type={'button'}
          >
            {firstPage}
          </button>
        )
        pageNumbers.push(<span key={'ellipsis-start'}>...</span>)
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <button
              className={s.pageNumber + ` ${currentPage === i ? s.active : ''}`}
              key={i}
              onClick={() => this.handleClick(i)}
              type={'button'}
            >
              {i}
            </button>
          )
        }
        pageNumbers.push(<span key={'ellipsis-end'}>...</span>)
        pageNumbers.push(
          <button
            className={s.pageNumber + ` ${currentPage === maxPage ? s.active : ''}`}
            key={maxPage}
            onClick={() => this.handleClick(maxPage)}
            type={'button'}
          >
            {maxPage}
          </button>
        )
      }
    }

    return pageNumbers
  }

  constructor(props: PaginationProps) {
    super(props)
    this.state = {
      currentPage: 1,
    }
  }

  render() {
    return <div className={s.pagination}>{this.renderPageNumbers()}</div>
  }
}
