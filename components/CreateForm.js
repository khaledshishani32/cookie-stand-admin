import React from 'react'

export default function CreateForm({formhandler}) {
    return (
        <div>

            {/* <h1>from form</h1> */}
            <main className="main-2">


            <form className="w-full max-w-lg" onSubmit={formhandler}>
            <div className="flex flex-wrap -mx-3 mb-6">
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3" >
            <p>Create Cookie Stand</p>
            </div>

            <div className="w-full px-3">
            <label className="block uppercase  text-gray-700 text-xs font-bold mb-2" htmlFor="grid-Location">
            Location
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="location" type ="text" placeholder="" />

            </div>
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            Minimum customer per Hour
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="minimum" type ="text" placeholder="Jane" />

            </div>
            <div className="w-full md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Maximum customer per Hour
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="maximum" type ="text" placeholder="Doe" />
            </div>
            <div className="w-full md:w-1/4 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Average Cookies per Sale
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="average" type ="text" placeholder="Doe" />
            </div>
            <div className="w-full md:w-1/4 px-3">
            <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
            Create
            </button>
            </div>

            </div>

            </form>
           </main>
        </div>
    )
}
