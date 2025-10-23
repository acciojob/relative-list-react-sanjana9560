import React from 'react';

const App = () => {
  const relatives = ["Rohan", "Priya", "Amit", "Neha"];
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key="relativeList">
        {relatives.map((item, index) => (
          <li key={`relativeListItem${index + 1}`}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
