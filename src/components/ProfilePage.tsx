import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signupForm, setSignupForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });
  const [loginForm, setLoginForm] = useState({
    name: "",
    password: ""
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupForm.name && signupForm.phone && signupForm.email && signupForm.password) {
      setIsLoggedIn(true);
      alert("Account created successfully! Welcome to GameHub!");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.name && loginForm.password) {
      setIsLoggedIn(true);
      alert("Login successful! Welcome back!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSignupForm({ name: "", phone: "", email: "", password: "" });
    setLoginForm({ name: "", password: "" });
  };

  if (isLoggedIn) {
    return (
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
            Profile
          </h1>
          <p className="text-muted-foreground">Manage your account</p>
        </div>

        {/* User Info Card */}
        <Card className="bg-gradient-to-r from-primary/10 to-neon-blue/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center">Welcome Back!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-neon-blue rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                {signupForm.name.charAt(0) || loginForm.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold">{signupForm.name || loginForm.name}</h3>
              <p className="text-muted-foreground">{signupForm.email || "user@gamehub.com"}</p>
              <p className="text-muted-foreground">{signupForm.phone || "+254 7XX XXX XXX"}</p>
            </div>
          </CardContent>
        </Card>

        {/* Account Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-neon-green/10">
            <CardContent className="pt-6 text-center">
              <p className="text-2xl font-bold text-neon-green">15</p>
              <p className="text-sm text-muted-foreground">Games Played</p>
            </CardContent>
          </Card>
          <Card className="bg-gold/10">
            <CardContent className="pt-6 text-center">
              <p className="text-2xl font-bold text-gold">Kes 2,450</p>
              <p className="text-sm text-muted-foreground">Total Winnings</p>
            </CardContent>
          </Card>
        </div>

        {/* Account Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full">
              🔐 Change Password
            </Button>
            <Button variant="outline" className="w-full">
              📱 Update Phone Number
            </Button>
            <Button variant="outline" className="w-full">
              🔔 Notification Settings
            </Button>
            <Button 
              onClick={handleLogout}
              variant="destructive" 
              className="w-full"
            >
              🚪 Logout
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
          Join GameHub
        </h1>
        <p className="text-muted-foreground">Create account or sign in to start gaming</p>
      </div>

      {/* Auth Forms */}
      <Tabs defaultValue="signup" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>

        {/* Signup Tab */}
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle className="text-neon-green">🎮 Create Your Account</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    placeholder="Enter your full name"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                    className="border-primary/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="signup-phone">Phone Number</Label>
                  <Input
                    id="signup-phone"
                    placeholder="0700 000 000"
                    value={signupForm.phone}
                    onChange={(e) => setSignupForm({...signupForm, phone: e.target.value})}
                    className="border-primary/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="signup-email">Email Address</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                    className="border-primary/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a strong password"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                    className="border-primary/50 focus:border-primary"
                    required
                  />
                </div>

                <Alert className="border-neon-green/50 bg-neon-green/10">
                  <AlertDescription>
                    🎁 <strong>Welcome Bonus:</strong> Get Kes 100 instantly when you sign up!
                  </AlertDescription>
                </Alert>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-green to-accent hover:from-neon-green/80 hover:to-accent/80"
                >
                  🚀 Create Account & Get Bonus
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Login Tab */}
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">🔐 Welcome Back</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="login-name">Name</Label>
                  <Input
                    id="login-name"
                    placeholder="Enter your name"
                    value={loginForm.name}
                    onChange={(e) => setLoginForm({...loginForm, name: e.target.value})}
                    className="border-primary/50 focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="Enter your password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                    className="border-primary/50 focus:border-primary"
                    required
                  />
                </div>

                <div className="text-sm">
                  <button type="button" className="text-primary hover:underline">
                    Forgot password?
                  </button>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-neon-blue hover:from-primary/80 hover:to-neon-blue/80"
                >
                  🎮 Login to GameHub
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features Preview */}
      <Card className="bg-gradient-to-r from-card to-secondary/20">
        <CardHeader>
          <CardTitle>🎯 Why Join GameHub?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-neon-green">🎁</span>
              <p className="text-sm">Kes 100 welcome bonus for new users</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold">🎮</span>
              <p className="text-sm">Access to premium casino games</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-neon-blue">💰</span>
              <p className="text-sm">Real money deposits and withdrawals</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-neon-purple">👥</span>
              <p className="text-sm">Refer friends and earn rewards</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}