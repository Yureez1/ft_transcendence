export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 p-8">
      {/* Titre du projet */}
      <h1 className="text-4xl font-extrabold tracking-tight mb-12 text-zinc-900">
        Chess Transcendence
      </h1>

      {board[0][0]}
      <div className="aspect-square w-full max-w-[600px] bg-white shadow-xl rounded-lg border border-zinc-200 flex items-center justify-center">
        <p className="text-zinc-400 font-medium">Le plateau apparaîtra ici</p>
      </div>
    </main>
  );
}

function announceTurn(NamePlayer: string) : string {
  return (`Its ${NamePlayer} turn`);
}

function formatScore(score: number) : string {
  return `Actual score is ${score} points`; 
}

const row: string[] = ["Pawn", "Empty"];
const board: string[][] = [row];
const piece = ["Pawn", "Rook"];
{row.map((piece) => <span>{piece}</span>)}
