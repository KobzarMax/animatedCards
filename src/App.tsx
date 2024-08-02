import example from './assets/example.webp'
import location from './assets/map-pin-icon.svg'

type ExampleType = {
  image: string;
  renovation: string;
  profit: string;
  location: string;
}

function App() {
  const examples: ExampleType[] = [
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    },
    {
      image: example as string,
      renovation: '$313,140',
      profit: '$386,860',
      location: 'San Mateo'
    }
  ]

  return (
    <section className={`relative after:absolute after:top-0 after:right-0 after:w-[15%] after:inset-[0%_0%_0%_auto] after:sm:w-[200px] after:xl:w-[250px] after:bg-rightTickerShadow after:h-full before:absolute before:top-0 before:left-0 before:w-[15%] before:inset-[0%_auto_0%_0%] before:sm:w-[200px] before:xl:w-[250px] before:bg-leftTickerShadow before:h-full before:z-[1]`}>
      <div className={`ticker-wrap box-content overflow-hidden block`}>
        <div className="ticker w-full flex items-start justify-start whitespace-nowrap flex-nowrap pr-[100%]">
          {examples.map((item, index) => (
              <a href='#' className={`max-w-[350px] ticker__item w-full h-auto min-h-1 flex-[0_0_auto]`} key={index}>
                <div className={`flex gap-[15px] flex-col px-[10px] mx-[15px]`}>
                  <div className={`flex-grow relative`}>
                    <img className={'h-[400px] object-cover rounded-[15px]'} src={item.image} alt="example image"/>
                    <div className={`absolute bottom-0 left-0 right-0 bg-bottomTickerShadow h-1/2 rounded-b-[15px] inset-[auto_0%_0%] flex items-end justify-center px-[10px] pb-5`}>
                      <div className={`flex flex-col items-center justify-center w-full`}>
                        <div className={`text-xl font-bold text-white leading-[1.5]`}>{item.renovation}</div>
                        <div className={`text-sm text-white`}>Renovation</div>
                      </div>
                      <div className={`flex flex-col items-center justify-center w-full`}>
                        <div className={`text-xl font-bold text-[#5becd4] leading-[1.5]`}>{item.profit}</div>
                        <div className={`text-sm text-white`}>Profit</div>
                      </div>
                    </div>
                  </div>
                  <div className={`flex pt-2 items-center justify-center gap-3`}>
                    <img src={location as string} alt="location"/>
                    {item.location}
                  </div>
                </div>
              </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
