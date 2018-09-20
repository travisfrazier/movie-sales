import React from 'react'
import './_graph.scss'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'
import graphColors from '../../pages/partials/_graph-colors'

class Graph extends React.Component {
  state = {
    data: [
      { name: 'Rel', uv: 26.7, pv: 8.6, amt: 2400 },
      { name: '1wk', uv: 137, pv: 52.9, amt: 2210 },
      { name: '2wks', uv: 140, pv: 71.1, amt: 2290 },
      { name: '3wks', uv: 96.9, pv: 45, amt: 2000 },
      { name: '4wks', uv: 69.9, pv: 37.5, amt: 2181 },
      { name: '5wks', uv: 66.3, pv: 42.6, amt: 2500 },
      { name: '6wks', uv: 47.6, pv: 32.8, amt: 2100 }
    ]
  }

  render() {
    return (
      <div className="graph__container">
        <ResponsiveContainer>
          <AreaChart
            width={700}
            height={225}
            data={this.state.data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis domain={[20, 70]} ticks={[0, 20, 40, 80, 160]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              name="Avatar"
              stroke={graphColors.color1}
              fillOpacity={0.7}
              fill={graphColors.color1}
            />
            <Area
              type="monotone"
              dataKey="pv"
              name="Titanic"
              stroke={graphColors.color2}
              fillOpacity={0.5}
              fill={graphColors.color2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default Graph
