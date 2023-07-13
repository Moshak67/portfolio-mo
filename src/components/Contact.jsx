import React from 'react';

const Contact = () => {
  return (
    <>
   <div className='h-screen w-full'>
   <div className="bg-gradient-to-b from-blue-800 to-[#001b5e] h-96 w-full">
            <div id='contact' className="m-auto w-full h-screen max-w-[1040px] flex items-center justify-center my-12">
                <div className=" top-40 bg-white shadow-xl shadow-gray-400 rounded-xl py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let’s have a chat!</p>
                    <form action="https://getform.io/f/56232c75-4c13-4ac8-bf90-07ee5fc4b586" method="POST">
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                            <input  arial-label="Please input name" type="text" name='name' className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input  arial-label="Please input Email Address" type="email" name='email' className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-full flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Subject</label>
                            <input role="input" arial-label="Please input email subject" type="text" name='subject' className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input email subject" />
                        </div>
                        
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea  aria-label="leave a message" role="textbox" type="text" name='message' className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <button type='submit' className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#001b5e] rounded hover:bg-blue-800 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                    </div>
                    </form>
                   
                    
                </div>
            </div>
            </div>
   </div>
  
    </>
    
  );
};

export default Contact;
