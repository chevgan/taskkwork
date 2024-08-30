import React from 'react';
import BuyerList from "./BuyerList/BuyerList";

const mockData = [
    {
        id: 1,
        name: 'John Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    },
    {
        id: 3,
        name: 'John Smith'
    },
    {
        id: 4,
        name: 'Jane Smith'
    },
    {
        id: 5,
        name: 'John Johnson'
    }
]

function App() {
  return (
    <div>
        <BuyerList users_detail={mockData} />
    </div>
  );
}

export default App;
