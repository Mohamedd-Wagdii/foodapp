import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] =  useState("");

  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
        <FoodList foodData={foodData} />
        </InnerContainer>
      </Container>
      <Nav />
    </div>
  );
}

export default App
