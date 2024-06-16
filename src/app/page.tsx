"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import MetricToImperial from "@/components/metric-to-imperial/metric-to-imperial";
import ImperialToMetric from "@/components/imperial-to-metric/imperial-to-metric";

export default function Home() {
  return (
    <div className=" flex flex-col w-full min-h-screen">
      <div className="h-16 border-b flex items-center px-6">
        <a href="/">
          <h1 className="text-xl font-semibold tracking tight">
            <span className="text-primary">Gladstone</span> converter
          </h1>
        </a>
      </div>
      <main className="flex flex-col py-6 items-center gap-6 container w-full px-6">
        <Tabs defaultValue="cm-to-metric" className="w-full">
          <div className="grid gap-4">
            <TabsList>
              <TabsTrigger className="flex-1" value="cm-to-metric">
                Metric to Gladstone
              </TabsTrigger>
              <TabsTrigger className="flex-1" value="metric-to-cm">
                Gladstone to Metric
              </TabsTrigger>
            </TabsList>
            <Card>
              <TabsContent value="cm-to-metric">
                <MetricToImperial />
              </TabsContent>
              <TabsContent value="metric-to-cm">
                <ImperialToMetric />
              </TabsContent>
            </Card>
          </div>
        </Tabs>
      </main>
    </div>
  );
}
