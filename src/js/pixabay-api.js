import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '44449535-a1df9548b4e4ca826019364d7',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearсh: true,
    per_page: '15',
  },
});

export async function getImage(imgName, currentPage) {
  const res = await axios.get('', {
    params: {
      q: imgName,
      page: currentPage,
    },
  });

  return res.data;
}