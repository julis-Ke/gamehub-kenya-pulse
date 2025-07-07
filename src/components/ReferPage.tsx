import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Copy, Facebook, Instagram, Twitter } from "lucide-react";

export default function ReferPage() {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    phone: "0724176154"
  });
  
  // Generate referral link based on user info
  const referralLink = `https://gamehub.app/ref/${btoa(userInfo.name + userInfo.phone).slice(0, 8)}`;
  
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareOnSocial = (platform: string) => {
    const message = `🎮 Join me on GameHub and get Kes 100 welcome bonus! Use my referral link: ${referralLink}`;
    
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}&quote=${encodeURIComponent(message)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL, so we'll copy the message
        navigator.clipboard.writeText(message);
        alert('Message copied! You can paste it in your Instagram story or post.');
        return;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
        break;
    }
    
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
          Refer Friends
        </h1>
        <p className="text-muted-foreground">Earn rewards for every friend you invite</p>
      </div>

      {/* Referral Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-r from-neon-green/10 to-accent/10">
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-neon-green">5</p>
            <p className="text-sm text-muted-foreground">Friends Referred</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-gold/10 to-yellow-500/10">
          <CardContent className="pt-6 text-center">
            <p className="text-3xl font-bold text-gold">Kes 500</p>
            <p className="text-sm text-muted-foreground">Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Referral Link */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-primary">🔗 Your Referral Link</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input 
              value={referralLink} 
              readOnly 
              className="bg-muted/50 border-primary/50"
            />
            <Button 
              onClick={copyToClipboard}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Copy size={16} />
            </Button>
          </div>
          
          {copied && (
            <Badge className="bg-neon-green text-white animate-pulse-gaming">
              ✅ Copied to clipboard!
            </Badge>
          )}

          <div className="text-sm text-muted-foreground space-y-1">
            <p>• Share this link with friends</p>
            <p>• They get Kes 100 welcome bonus</p>
            <p>• You earn Kes 50 for each successful referral</p>
          </div>
        </CardContent>
      </Card>

      {/* Social Sharing */}
      <Card>
        <CardHeader>
          <CardTitle>📱 Share on Social Media</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => shareOnSocial('facebook')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Facebook size={16} className="mr-2" />
              Facebook
            </Button>
            
            <Button
              onClick={() => shareOnSocial('whatsapp')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              📱 WhatsApp
            </Button>
            
            <Button
              onClick={() => shareOnSocial('instagram')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              <Instagram size={16} className="mr-2" />
              Instagram
            </Button>
            
            <Button
              onClick={() => shareOnSocial('twitter')}
              className="bg-sky-500 hover:bg-sky-600 text-white"
            >
              <Twitter size={16} className="mr-2" />
              Twitter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* How it Works */}
      <Card className="bg-gradient-to-r from-card to-secondary/20">
        <CardHeader>
          <CardTitle>💡 How Referrals Work</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <p className="font-medium">Share Your Link</p>
                <p className="text-sm text-muted-foreground">Send your referral link to friends via social media or messaging</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-neon-green text-white flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <p className="font-medium">Friend Signs Up</p>
                <p className="text-sm text-muted-foreground">Your friend creates an account using your referral link</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <p className="font-medium">Both Earn Rewards</p>
                <p className="text-sm text-muted-foreground">You get Kes 50, they get Kes 100 welcome bonus</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}