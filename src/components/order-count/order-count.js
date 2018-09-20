import React from 'react'
import './_order-count.scss'

const OrderCount = props => {
  const styles = {
    width: props.width,
    backgroundColor: props.color
  }
  return (
    <div className="ordCount">
      <p className="ordCount__total">{props.total}</p>
      <span className="ordCount__movie">Gross Sales - {props.title}</span>
      <div className="ordCount__meter">
        <span style={styles} className="ordCount__progress" />
      </div>
    </div>
  )
}

export default OrderCount
