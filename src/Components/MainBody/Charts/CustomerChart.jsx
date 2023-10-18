import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const option = {
    grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    toolbox: {
        show: false,
    },
    series: [
        {
            name: "Nightingale Chart",
            type: "pie",
            radius: ["60%", "100%"],
            roseType: "area",
            labelLine: {
                show: false,
            },
            label: {
                show: false,
            },
            data: [
                { value: 35, itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#f91d8a' },   // Color at 0% position
                        { offset: 1, color: '#e84da4' }    // Color at 100% position
                    ])
                }},
                { value: 25, itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#623cea' },   // Color at 0% position
                        { offset: 1, color: '#ba84ec' }    // Color at 100% position
                    ])
                }},
                { value: 20, itemStyle: {color: '#f1effb'}},
            ],
        },
    ],
};

const CustomerChart = () => {
    const myChart = useRef(null);

   

    useEffect(() => {
        if (!myChart.current) {
            myChart.current = echarts.init(
                document.getElementById("customerChart")
            );
        }
        myChart.current.setOption(option);
    }, []);

    return (
            <div className="w-fit h-fit mx-auto relative mb-4">
                <div id="customerChart" className="w-72 h-72 glow-shadow rounded-full mx-auto p-6"></div>
                <div className="text-center absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center leading-4 font-bold">
                    <p className="text-4xl">65%</p>
                    <p>Total New</p>
                    <p>Customers</p>
                </div>
            </div>
    );
};

export default CustomerChart;
