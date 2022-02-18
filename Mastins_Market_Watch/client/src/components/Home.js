import React from 'react';

export default function Home() {
  return (
    <div className="home">
      <div>
        <h1>Mastin's Market Watch</h1>
        <h2>Watch the market and learn how to invest!</h2>
        <img
          style={{ display: 'block', maxWidth: '25%', alignItems: 'center' }}
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="investing"
        />
      </div>
    </div>
  );
}
