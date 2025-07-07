import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export default function WalletPage() {
  const [depositAmount, setDepositAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [showDepositInstructions, setShowDepositInstructions] = useState(false);

  const handleDeposit = () => {
    if (depositAmount && transactionId) {
      alert(`Deposit request submitted! Amount: Kes ${depositAmount}, Transaction ID: ${transactionId}`);
      setDepositAmount("");
      setTransactionId("");
    }
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (amount < 500) {
      alert("Minimum withdrawal amount is Kes 500");
      return;
    }
    if (withdrawAmount) {
      alert(`Withdrawal request submitted! Amount: Kes ${withdrawAmount}`);
      setWithdrawAmount("");
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">
          Wallet
        </h1>
        <p className="text-muted-foreground">Manage your funds</p>
      </div>

      {/* Balance Card */}
      <Card className="bg-gradient-to-r from-primary/10 to-neon-blue/10 border-primary/20">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-muted-foreground">Current Balance</p>
            <p className="text-4xl font-bold text-gold animate-glow">Kes 100</p>
            <Badge className="mt-2 bg-neon-green text-white">Welcome Bonus</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for Deposit/Withdraw */}
      <Tabs defaultValue="deposit" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
        </TabsList>

        {/* Deposit Tab */}
        <TabsContent value="deposit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-neon-green">💰 Deposit Funds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => setShowDepositInstructions(!showDepositInstructions)}
                className="w-full bg-neon-green hover:bg-neon-green/80"
              >
                📱 Pay with M-Pesa
              </Button>

              {showDepositInstructions && (
                <Alert className="border-neon-green/50 bg-neon-green/10">
                  <AlertDescription>
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold">M-Pesa Payment Instructions:</p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Go to M-Pesa menu</li>
                        <li>Select "Lipa na M-Pesa"</li>
                        <li>Select "Paybill"</li>
                        <li>Enter Business Number: <strong>522522</strong></li>
                        <li>Account Number: <strong>0724176154</strong></li>
                        <li>Enter amount and your M-Pesa PIN</li>
                        <li>You'll receive a confirmation SMS</li>
                        <li>Enter the transaction ID below</li>
                      </ol>
                    </div>
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-4">
                <div>
                  <Label htmlFor="deposit-amount">Amount (Kes)</Label>
                  <Input
                    id="deposit-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    className="border-primary/50 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="transaction-id">M-Pesa Transaction ID</Label>
                  <Input
                    id="transaction-id"
                    placeholder="e.g., QH7X8Y9Z1A"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="border-primary/50 focus:border-primary"
                  />
                </div>

                <Button 
                  onClick={handleDeposit}
                  className="w-full bg-gradient-to-r from-primary to-neon-blue"
                  disabled={!depositAmount || !transactionId}
                >
                  Submit Deposit
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Withdraw Tab */}
        <TabsContent value="withdraw" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-gaming-red">💸 Withdraw Funds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-gaming-red/50 bg-gaming-red/10">
                <AlertDescription>
                  <strong>Minimum withdrawal:</strong> Kes 500
                </AlertDescription>
              </Alert>

              <div>
                <Label htmlFor="withdraw-amount">Withdrawal Amount (Kes)</Label>
                <Input
                  id="withdraw-amount"
                  type="number"
                  placeholder="Min: 500"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="border-gaming-red/50 focus:border-gaming-red"
                />
              </div>

              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Withdrawals are processed within 24 hours</p>
                <p>• Money will be sent to your registered M-Pesa number</p>
                <p>• Processing fee: 2% of withdrawal amount</p>
              </div>

              <Button 
                onClick={handleWithdraw}
                className="w-full bg-gaming-red hover:bg-gaming-red/80"
                disabled={!withdrawAmount}
              >
                Request Withdrawal
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-neon-green/10 rounded-lg">
              <div>
                <p className="font-medium">Welcome Bonus</p>
                <p className="text-sm text-muted-foreground">Today, 12:00 PM</p>
              </div>
              <Badge className="bg-neon-green text-white">+Kes 100</Badge>
            </div>
            <div className="text-center text-muted-foreground text-sm py-4">
              No other transactions yet
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}