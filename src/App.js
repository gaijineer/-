import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>今日の誕生日 {people.length}人</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          クリア
        </button>
      </section>
    </main>
  );
}

export default App;
