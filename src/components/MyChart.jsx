/* THIS PAGE IS NOT PART OF THR APP */

/* 
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 150 },
    { name: "Apr", value: 250 },
    { name: "May", value: 300 },
];

const MyChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MyChart;
 */

/* import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
    { month: "Jan", sales: 400 },
    { month: "Feb", sales: 300 },
    { month: "Mar", sales: 500 },
    { month: "Apr", sales: 700 },
    { month: "May", sales: 600 },
];

const MyChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" barSize={50} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyChart;
 */
/* 
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "Food", value: 500 },
    { name: "Transport", value: 250 },
    { name: "Entertainment", value: 150 },
    { name: "Rent", value: 800 },
    { name: "Shopping", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

const MyChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default MyChart; */

/* import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
    { month: "Jan", profit: 200 },
    { month: "Feb", profit: 300 },
    { month: "Mar", profit: 250 },
    { month: "Apr", profit: 400 },
    { month: "May", profit: 350 },
];

const MyChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="profit" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default MyChart;

 */

/* import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
    { month: "Jan", sales: 400, expenses: 200, profit: 200 },
    { month: "Feb", sales: 300, expenses: 180, profit: 120 },
    { month: "Mar", sales: 500, expenses: 250, profit: 250 },
    { month: "Apr", sales: 700, expenses: 300, profit: 400 },
];

const MyChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} />
                <Line type="monotone" dataKey="expenses" stroke="#82ca9d" strokeWidth={3} />
                <Line type="monotone" dataKey="profit" stroke="#ff7300" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MyChart;
 */

/* import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
    { month: "Jan", sales: 400, expenses: 200 },
    { month: "Feb", sales: 300, expenses: 180 },
    { month: "Mar", sales: 500, expenses: 250 },
    { month: "Apr", sales: 700, expenses: 300 },
];

const MyChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" barSize={50} />
                <Bar dataKey="expenses" fill="#82ca9d" barSize={50} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyChart;
 */

/* import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const data = [
    { month: "Jan", sales: 400, expenses: 200 },
    { month: "Feb", sales: 300, expenses: 180 },
    { month: "Mar", sales: 500, expenses: 250 },
    { month: "Apr", sales: 700, expenses: 300 },
];

const MyChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" stackId="1" />
                <Area type="monotone" dataKey="expenses" stroke="#82ca9d" fill="#82ca9d" stackId="1" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default MyChart;
 */

/* import React from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { skill: "Speed", value: 85 },
    { skill: "Strength", value: 90 },
    { skill: "Stamina", value: 75 },
    { skill: "Defense", value: 80 },
    { skill: "Attack", value: 95 },
];

const RadarChartExample = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis />
                <Tooltip />
                <Legend />
                <Radar name="Player Stats" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default RadarChartExample;
 */

import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { x: 5, y: 20 },
    { x: 10, y: 35 },
    { x: 15, y: 50 },
    { x: 20, y: 65 },
    { x: 25, y: 80 },
    { x: 30, y: 95 },
];

const ScatterChartExample = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <ScatterChart>
                <CartesianGrid />
                <XAxis type="number" dataKey="x" name="Study Hours" />
                <YAxis type="number" dataKey="y" name="Exam Score" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="Students" data={data} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    );
};

export default ScatterChartExample;
