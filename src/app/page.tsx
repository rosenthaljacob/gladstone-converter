"use client";

import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import CmToMetric from "@/components/cm-to-metric/cm-to-metric";
import MetricToCm from "@/components/metric-to-cm/metric-to-cm";

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
                cm to Gladstone
              </TabsTrigger>
              <TabsTrigger className="flex-1" value="metric-to-cm">
                Gladstone to cm
              </TabsTrigger>
            </TabsList>
            <Card>
              <TabsContent value="cm-to-metric">
                <CmToMetric />
              </TabsContent>
              <TabsContent value="metric-to-cm">
                <MetricToCm />
              </TabsContent>
            </Card>
          </div>
        </Tabs>
      </main>
    </div>
  );
}
