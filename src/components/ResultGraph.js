import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const TypingChart = ({ typingData }) => {
  console.log(typingData);
  // 미리 생성한 타수 데이터
  // const typingData = [
  //   { time: '0', typing: 65 },
  //   { time: '5', typing: 180 },
  //   { time: '10', typing: 340 },
  //   { time: '15', typing: 270 },
  //   { time: '20', typing: 390 },
  //   { time: '25', typing: 240 },
  //   { time: '30', typing: 140 },
  // ];

  const dotStyle = {
    stroke: '#FFFFFF', // 꺽인점 테두리 색상
    fill: '#F1B4BB', // 꺽인점 내부 색상
    r: 2, // 꺽인점 크기
  };

  // const tooltipFormatter = (value) => [`${value}타`];
  const tooltipFormatter = (value, name, props) => [`${value}타`, `Section ${props.payload.section}`];
  
  return (
    <div>
      <LineChart
        width={450}
        height={230}
        data={typingData}
        margin={{ top: 20, right: 30, left: 30, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="section" tick={{ fill: 'transparent' }} />
        <YAxis  tick={{ fill: '#FFFFFF', fontSize: '12px'}} />
        <Tooltip contentStyle={{ backgroundColor: '#F1B4BB', fontSize: '15px', borderRadius: '5px', border: 'none', width: '160px', height: '70px'}}
          itemStyle={{ color: '#FFFFFF' }}
          formatter={tooltipFormatter}
          label={null}
          item={null}
          />
        <Line type="linear" dataKey="typing" stroke="#F1B4BB" strokeWidth={2} dot={dotStyle} />
      </LineChart>
    </div>
  );
};

export default TypingChart;
