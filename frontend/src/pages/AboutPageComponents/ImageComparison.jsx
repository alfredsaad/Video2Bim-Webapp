import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function ImageComparison() {
    return (
        <div className='max-w-4xl mx-auto my-10 rounded-lg shadow-lg p-6 bg-white '>
            <div className='w-full '>
                <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="/beforeClassification.JPG"  alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src="/afterClassification.JPG"  alt="Image two" />}
                />
            </div>
           
        </div>
  );
}
export  default ImageComparison;
