import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock3, Gift, Star, Trophy, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Leaderboard | Abaalmarin" },
      { name: "description", content: "Hoggaamiyeyaasha iyo abaalmarinnada bisha." },
      { property: "og:title", content: "Leaderboard | Abaalmarin" },
      { property: "og:description", content: "Hoggaamiyeyaasha iyo abaalmarinnada bisha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Leaderboard,
});

type Player = {
  rank: number;
  name: string;
  points: string;
  avatar: string;
  avatarTone: string;
};

const players: Player[] = [
  { rank: 1, name: "Abdirahman Ali", points: "2,450", avatar: "👨🏽", avatarTone: "bg-avatar-blue" },
  { rank: 2, name: "Mohamed Farah", points: "2,180", avatar: "👨🏽", avatarTone: "bg-avatar-green" },
  { rank: 3, name: "Hassan Moalim", points: "1,950", avatar: "👨🏽", avatarTone: "bg-avatar-red" },
  { rank: 4, name: "Zahra Ahmed", points: "1,620", avatar: "🧕🏽", avatarTone: "bg-avatar-cyan" },
  { rank: 5, name: "Liban Yusuf", points: "1,480", avatar: "👨🏽", avatarTone: "bg-avatar-blue" },
  { rank: 6, name: "Ahmed Hassan", points: "1,320", avatar: "👨🏽‍🦱", avatarTone: "bg-avatar-green" },
  { rank: 7, name: "Fartuun Abdi", points: "1,190", avatar: "🧕🏽", avatarTone: "bg-avatar-purple" },
  { rank: 8, name: "Khadar Mohamed", points: "1,060", avatar: "👨🏽", avatarTone: "bg-avatar-orange" },
  { rank: 9, name: "Said Nur", points: "980", avatar: "👨🏽", avatarTone: "bg-avatar-blue" },
  { rank: 10, name: "Amina Yusuf", points: "870", avatar: "🧕🏽", avatarTone: "bg-avatar-pink" },
];

const rewards = [
  { rank: 1, discount: "-15%", tone: "reward-gold" },
  { rank: 2, discount: "-10%", tone: "reward-silver" },
  { rank: 3, discount: "-5%", tone: "reward-bronze" },
];

function Medal({ rank, compact = false }: { rank: number; compact?: boolean }) {
  return (
    <div className={`medal medal-${rank} ${compact ? "medal-compact" : ""}`} aria-label={`Rank ${rank}`}>
      <span>{rank}</span>
    </div>
  );
}

function Leaderboard() {
  return (
    <main className="min-h-screen bg-page font-sans text-foreground">
      <section className="mx-auto min-h-screen w-full max-w-[980px] overflow-hidden bg-surface shadow-page sm:my-6 sm:min-h-0 sm:rounded-lg">
        <header className="leader-header relative overflow-hidden px-4 pb-5 pt-3 sm:px-9 sm:pb-7 sm:pt-5">
          <div className="relative z-10 flex items-center gap-3">
            <Button variant="ghost" size="icon" aria-label="Go back" onClick={() => window.history.back()} className="h-11 w-11 shrink-0 text-header-foreground hover:bg-header-hover hover:text-header-foreground">
              <ArrowLeft className="size-8" strokeWidth={3} />
            </Button>
            <div className="min-w-0">
              <h1 className="truncate text-[30px] font-extrabold leading-tight text-header-foreground sm:text-[38px]">Leaderboard</h1>
              <p className="text-[15px] font-semibold text-header-muted sm:text-lg">Ku tartan, kasbo dhibco, hel abaalmarin!</p>
            </div>
          </div>
          <div className="trophy" aria-hidden="true">
            <span className="trophy-ray trophy-ray-left" />
            <Trophy strokeWidth={2.6} />
            <Star className="trophy-star" fill="currentColor" />
            <span className="trophy-ray trophy-ray-right" />
          </div>
        </header>

        <div className="space-y-4 p-3 sm:p-6">
          <section className="rewards-panel grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-lg px-4 py-4 sm:grid-cols-[240px_repeat(3,1fr)] sm:gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <Gift className="size-11 shrink-0 text-primary sm:size-14" strokeWidth={2.5} />
              <h2 className="text-xl font-extrabold leading-tight text-primary sm:text-2xl">Leaderboard<br />Rewards</h2>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-2 sm:col-span-3 sm:col-start-2 sm:row-start-1">
              {rewards.map((reward) => (
                <div key={reward.rank} className={`${reward.tone} flex min-w-0 items-center justify-center gap-2 rounded-lg border px-2 py-2.5`}>
                  <Medal rank={reward.rank} compact />
                  <div className="min-w-0">
                    <p className="text-[11px] font-extrabold text-primary sm:text-sm">Top {reward.rank}</p>
                    <p className="text-lg font-black leading-none text-primary sm:text-2xl">{reward.discount}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="reset-panel grid grid-cols-[minmax(0,1fr)_auto] items-center rounded-lg px-4 py-3 sm:px-7">
            <div className="flex min-w-0 items-center gap-3">
              <CalendarDays className="size-8 shrink-0 text-primary" strokeWidth={2.7} />
              <p className="truncate text-sm font-extrabold sm:text-lg"><span className="text-primary">Reset:</span> &nbsp;September 2026</p>
            </div>
            <div className="flex shrink-0 items-center gap-3 border-l border-primary/30 pl-4 sm:gap-5 sm:pl-8">
              <Clock3 className="size-8 text-primary sm:size-10" strokeWidth={2.7} />
              <div>
                <p className="text-[10px] font-bold text-primary sm:text-xs">Days left</p>
                <p className="text-base font-black leading-tight text-primary sm:text-2xl">16D&nbsp; 11:23</p>
              </div>
            </div>
          </section>

          <ol className="space-y-2.5">
            {players.map((player) => (
              <li key={player.rank} className={`leader-row rank-${player.rank} grid grid-cols-[42px_52px_minmax(0,1fr)_auto] items-center gap-2 rounded-lg border px-2.5 py-2 sm:grid-cols-[58px_66px_minmax(0,1fr)_150px] sm:gap-4 sm:px-5 sm:py-3`}>
                <div className="flex justify-center">
                  {player.rank <= 3 ? <Medal rank={player.rank} /> : <span className="text-lg font-extrabold text-rank">{player.rank}</span>}
                </div>
                <div className={`avatar ${player.avatarTone}`} aria-hidden="true">
                  <UserRound className="avatar-person" strokeWidth={2.1} />
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-[15px] font-extrabold leading-tight text-name sm:text-lg">{player.name}</h3>
                  <p className="text-xs font-semibold text-primary/75 sm:text-sm">Kaalinta #{player.rank}</p>
                </div>
                <div className="flex shrink-0 items-center justify-end gap-1.5">
                  <Star className="size-6 fill-star text-star sm:size-7" strokeWidth={1.6} />
                  <span className="whitespace-nowrap text-sm font-black text-primary sm:text-lg">{player.points} <span className="hidden sm:inline">pts</span></span>
                </div>
                {player.rank <= 3 && (
                  <div className={`reward-chip chip-${player.rank} col-span-4 mt-1 flex items-center justify-center gap-2 rounded-md border py-1.5 sm:absolute sm:right-4 sm:col-span-1 sm:mt-0 sm:w-[118px]`}>
                    <Gift className="size-5" strokeWidth={2.5} />
                    <span className="text-sm font-black">{rewards[player.rank - 1]?.discount} Reward</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}