import Nav from '../components/Nav';

export default function Home() {
	return (
		<div className="page">
			<Nav />
			<div className='section'>
				<h1 className='header'>Mandala Massage Therapeutics<span className='header-span'>Where Healing And Balance Begin</span></h1>
			</div>
			<div className='section'>
				<p className='section-p'>Relax, restore, and reconnect through personalized massage therapy designed to support both mind and body.</p>
				<div className='section-links'>
					<a className='link' href="/">Booking</a>
					<a className='link' href='/'>Services</a>
				</div>
			</div>
		</div>
	)
}
