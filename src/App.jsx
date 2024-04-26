import { useState } from 'react'

const images = [
	{
		id: '1',
		url: 'src/assets/1.jpg',
	},
	{
		id: '2',
		url: 'src/assets/2.jpg',
	},
	{
		id: '3',
		url: 'src/assets/3.jpg',
	},
	{
		id: '4',
		url: 'src/assets/4.jpg',
	},
	{
		id: '5',
		url: 'src/assets/5.jpg',
	},
]

function App() {
	const [currentUrl, setCurrentUrl] = useState(images[0].url)

	const moveCarousel = (url) => setCurrentUrl(url)

	return (
		<div className='mx-auto mt-6 w-[500px]'>
			<h1 className='mb-4 text-center text-4xl'>Carousel</h1>
			<div className='flex flex-col items-center justify-center'>
				<img src={currentUrl} className='mb-4 h-72 w-96' />
				<div className='flex items-center gap-2'>
					{images.map(({ id, url }) => (
						<div
							key={id}
							className={` cursor-pointer rounded-full ${currentUrl === url ? 'h-3 w-3 bg-gray-950' : 'h-2 w-2 bg-gray-700'} `}
							onClick={() => moveCarousel(url)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
