import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal} from 'react'
import './fontcard_small.css'

function card(props: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) {
    return (
        <div className='card'>
            <div className='font-name'>{props.name}</div>
            <div className='text-wrapper'>
                <div className='font-header'>This is a heading</div>
                <div className='font-description'>Lorem ipsum dolor sit am consectetur adipiscing elit. Proin non elit id magna aliquet ullamcorper et eget eros</div>
            </div>
        </div>
    )
  }
  
  export default card