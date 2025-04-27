
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Player {
  id: string;
  rank: number;
  name: string;
  address: string;
  score: number;
  wins: number;
  level: number;
  avatar: string;
}

const demoPlayers: Player[] = [
  {
    id: "1",
    rank: 1,
    name: "CryptoWarrior",
    address: "0x1a2b...3c4d",
    score: 14502,
    wins: 347,
    level: 42,
    avatar: "https://assets-lovable.b-cdn.net/cyberpunk-avatar-1.webp"
  },
  {
    id: "2",
    rank: 2,
    name: "BlockchainMage",
    address: "0x5e6f...7g8h",
    score: 13921,
    wins: 321,
    level: 39,
    avatar: "https://assets-lovable.b-cdn.net/cyberpunk-avatar-2.webp"
  },
  {
    id: "3",
    rank: 3,
    name: "MonadMaster",
    address: "0x9i0j...1k2l",
    score: 12845,
    wins: 298,
    level: 36,
    avatar: "https://assets-lovable.b-cdn.net/cyberpunk-avatar-3.webp"
  },
  {
    id: "4",
    rank: 4,
    name: "CryptoPunk",
    address: "0x3m4n...5o6p",
    score: 11782,
    wins: 275,
    level: 34,
    avatar: "https://assets-lovable.b-cdn.net/cyberpunk-avatar-4.webp"
  },
  {
    id: "5",
    rank: 5,
    name: "NFTHunter",
    address: "0x7q8r...9s0t",
    score: 10931,
    wins: 261,
    level: 31,
    avatar: "https://assets-lovable.b-cdn.net/cyberpunk-avatar-5.webp"
  },
  {
    id: "6",
    rank: 6,
    name: "BlockExplorer",
    address: "0x1u2v...3w4x",
    score: 9874,
    wins: 243,
    level: 29,
    avatar: "https://assets-lovable.b-cdn.net/cyberpunk-avatar-6.webp"
  },
  {
    id: "7",
    rank: 7,
    name: "TokenTrader",
    address: "0x5y6z...7a8b",
    score: 8761,
    wins: 214,
    level: 26,
    avatar: "https://assets-lovable.b-cdn.net/cyberpunk-avatar-7.webp"
  },
  {
    id: "8",
    rank: 8,
    name: "ChainChampion",
    address: "0x9c0d...1e2f",
    score: 7654,
    wins: 198,
    level: 24,
    avatar: "https://assets-lovable.b-cdn.net/cyberpunk-avatar-8.webp"
  },
  {
    id: "9",
    rank: 9,
    name: "GasGladiator",
    address: "0x3g4h...5i6j",
    score: 6543,
    wins: 176,
    level: 21,
    avatar: "https://assets-lovable.b-cdn.net/cyberpunk-avatar-9.webp"
  },
  {
    id: "10",
    rank: 10,
    name: "HashHero",
    address: "0x7k8l...9m0n",
    score: 5432,
    wins: 153,
    level: 19,
    avatar: "https://assets-lovable.b-cdn.net/cyberpunk-avatar-10.webp"
  }
];

const LeaderboardTable = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState<keyof Player>("rank");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    // Simulating API fetch from Monad blockchain
    const fetchLeaderboard = async () => {
      // In a real implementation, this would be fetched from a Monad smart contract
      setTimeout(() => {
        setPlayers(demoPlayers);
        setLoading(false);
      }, 1000);
    };

    fetchLeaderboard();
  }, []);

  const handleSort = (field: keyof Player) => {
    if (sortField === field) {
      // Toggle sort direction if same field is clicked
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Set new field and default to ascending
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedPlayers = [...players].sort((a, b) => {
    if (sortField === "rank" || sortField === "score" || sortField === "wins" || sortField === "level") {
      return sortDirection === "asc" 
        ? a[sortField] - b[sortField] 
        : b[sortField] - a[sortField];
    } else {
      return sortDirection === "asc"
        ? String(a[sortField]).localeCompare(String(b[sortField]))
        : String(b[sortField]).localeCompare(String(a[sortField]));
    }
  });

  const tableHeaderClass = "px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-monad";
  const tableCellClass = "px-6 py-4 whitespace-nowrap";

  return (
    <div className="glass-card overflow-hidden">
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-12 h-12 rounded-full border-4 border-monad border-t-transparent animate-spin"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-black/20">
              <tr>
                <th scope="col" className={tableHeaderClass} onClick={() => handleSort("rank")}>
                  Rank {sortField === "rank" && (sortDirection === "asc" ? "↑" : "↓")}
                </th>
                <th scope="col" className={tableHeaderClass} onClick={() => handleSort("name")}>
                  Player {sortField === "name" && (sortDirection === "asc" ? "↑" : "↓")}
                </th>
                <th scope="col" className={`${tableHeaderClass} hidden md:table-cell`} onClick={() => handleSort("address")}>
                  Address {sortField === "address" && (sortDirection === "asc" ? "↑" : "↓")}
                </th>
                <th scope="col" className={tableHeaderClass} onClick={() => handleSort("score")}>
                  Score {sortField === "score" && (sortDirection === "asc" ? "↑" : "↓")}
                </th>
                <th scope="col" className={`${tableHeaderClass} hidden md:table-cell`} onClick={() => handleSort("wins")}>
                  Wins {sortField === "wins" && (sortDirection === "asc" ? "↑" : "↓")}
                </th>
                <th scope="col" className={`${tableHeaderClass} hidden sm:table-cell`} onClick={() => handleSort("level")}>
                  Level {sortField === "level" && (sortDirection === "asc" ? "↑" : "↓")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {sortedPlayers.map((player, index) => (
                <motion.tr 
                  key={player.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={player.rank <= 3 ? "bg-gradient-to-r from-monad/10 to-transparent" : ""}
                >
                  <td className={tableCellClass}>
                    <span className={`
                      inline-flex items-center justify-center w-8 h-8 rounded-full 
                      ${player.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' : 
                        player.rank === 2 ? 'bg-gray-400/20 text-gray-300' : 
                          player.rank === 3 ? 'bg-amber-600/20 text-amber-500' : 'bg-gray-700/20'}
                    `}>
                      {player.rank}
                    </span>
                  </td>
                  <td className={tableCellClass}>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full border border-white/20" src={player.avatar} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{player.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className={`${tableCellClass} hidden md:table-cell text-gray-400`}>{player.address}</td>
                  <td className={`${tableCellClass} text-monad font-semibold`}>
                    {player.score.toLocaleString()}
                  </td>
                  <td className={`${tableCellClass} hidden md:table-cell text-gray-300`}>
                    {player.wins}
                  </td>
                  <td className={`${tableCellClass} hidden sm:table-cell`}>
                    <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-monad/20 text-monad-light">
                      Lvl {player.level}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeaderboardTable;
