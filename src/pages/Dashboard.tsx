import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Crown, 
  Users, 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  Settings,
  Bell,
  Search,
  Filter,
  MoreHorizontal,
  Shield,
  Sparkles
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-8 bg-gradient-to-br from-background via-background to-navy-deep/5">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, John</h1>
              <p className="text-muted-foreground">Your exclusive networking dashboard</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="premium">
                <Crown className="w-4 h-4 mr-2" />
                Upgrade Membership
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Stats Overview */}
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="border-gold-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-gold-accent" />
                      <span className="text-sm font-medium">Connections</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold">127</div>
                      <p className="text-xs text-muted-foreground">+12 this month</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5 text-gold-accent" />
                      <span className="text-sm font-medium">Messages</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold">23</div>
                      <p className="text-xs text-muted-foreground">4 unread</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-gold-accent" />
                      <span className="text-sm font-medium">Events</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold">5</div>
                      <p className="text-xs text-muted-foreground">Next: Today</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gold-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-gold-accent" />
                      <span className="text-sm font-medium">Profile Views</span>
                    </div>
                    <div className="mt-2">
                      <div className="text-2xl font-bold">89</div>
                      <p className="text-xs text-muted-foreground">+23% this week</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* AI Recommendations */}
              <Card className="border-gold-accent/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-gold-accent" />
                      <CardTitle>AI-Powered Recommendations</CardTitle>
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </div>
                  <CardDescription>
                    Curated connections based on your goals and interests
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gold-accent/10 rounded-lg hover:bg-gold-accent/5 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${index}`} />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold">Sarah Chen</h4>
                            <Shield className="w-4 h-4 text-gold-accent" />
                            <Badge variant="secondary" className="text-xs">95% Match</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Series A Founder • FinTech • Looking for advisors
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">AI/ML</Badge>
                            <Badge variant="outline" className="text-xs">SaaS</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">View Profile</Button>
                        <Button variant="premium" size="sm">Connect</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="border-gold-accent/20">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Stay updated with your network</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { type: "connection", text: "Michael Rodriguez accepted your connection request", time: "2 hours ago" },
                    { type: "event", text: "New invite: AI Leadership Summit 2024", time: "4 hours ago" },
                    { type: "message", text: "3 new messages from verified founders", time: "1 day ago" },
                    { type: "content", text: "Your article 'The Future of FinTech' received 47 likes", time: "2 days ago" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gold-accent/5 transition-colors">
                      <div className="w-2 h-2 bg-gold-accent rounded-full mt-2" />
                      <div className="flex-1">
                        <p className="text-sm">{activity.text}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Profile Status */}
              <Card className="border-gold-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg">Profile Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=john" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold">John Doe</h4>
                        <Shield className="w-4 h-4 text-gold-accent" />
                      </div>
                      <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
                      <Badge variant="premium" className="mt-1 text-xs">Founder Tier</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Profile Strength</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div className="bg-gold-gradient h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Add 2 more skills to reach 100%
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="border-gold-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { title: "Founder's Roundtable", date: "Today, 3:00 PM", type: "Exclusive" },
                    { title: "VC Pitch Night", date: "Tomorrow, 6:00 PM", type: "Invitation Only" },
                    { title: "AI Leadership Summit", date: "Dec 15, 9:00 AM", type: "Premium Event" }
                  ].map((event, index) => (
                    <div key={index} className="p-3 border border-gold-accent/10 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-sm">{event.title}</h5>
                        <Badge variant="outline" className="text-xs">{event.type}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{event.date}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" size="sm">
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-gold-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    Find Connections
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Start Conversation
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;