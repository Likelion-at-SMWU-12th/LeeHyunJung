import "./App.css";
import Hello from "./Hello";
import Counter from "./Counter";
import Info from "./Info";
import MovieList from "./MovieList";

function App() {
  return (
    <>
      <Info />
      <Hello name="이현정" color="blue" />
      <Counter />
      <MovieList />
    </>
  );
}

export default App;
