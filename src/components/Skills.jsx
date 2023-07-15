import React from 'react'
import transition from "../transition";

import { JavaOriginalWordmark,SpringOriginalWordmark,CsharpOriginal,ReactOriginalWordmark,GitOriginalWordmark, MysqlOriginalWordmark,PostgresqlPlainWordmark,TailwindcssPlain,MaterialuiOriginal, MongodbOriginalWordmark} from 'devicons-react';
const Skills = () => {
  return (
    <div id="skills" className='w-full  lg:h-screen p-2 bg-gradient-to-l from-rose-50 to-teal-50'>
        <div className="max-w-[1040px] mx-auto flex flex-col justify-center h-full" >
            <p className='text-xl tracking-widest uppercase text-[#001b5e]'>Skills</p>
            <h3 className="py-4 sm:text-2xl text-4xl font-bold text-gray-800">What I Can Do</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid gap-4 justify-center items-center">
                        <div className="m-auto">
                            <JavaOriginalWordmark size={80}/> 
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid gap-4 justify-center items-center">
                        <div className="m-auto">
                            <SpringOriginalWordmark size={80}/> 
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid gap-4 justify-center items-center">
                        <div className="m-auto">
                            <ReactOriginalWordmark size={80}/> 
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid gap-4 justify-center items-center">
                        <div className="m-auto">
                            <CsharpOriginal size={80}/> 
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid gap-4 justify-center items-center">
                        <div className="m-auto">
                            <MysqlOriginalWordmark size={80}/> 
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid gap-4 justify-center items-center">
                        <div className="m-auto">
                            <GitOriginalWordmark size={80}/> 
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid gap-4 justify-center items-center">
                        <div className="m-auto">
                            <TailwindcssPlain size={80}/> 
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid gap-4 justify-center items-center">
                        <div className="m-auto">
                            <MaterialuiOriginal size={80}/> 
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid gap-4 justify-center items-center">
                        <div className="m-auto">
                            <MongodbOriginalWordmark size={80}/> 
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid gap-4 justify-center items-center">
                        <div className="m-auto">
                            <PostgresqlPlainWordmark size={80}/> 
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Skills
// export default transition(Skills);
