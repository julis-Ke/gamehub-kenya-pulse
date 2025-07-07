import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: number;
  type: 'deposit' | 'withdraw';
  user: string;
  amount: number;
  time: string;
}

export default function FloatingNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Sample M-Pesa messages from different users
  const sampleNotifications: Omit<Notification, 'id'>[] = [
    { type: 'deposit', user: 'John K.', amount: 1000, time: '2 min ago' },
    { type: 'withdraw', user: 'Mary W.', amount: 750, time: '5 min ago' },
    { type: 'deposit', user: 'Peter M.', amount: 500, time: '8 min ago' },
    { type: 'withdraw', user: 'Grace N.', amount: 1200, time: '12 min ago' },
    { type: 'deposit', user: 'David O.', amount: 2000, time: '15 min ago' },
    { type: 'withdraw', user: 'Sarah L.', amount: 600, time: '18 min ago' },
    { type: 'deposit', user: 'Mike R.', amount: 800, time: '22 min ago' },
    { type: 'withdraw', user: 'Lucy A.', amount: 950, time: '25 min ago' },
    { type: 'deposit', user: 'James T.', amount: 1500, time: '28 min ago' },
    { type: 'withdraw', user: 'Ann B.', amount: 700, time: '30 min ago' }
  ];

  useEffect(() => {
    // Initialize with random notifications
    const shuffled = [...sampleNotifications].sort(() => 0.5 - Math.random());
    const initial = shuffled.slice(0, 10).map((notif, index) => ({
      ...notif,
      id: index + 1
    }));
    setNotifications(initial);

    // Renew notifications every 5 minutes (300,000ms)
    const interval = setInterval(() => {
      const shuffled = [...sampleNotifications].sort(() => 0.5 - Math.random());
      const renewed = shuffled.slice(0, 10).map((notif, index) => ({
        ...notif,
        id: Date.now() + index
      }));
      setNotifications(renewed);
    }, 300000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Floating Notification Button */}
      <button
        onClick={toggleVisibility}
        className="fixed top-4 right-4 z-50 w-12 h-12 bg-gradient-to-r from-neon-green to-accent rounded-full shadow-lg flex items-center justify-center animate-pulse-gaming hover:scale-110 transition-transform"
      >
        <span className="text-white font-bold text-sm">💸</span>
        <Badge className="absolute -top-1 -right-1 bg-gaming-red text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
          {notifications.length}
        </Badge>
      </button>

      {/* Notifications Panel */}
      {isVisible && (
        <div className="fixed top-16 right-4 z-40 w-80 max-h-96 overflow-y-auto">
          <Card className="border-primary/20 bg-card/95 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-primary">Live Transactions</h3>
                <button
                  onClick={toggleVisibility}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        notification.type === 'deposit' ? 'bg-neon-green animate-pulse' : 'bg-gaming-red animate-pulse'
                      }`} />
                      <div>
                        <p className="text-sm font-medium">
                          {notification.user}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Badge 
                        className={`${
                          notification.type === 'deposit' 
                            ? 'bg-neon-green/20 text-neon-green border-neon-green/50' 
                            : 'bg-gaming-red/20 text-gaming-red border-gaming-red/50'
                        }`}
                      >
                        {notification.type === 'deposit' ? '+' : '-'}Kes {notification.amount}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.type === 'deposit' ? 'Deposited' : 'Withdrawn'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-muted-foreground">
                  🔄 Updates every 5 minutes
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}