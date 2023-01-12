import Directory from '../../components/directory/directory.component';

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://images.pexels.com/photos/5698909/pexels-photo-5698909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://images.pexels.com/photos/7679798/pexels-photo-7679798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 3,
      "title": "boots",
      "imageUrl": "https://images.pexels.com/photos/718981/pexels-photo-718981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 4,
      "title": "shirts",
      "imageUrl": "https://images.pexels.com/photos/4440571/pexels-photo-4440571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 5,
      "title": "pants",
      "imageUrl": "https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    <Directory categories={categories} />
  );
}

export default Home