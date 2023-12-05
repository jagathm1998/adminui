import axios from 'axios';

const PORT = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

export const getUsers = async () => {
    try {
        const res = await axios.get(PORT);
        return res.data;
    } catch (err) {
        console.error('Error in fetching the users: ', err);
    }
}