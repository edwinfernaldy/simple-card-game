import Board from "../components/Board";
import Title from "../components/Title";

export default function Home() {
  return (
    <main className='min-h-screen md:p-24 p-8 flex flex-col justify-evenly'>
      <div className='text-center'>
        <Title>Simple Card Game</Title>
        <p>Guess the next card value.</p>
      </div>

      <Board />
    </main>
  );
}
