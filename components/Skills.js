import React from 'react'
import Image from 'next/image'
import CSSImg from '../public/assets/css.png';
import Django from '../public/assets/django.png';
import Express from '../public/assets/express.png';
import Html from '../public/assets/html.png';
import Git from '../public/assets/git.png';
import GitHub from '../public/assets/github1.png';
import Javascript from '../public/assets/javascript.png';
import Mongo from '../public/assets/mongo.png';
import Mongoose from '../public/assets/mongoose.png';
import Node from '../public/assets/node.png';
import PostgreSQL from '../public/assets/postgresql.png';
import Python from '../public/assets/python.png';
import ReactImg from '../public/assets/react.png';
import Redux from '../public/assets/Redux.png';



const Skills = () => {
	return (
		<div id="skills" className="w-full lg-h-screen mt-32 mb-12 p-2">
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<h2 className="py-4">Skills</h2>
				<div className="grid md-grid-cols-2 lg:grid-cols-4 gap-8">
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={Html} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>HTML</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={CSSImg} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>CSS</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={Javascript} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>JavaScript</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={ReactImg} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>React</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={Mongo} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>MongoDB</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={Node} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>Node.js</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={GitHub} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>GitHub</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={PostgreSQL} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>PostgreSQL</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={Express} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>Express</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={Django} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>Django</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={Python} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>Python</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={Redux} width='90' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>Redux</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={Mongoose} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>Mongoose</h3>
					</div>
				</div>
				</div>
				<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
				<div className="grid grid-cols-2 gap-4 justify-center items-center">
					<div className="m-auto">
					<Image src={Git} width='64' height='64' alt='/'/>
					</div>
					<div className='flex flex-col items-center justify-center'>
							<h3>Git</h3>
					</div>
				</div>
				</div>
				</div>
			</div>
		</div>

	)
}

export default Skills
