import Directory from './components/directory/directory.component';

const App = () => {

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
      "title": "womens",
      "imageUrl": "https://images.pexels.com/photos/755023/pexels-photo-755023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://images.pexels.com/photos/7163079/pexels-photo-7163079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    <Directory categories={categories} />
  );
}

export default App;
