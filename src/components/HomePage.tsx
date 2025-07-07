import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const [balance, setBalance] = useState(100); // Starting with Kes 100 welcome bonus

  const games = [
    { name: "Lucky Spin", url: "https://gamewina.com/ke/game?url=%2Fgames%2Fkk%2Flucky-wheel-normal%2F%3Fsid%3DDZA6vYocd3A-Kr96C-y6bcGvSIh9FHNY6m3-DB0YxYd7WgrTJxItN51spjCbd5Ceywsi9DRTs58PEpAKuitZpw__%26gameId%3D2541009&gameId=2541009", color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
    { name: "Roulette Wheel", url: "https://gamewina.com/ke/game?url=%2Fcasino%2Fclassic-roulette2%2F%3Fsid%3DUeRG1PeEN3U43E0ojGDNBRfE0yjwOjGPks2dVACQuAnt%2F4LZ8eH7v4WDJIKwDjnWyrTiJUTmbUWZ67sdn-cqeQ__%26gameId%3D2541013&gameId=2541013", color: "bg-gradient-to-r from-red-500 to-pink-500" },
    { name: "Aviator", url: "https://gamewina.com/ke/game?url=%2Fgames%2Fkk%2Fcash-or-crash%2F%3Fsid%3DLhvLgghFPIMenhybgPiMyz6IHZUQk8sD4bFfkYKnXyzX%2FU4dfGMz9m1Itb%2FhMP5qMslb4Fzyix10Fknve8yh9g__%26gameId%3D2541031&gameId=2541031", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { name: "Pool Table", url: "https://gamewina.com/ke/game?url=%2Fgames%2Fkk%2Flucky-pool%2F%3Fsid%3Dnm8aG487vydlmQ2PZcAqRXbOI5k-QG0YzxTA69cGLOjoCMLnmftE-5yXAclrPlRwl9jHxHh0HnBJ6-TKATrP4g__%26gameId%3D2541012&gameId=2541012", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
    { name: "Penalty Shooters", url: "https://gamewina.com/ke/game?url=%2Fgames%2Fkk%2Fpenalty-shooters%2F%3Fsid%3Daj-yxjR%2FYe5TiL6CF2YTS4WxVdr9eeeXQ9osvh96wTCLSDOeCT%2FlOWIRbnoizO6pdSLL%2FoLlVTh6wAqlPLsBhQ__%26gameId%3D2541004&gameId=2541004", color: "bg-gradient-to-r from-purple-500 to-violet-500" },
    { name: "Spin Poker", url: "https://gamewina.com/ke/game?url=%2Fcasino%2FspinPoker%2F%3Fsid%3DKmOUnE6PALC7fTli7KsGPzVkf0nglUqBy9QCJIBXaCw71Y42k%2Fdy0nttz2-oYfTcTB2HY6qdPrzCHMhinIhO6w__%26gameId%3D2541030&gameId=2541030", color: "bg-gradient-to-r from-indigo-500 to-blue-500" },
    { name: "Lucky 777", url: "https://gamewina.com/ke/game?url=%2Fcasino%2Fsuper777%2F%3Fsid%3DH7ihacVIixUJMMIDZUchzsAmV4Xfh3-a4EnQE2zmygmR5M0jzaEab9MhSdFF6c812B2YJZ7XeKPJkS6wg1DnSg__%26gameId%3D2541037&gameId=2541037", color: "bg-gradient-to-r from-gold to-yellow-500" },
  ];

  const handleGameClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleMoreGames = () => {
    window.open('https://gamewina.com', '_blank');
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header with Balance */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent">
            GameHub
          </h1>
          <p className="text-muted-foreground">Welcome to your gaming paradise</p>
        </div>
        <div className="text-right">
          <Badge variant="secondary" className="text-lg px-4 py-2 bg-gold text-gold-foreground animate-glow">
            Balance: Kes {balance}
          </Badge>
          <p className="text-xs text-muted-foreground mt-1">Welcome Bonus Applied!</p>
        </div>
      </div>

      {/* Games Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Casino Games</h2>
        <div className="grid grid-cols-2 gap-4">
          {games.map((game, index) => (
            <Card 
              key={game.name} 
              className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => handleGameClick(game.url)}
                  className={`w-full h-32 ${game.color} relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-white font-bold text-lg text-center px-2">
                      {game.name}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 bg-white/50 rounded-full animate-pulse-gaming" />
                  </div>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Games Button */}
        <Button 
          onClick={handleMoreGames}
          className="w-full h-16 text-lg font-bold bg-gradient-to-r from-primary to-neon-purple hover:from-primary/80 hover:to-neon-purple/80 animate-glow"
        >
          🎮 More Games - Visit Gamewina
        </Button>
      </div>

      {/* Quick Stats */}
      <Card className="bg-gradient-to-r from-card to-secondary/20">
        <CardHeader>
          <CardTitle className="text-center text-primary">Game Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-neon-green">127</p>
              <p className="text-sm text-muted-foreground">Players Online</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gold">₹45,321</p>
              <p className="text-sm text-muted-foreground">Daily Winnings</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-neon-blue">98.5%</p>
              <p className="text-sm text-muted-foreground">Win Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}