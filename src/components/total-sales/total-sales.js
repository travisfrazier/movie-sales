import React from 'react'
import './_total-sales.scss'
import Graph from '../graph/graph'
import OrderCount from '../order-count/order-count'
import graphColors from '../../pages/partials/_graph-colors'

const TotalSales = props => (
  <section className="totSales">
    <div className="totSales__content">
      <h2 className="totSales__title">Top Movie Sales - James Cameron</h2>
      <span>
        Average value of sales in first 6 weeks:{' '}
        <strong className="totSales__loc--tab">United States</strong>
        <strong className="totSales__loc--pho">USA</strong>
      </span>
    </div>
    <div className="totSales__content">
      <span>Comparison - Avatar and Titanic</span>
      <span>Lifetime sales: 1.3 Billion</span>
    </div>
    <div className="totSales__results">
      <Graph />
      <div className="totSales__meters">
        <OrderCount
          title="Avatar"
          total="$760,507,625"
          color={graphColors.color1}
          width="60%"
        />
        <OrderCount
          title="Titanic"
          total="$600,788,188"
          color={graphColors.color2}
          width="40%"
        />
      </div>
    </div>
    <div className="totSales__content totSales__content--value">
      <span>
        <strong>Analysis of sales: </strong>The value has changed over time, and
        the results have not been adjusted for inflation.
      </span>
      <span>&#128336;Update on 09.20.2018</span>
    </div>
  </section>
)

export default TotalSales
