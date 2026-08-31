import { useState } from "react";
import { Bell } from "lucide-react";


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
                <div className="relative p-4  h-32 rounded-2xl flex gap-2 mb-6 bg-linear-to-r from-purple-600 to-purple-500">
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
                        {Array.from({ length: 7 }).map((_, i) => (
                            <div
                            key={i}
                            className={`w-3 h-3 rounded-full ${
                                i < weekProgress ? "bg-white" : "bg-white/30"
                            }`}
                            />
                        ))}
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

                    <p className="text-white text-sm absolute right-6 bottom-1">
                        Configure
                    </p>
                </div>

                {/* Todays workout box */}
                <div className="relative p-4  h-32 rounded-2xl flex gap-2 mb-6 bg-linear-to-r from-purple-600 to-purple-500">
                </div>

            </div>
        </div>
    )
}