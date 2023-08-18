import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Rectangle, ResponsiveContainer } from 'recharts';
import styles from '../styles/Layout.module.css';
import headerStyles from '../styles/Header.module.css';
import Image from 'next/image';

const data = [
    { name: 'Los Hermanos', value: 7, color: '#FF0000' },
    { name: 'El Regalo', value: 6, color: '#00FF00' },
    { name: 'Al Pastor', value: 10, color: '#00ffff' },
    { name: 'Birria Landia', value: 9, color: '#FFFF00' },
    { name: 'Bistro Latino', value: 1, color: '#FF00FF' }
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { color } = payload[0].payload;

        return (
            <div
                style={{
                    backgroundColor: color,
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #d0d0d0'
                }}
            >
                <p>{payload[0].name}</p>
                <p>
                    <span style={{ fontWeight: 'bold' }}>Value:</span> {payload[0].value}
                </p>
            </div>
        );
    }

    return null;
};

const Faux3DBarChart = () => (
    <div style={{ backgroundColor: '#b1ffb1' }} className={styles.chartContainer}>
        <ResponsiveContainer width="100%" aspect={2}>
            <BarChart data={data} fill="#00FF00">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    interval={0}
                    tickLine={{ transform: 'translate(0, -6)' }}
                    tick={{ fontSize: '2vw', fontFamily: 'Roboto', fontWeight: 'bold', fill: '#8884d8' }}
                />
                <YAxis
                    tick={{ fontSize: '2vw', fontFamily: 'Helvetica Neue, Arial', fontWeight: 'bold', fill: '#8884d8' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" fill="#8884d8" shape={<Rectangle radius={[10, 10, 0, 0]} />} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default function BestTacosInBK() {
    return (
        <div className={styles.gridcontainer4}>
            <div className={headerStyles.description}>
                <p>The Best Tacos in BK</p>
                <img
                    className={styles.photo}
                    src="https://res.cloudinary.com/adamaslan/image/upload/v1685058269/tacos1_onlnoj.jpg"
                    alt="food"
                />
            </div>
            <p>
                We did a poll of the best tacos spots in BK and the results were very close. There was a write-in for Taqueria Ramirez, which has us wondering if we need to do another poll! It’s always exciting to discover new places that serve delicious tacos. We value the opinions of our followers and would love to hear more about their favorite taco spots in BK. Hit us up on Instagram to let us know what you think.
            </p>
            <Faux3DBarChart />
        </div>
    );
}
