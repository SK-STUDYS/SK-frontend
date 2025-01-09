import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCart() {
    const navigate = useNavigate();

    return (
        <Button
            onClick={() => navigate('/')}
            sx={{ minWidth: 0, padding: '8px' }}
        >
            <MenuIcon justify-content= 'flex-start' sx={{width: '2em', fontSize: 'large', color: 'rgb(53, 56, 59)' , }} />카테고리
        </Button>
    );
}
