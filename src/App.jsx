import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      {/* passing player names and symbol as an prop to Player component */}
      <div id="game-container">
        <ol id="players">
          <Player
            name="Player 1"
            symbol="X"
          />
          <Player
            name="Player 2"
            symbol="O"
          />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
