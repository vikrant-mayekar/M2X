"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MyAds } from "@/components/my-ads"
import { MyFavorites } from "@/components/my-favorites"
import { ProfileSettings } from "@/components/profile-settings"

export function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">My Dashboard</h1>
        <p className="text-lg text-muted-foreground">Manage your ads, favorites, and account settings</p>
      </div>

      <Tabs defaultValue="my-ads" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="my-ads">My Ads</TabsTrigger>
          <TabsTrigger value="favorites">My Favorites</TabsTrigger>
          <TabsTrigger value="settings">Profile Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="my-ads">
          <MyAds />
        </TabsContent>

        <TabsContent value="favorites">
          <MyFavorites />
        </TabsContent>

        <TabsContent value="settings">
          <ProfileSettings />
        </TabsContent>
      </Tabs>
    </div>
  )
}
