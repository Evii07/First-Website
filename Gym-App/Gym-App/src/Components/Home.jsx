import { useState, useId } from "react";
import { Bell, Flame, Timer, ArrowRight, Footprints, Droplet, Bed, Scale } from "lucide-react";

const colors = {
  tileBg: "rgb(30,30,30)",
  iconBg: "rgb(51,47,59)",
  ringTrack: "#3a3640",
  ringDot: "#e9d5ff",   
  purpleFrom: "#a855f7",
  purpleTo: "#9333ea",
  textMuted: "#9ca3af",
};

export default function HomeScreen({name, weekStreak, notification, weekProgress}) {

    weekStreak = 1;
    weekProgress = 4;

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <div className="w-full max-w-sm">

                {/* name, logo and notification */}
                <div className="relative flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center ">
                        
                    </div>

                    <div className="flex-col">
                        <h3 className="text-xs text-white leading-tight">
                            Welcome back!<br /> 
                        </h3>

                        <h1 className="text-xl  text-white leading-tight">
                            {name}
                        </h1>
                    </div>
                    
                 
                    <Bell className="w-8 h-8 text-white absolute right-0" strokeWidth={1.5}/>
                    <div className="absolute top-3 right-1 w-3 h-3 rounded-full bg-red-600" />
                    {/* {notification>= 1 && (
                    )} */}
                  
                </div>

                {/* box */}
                <div className="relative p-4  h-34 rounded-2xl flex gap-2 mb-6 bg-linear-to-r from-purple-600 to-purple-500">
                    <div className="flex-col">
                        <h1 className="text-2xl text-white font-bold">
                            Keep it up! 
                        </h1>
                        <h3 className="text-xs text-white mb-3">
                            You're on a {weekStreak}-week streak
                        </h3>

                        <h2 className="bold text-sm h-4 text-white mb-2">
                            This week
                        </h2>

                        <div className="flex gap-2">
                            
                        {Array.from({ length: 7 }).map((_, i) => {
                            var dotColor;

                            if (i < weekProgress) {
                                dotColor = "bg-white";
                            } else {
                                dotColor = "bg-white/30";
                            }

                            return (
                                <div
                                key={i}
                                className={`w-3 h-3 rounded-full ${dotColor}`}
                                />
                            )
                        })}
                        </div>



                    </div>

                    {/* right circle */}
                    <div className="absolute right-1 mr-4 w-20 h-20 self-center rounded-full bg-purple-700 flex items-center justify-center ">
                    </div>
                </div>

                <div className="relative flex items-center border-white border mb-3">
                    <h1 className="text-white text-xl">
                        Today's Workout
                    </h1>

                    <div className="flex text-white text-sm absolute right-6 bottom-0.5 hover:underline items-center">
                        <button>
                            Configure
                        </button>
                        <ArrowRight className="w-3 text-white h-3"/>
                    </div>
                </div>

                {/* Todays workout box */}
                <div className="relative p-4  h-41 rounded-2xl flex  mb-6 bg-[rgb(30,30,30)]">
                        {/* picture */}
                        <img  className="h-20 w-30 rounded-xl border white">
                            
                        </img>

                        {/* text */}
                        <div className="pl-4 border border-white w-full h-20 ">
                            <h1 className="text-xl text-white font-bold">
                                Full Upper Body
                            </h1>

                            <div className="mb-2 w-full flex">
                                <Flame className="text-white h-4 w-4" />
                                <h3 className="ml-1 text-xs text-white ">
                                    1400 cal
                                </h3>
                            </div>

                            <div className="mb-2 w-full flex">
                                <Timer className="text-white h-4 w-4"/>
                                <h3 className="ml-1 text-xs text-white">
                                    25 min
                                </h3>
                            </div>
                        </div>

                        <div className="absolute bottom-4 inset-x-4 h-10 rounded-xl flex bg-linear-to-r from-purple-600 to-purple-500 justify-center align-middle">
                            <button className="text-l text-white font-bold">
                                Start Workout
                            </button>
                        </div>
                            
                </div>

                <div className="relative flex items-center border-white border mb-3">
                    <h1 className="text-white text-xl">
                        Overview
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-3 h-26 grid grid-cols-2 gap-4 ">
                        
                        <HeroStat
                            icon={<Footprints size={18} />}
                            value="4,489"
                            goal="6,000 steps"
                            percent={4489 / 6000}
                        />
                        
                        <HeroStat
                          icon={<Flame size={18} />}
                          value="200"
                          goal="1,000 kcal"
                          percent={200 / 1000}
                        />
                    </div>

                    <div className="col-span-3 h-18 grid grid-cols-3 gap-4">
                        <MiniStat
                            icon={<Droplet size={14} />}
                            label="Water"
                            valueMain="250"
                            unitMain="ml"
                        />
                            
                  
                        <MiniStat
                            icon={<Bed size={14} />}
                            label="Sleep"
                            valueMain="8"
                            unitMain="hr"
                            valueSecondary="12"
                            unitSecondary="min"
                        />
                        <MiniStat
                            icon={<Scale size={14} />}
                            label="Weight"
                            valueMain="8"
                            unitMain="hr"
                            valueSecondary="12"
                            unitSecondary="min"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

function HeroStat({ icon, value, goal, percent }) {
    return (
    <div className="h-full rounded-2xl p-3 flex flex-col justify-between" style={{ backgroundColor: colors.tileBg }}>
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: colors.iconBg }}>
        {icon}
      </div>
      <div className="flex items-end justify-between mt-1">
        <div>
            <div className="text-3xl font-semibold text-white leading-none">
                {value}
            </div>
            <div className="text-xs mt-1" style={{ color: colors.textMuted }}>
                /{goal}
            </div>
        </div>
        <ProgressRing percent={percent} size={40} />
      </div>
    </div>
  );
}

function MiniStat({ icon, label, valueMain, unitMain, valueSecondary, unitSecondary }) {
  return (
    <div
      className="flex-1 rounded-2xl p-2"
      style={{ backgroundColor: colors.tileBg }}
    >
      <div className="flex items-center gap-1 ">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: colors.iconBg, color: colors.textMuted }}
        >
          {icon}
        </div>
        <span className="text-sm" style={{ color: colors.textMuted }}>
          {label}
        </span>
      </div>
      <div className="text-white text-lg font-medium">
        {valueMain}
        {unitMain && (
          <span className="text-sm font-normal ml-1" style={{ color: colors.textMuted }}>
            {unitMain}
          </span>
        )}
        {valueSecondary && (
          <>
            <span className="ml-2">{valueSecondary}</span>
            {unitSecondary && (
              <span className="text-sm font-normal ml-1" style={{ color: colors.textMuted }}>
                {unitSecondary}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function ProgressRing({ percent, size = 48 }) {
  const stroke = 5;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent);
  const gradId = useId();

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={colors.ringTrack}
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.purpleFrom} />
          <stop offset="100%" stopColor={colors.purpleTo} />
        </linearGradient>
      </defs>
      <circle
        cx={size / 2 + radius * Math.cos(2 * Math.PI * percent)}
        cy={size / 2 + radius * Math.sin(2 * Math.PI * percent)}
        r={stroke / 2 + 1}
        fill={colors.ringDot}
      />
    </svg>
  );
}