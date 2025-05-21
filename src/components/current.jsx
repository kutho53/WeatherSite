const CurrentWeather = () => {
    return (
        <>
            <div className='headline'>
                <h1 className='city'>Raleigh</h1>
                <p className='temp'>72* F</p>
                <p className= 'condition'>Cloudy</p>
            </div>
            <div className='current details'>
                <div>
                    <p>Humidity</p>
                    <p>50%</p>
                </div>
            </div>
        </>
    );
}

export default CurrentWeather;