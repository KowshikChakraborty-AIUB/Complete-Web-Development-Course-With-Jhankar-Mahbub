import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Audio, Grid } from 'react-loader-spinner'
import { useState } from "react";

const Phones = () => {

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        })


    return (

        <div>

            {
                loading && <div>
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color='green'
                        ariaLabel='three-dots-loading'
                        wrapperStyle
                        wrapperClass
                    />
                    <Grid
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="grid-loading"
                        radius="12.5"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            }


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