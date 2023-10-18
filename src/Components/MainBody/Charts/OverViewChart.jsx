import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const option = {
    grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 40
    },
    xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
            fontSize: 14,
            interval: 0,
            margin: 20,
            fontWeight: 'bold'
        }
    },
    yAxis: {
        type: "value",
        show: false,
    },
    series: [
        {
            data: [
                {value: 120, itemStyle: {color: '#f2efff'}}, 
                {value: 200, itemStyle: {color: '#5a32ea'}}, 
                {value: 150, itemStyle: {color: '#f2efff'}}, 
                {value: 80, itemStyle: {color: '#f2efff'}}, 
                {value: 70, itemStyle: {color: '#f2efff'}}, 
                {value: 110, itemStyle: {color: '#f2efff'}}, 
                {value: 130, itemStyle: {color: '#f2efff'}}, 
                {value: 110, itemStyle: {color: '#f2efff'}}, 
                {value: 70, itemStyle: {color: '#f2efff'}}, 
                {value: 110, itemStyle: {color: '#f2efff'}}, 
                {value: 190, itemStyle: {color: '#f2efff'}}, 
                {value: 180, itemStyle: {color: '#f2efff'}}],
            type: "bar",
            itemStyle: {
                emphasis: {
                    barBorderRadius: [50, 50],
                },
                normal: {
                    barBorderRadius: [10, 10, 10, 10],
                },
            },
            color: ['#f2efff','#5a32ea','#f2efff','#f2efff','#f2efff','#f2efff','#f2efff','#f2efff','#f2efff','#f2efff','#f2efff','#f2efff']
        },
    ],
};

const OverViewChart = () => {
    const myChart = useRef(null);

    

    useEffect(() => {
        if (!myChart.current) {
            myChart.current = echarts.init(
                document.getElementById("overviewChart")
            );
        }
        myChart.current.setOption(option)
    }, []);

    return <div id="overviewChart" className="w-full min-w-[720px] h-80"></div>;
};

export default OverViewChart;
