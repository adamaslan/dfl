import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Rectangle, ResponsiveContainer} from 'recharts';
import styles from "../styles/Layout.module.css";
import headerStyles from "../styles/Header.module.css";
import Image from "next/image";

const data = [
    { name: 'Los Hermanos', value: 7 },
    { name: 'El Regalo', value: 6 },

    { name: 'Al Pastor', value: 10 },
    { name: 'Birria Landia', value: 9 },
    { name: 'Bistro Latino', value: 1 }
];

const Faux3DBarChart = () => (

    <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/*<Bar dataKey="value" fill="#8884d8">*/}
        {/*    {data.map((entry, index) => (*/}
        {/*        <Cell key={`cell-${index}`} fillOpacity={1 - index * 0.1} />*/}
        {/*    ))}*/}
        {/*</Bar>*/}
        <Bar dataKey="value" fill="#8884d8" shape={<Rectangle radius={[10, 10, 0, 0]} />} />
    </BarChart>

);

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.article1}>

                <p className={headerStyles.description}>
                <h3>The Best Tacos in BK</h3>
                    <Image
                        className={styles.card4}
                        src="https://res.cloudinary.com/adamaslan/image/upload/v1685058269/tacos1_onlnoj.jpg"   width={500}
                        height={500}
                        alt="food"
                    />
                </p>
            <p>We did a poll of the best tacos spots in BK and the results were very close. There was a write in for Taqueria Ramirez, which has us wondering if we need to do another poll! Hit us up on instagram to let us know what you think.</p>
            </div>



            <ResponsiveContainer width="100%" height="100%">
            <Faux3DBarChart />
        </ResponsiveContainer>

        </div>
    );
}
