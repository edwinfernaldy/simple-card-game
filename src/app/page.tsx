import Board from "../../components/Board";
import Title from "../../components/Title";

export default function Home() {
  return (
    <main className='min-h-screen p-24 flex flex-col justify-evenly'>
      <div className='text-center'>
        <Title>Simple Card Game</Title>
        <p>Guess the next card.</p>
      </div>

      <Board />
    </main>
  );
}
