import React from 'react'
import TotalSales from '../components/total-sales/total-sales'
import Movie from '../components/movie/movie'
import './main.scss'

const IndexPage = () => (
  <div className="main__wrapper">
    <div className="totalSales__wrapper">
      <TotalSales />
    </div>
    <div className="movie__wrapper">
      <Movie title="Avatar" date="12.18.2009" critic="83%" audience="82%" />
      <Movie title="Titanic" date="12.19.1997" critic="89%" audience="69%" />
    </div>
  </div>
)

export default IndexPage
