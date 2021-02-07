import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title}) => {
const onClick = () =>{
    console.log('Click')
}


    return (
       <header className='header'>
           <h1
            // style ={headingStyle}
            >{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
           
       </header>
    )
}


Header.defaultProps = {
    title:'Task Tracker'
}

Header.protoTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color:'red',backgroundColor:'black'
}

export default Header
