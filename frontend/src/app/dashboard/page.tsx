"use client";

import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { TrendingUp, TrendingDown, Thermometer, CloudRain, Wind, LucideIcon } from 'lucide-react';

interface DetailItem {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: LucideIcon;
}

interface StatCardProps {
  title: string;
  icon: React.ReactNode;
  dateRange: string;
  details: DetailItem[];
}

const StatCard: React.FC<StatCardProps> = ({ title, icon, dateRange, details }) => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-center">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {icon}
      </div>
      <p className="text-sm text-gray-500">{dateRange}</p>
    </CardHeader>
    <CardContent>
      {details.map((detail, index) => (
        <div key={index} className="mt-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{detail.title}</span>
            <span className={`text-sm font-semibold ${detail.changePercentage > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {detail.changePercentage > 0 ? <TrendingUp className="inline w-4 h-4 mr-1" /> : <TrendingDown className="inline w-4 h-4 mr-1" />}
              {Math.abs(detail.changePercentage)}%
            </span>
          </div>
          <p className="text-xl font-bold">{detail.amount}</p>
        </div>
      ))}
    </CardContent>
  </Card>
);

interface TemperatureData {
  year: number;
  temperature: number;
}

interface CO2EmissionData {
  year: number;
  emissions: number;
}

interface ProjectData {
  temperatureTrend: TemperatureData[];
  co2Emissions: CO2EmissionData[];
}

interface DashboardProps {
  projectData: ProjectData;
}

const Dashboard: React.FC<DashboardProps> = ({ projectData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Temperature Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={projectData.temperatureTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>CO2 Emissions</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={projectData.co2Emissions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="emissions" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <StatCard
        title="Temperature Change"
        icon={<Thermometer className="text-red-600 w-6 h-6" />}
        dateRange="1950 - 2023"
        details={[
          {
            title: "Global Average",
            amount: "+1.5°C",
            changePercentage: 15,
            IconComponent: TrendingUp,
          },
          {
            title: "Arctic Region",
            amount: "+3.1°C",
            changePercentage: 31,
            IconComponent: TrendingUp,
          },
        ]}
      />

      <StatCard
        title="Precipitation Changes"
        icon={<CloudRain className="text-blue-600 w-6 h-6" />}
        dateRange="1950 - 2023"
        details={[
          {
            title: "Global Average",
            amount: "+5%",
            changePercentage: 5,
            IconComponent: TrendingUp,
          },
          {
            title: "Extreme Events",
            amount: "+20%",
            changePercentage: 20,
            IconComponent: TrendingUp,
          },
        ]}
      />

      <StatCard
        title="Sea Level Rise"
        icon={<Wind className="text-green-600 w-6 h-6" />}
        dateRange="1950 - 2023"
        details={[
          {
            title: "Global Average",
            amount: "3.3 mm/year",
            changePercentage: 10,
            IconComponent: TrendingUp,
          },
          {
            title: "Coastal Impacts",
            amount: "Moderate",
            changePercentage: 15,
            IconComponent: TrendingUp,
          },
        ]}
      />

      {/* Add more cards for other climate change metrics */}
    </div>
  );
};

export default Dashboard;