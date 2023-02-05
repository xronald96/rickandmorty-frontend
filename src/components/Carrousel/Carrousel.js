import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CarrouselBoostraps = React.memo(() => {
	return (
		<Carousel style={{ height: '300px', overflow: 'hidden' }}>
			<Carousel.Item>
				<img
					style={{ objectFit: 'cover' }}
					className='d-block w-100'
					src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
					alt='First slide'
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={{ objectFit: 'cover' }}
					className='d-block w-100'
					src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
					alt='Second slide'
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={{ objectFit: 'cover' }}
					className='d-block w-100'
					src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
					alt='Third slide'
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
});
