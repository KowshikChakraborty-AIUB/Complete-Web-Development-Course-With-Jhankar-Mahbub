import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { useState } from "react";

const Phones = () => {

    const [phones, setPhones] = useState([]);

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {

            const phoneData = data.data.data;
            const phoneFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            setPhones(phoneFakeData);
        })


    return (
        <div>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey={'price'} fill="green"></Bar>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>

        </div>
    );
};

export default Phones;