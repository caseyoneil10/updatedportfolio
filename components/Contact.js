import React from 'react'
import Image from 'next/image'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'



const Contact = () => {
	return (
		<div id="contact" className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
			<h2 className="py-4">Contact</h2>

					<div className="grid lg:grid-cols-5 gap-8">
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="lg:p-4 h-full">
						<div>
							<img className="rounded-xl hover:scale-105 ease-in duration-300" src='https://i.imgur.com/K5Nws7i.jpg' alt="/"/>
						</div>
						<div>
							<h2 className="py-2 text-gray-700">Casey O&apos;Neil</h2>
							<p className="py-4 text-gray-700">I am looking for my next passion project. Contact me and let&apos;s chat!</p>
						</div>
							<div className="flex items-center justify-between py-4">
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
								<a href='https://www.linkedin.com/in/caseyoneil10/' target='_blank'>
								<FaLinkedinIn/>
								</a>
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
							<a href='https://github.com/caseyoneil10' target='_blank'>
								<FaGithub/>
								</a>
							</div>
							<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
							<a href='https://docs.google.com/document/d/1wjMyvwiGhIaUhHXTxRWyameZikA-HiWLRDHDEVUQM7Q/edit?usp=sharing' target='_blank'>
								<BsFillPersonLinesFill/>
							</a>
							</div>
							</div>
						</div>
					</div>
					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form>
								<div className="grid md:grid-cols-2 gap-4 w-full py-2">
									<div className='flex flex-col'>
									<label className="uppercase text-sm py-2">Name</label>
									<input className="border-2 rounded-lg p-3 flex border-gray-300"type="text"/>
									</div>
									<div className='flex flex-col'>
									<label className="uppercase text-sm py-2">Phone Number</label>
									<input className="border-2 rounded-lg p-3 flex border-gray-300"type="text"/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">E-Mail</label>
									<input className="border-2 rounded-lg p-3 flex border-gray-300"type="email"/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Subject</label>
									<input className="border-2 rounded-lg p-3 flex border-gray-300"type="text"/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Message</label>
									<textarea className="border-2 rounded-lg p-3 border-gray-300"type="text" rows='10'/>
								</div>
								<button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
				<Link href="/">
					<a>
					<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
					<HiOutlineChevronDoubleUp className="text-[#d75656]" size={30}/>
					</div>
					</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact
