import axios from 'axios';

export default {
    async getTemperature() {
        try {
            const res = await axios.get(
                'https://api.thingspeak.com/channels/1502648/fields/1.json?api_key=AREDARZ38RG41IEK&results=1'
            );
            const feeds = res.data.feeds;
            return parseFloat(feeds[0].field1).toFixed(1);
        } catch (error) {
            console.error(error);
        }
    },
    async getHumidity() {
        try {
            const res = await axios.get(
                'https://api.thingspeak.com/channels/1502648/fields/2.json?api_key=AREDARZ38RG41IEK&results=1'
            );
            const feeds = res.data.feeds;
            return parseFloat(feeds[0].field2).toFixed(1);
        } catch (error) {
            console.error(error);
        }
    },
    async pushDate(date) {
        const req = `https://api.thingspeak.com/update.json?api_key=OPGF37TA8YYPOZ5G&field1=${date.getDate()}&field2=${
            date.getMonth() + 1
        }&field3=${date.getFullYear()}&field4=${date.getHours()}&field5=${date.getMinutes()}`;
        console.log(req);
        try {
            const res = await axios.get(req);
            return res;
        } catch (err) {
            console.error(err);
        }
    }
};
