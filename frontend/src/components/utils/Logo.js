import { useNavigate } from "react-router-dom";

function Logo() {

    const navigate = useNavigate();
    return (
        <h1 className="logo" onClick={() => {navigate('/')}}>
            <span className='logo-img'></span>SpendWise
        </h1>

    )
}

export default Logo;