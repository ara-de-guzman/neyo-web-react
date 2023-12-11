import { Link } from 'react-router-dom'
import './ComponentStyle.css'

export const Button = ({classes,text,classLink,link}) => {
  return (
    <button className={!classes ? 'regular-btn' : classes }><Link to={link} className={classLink}>{text}</Link></button>
  )
}
