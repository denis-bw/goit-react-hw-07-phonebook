import { ThreeCircles } from 'react-loader-spinner';
import css from './Loader.module.css'

export const Loader = () => {
    return <div className={css.SpinerContainer} ><ThreeCircles
        height="100"
        width="100"
        color="#da7e5f"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
    /></div>
}