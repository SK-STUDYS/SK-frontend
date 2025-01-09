import React from "react";
import { LoginDiv, SearchContainer, CategoryMenu, PageLogo, BannerSlide } from '../styles/homepagesearch'
import SearchBar from "../components/icons/SearchBar";
import ShoppingCart from '../components/icons/ShoppingCart';
import pic1 from '../assets/japanlogo.jpg'
import Homepagbanner from "../components/slide/homebannerslide";

const HomePage = () => {
    return (
        <>
            <div>
                <LoginDiv>
                    <button style={{ float: 'right' }}>
                        회원가입
                    </button>
                </LoginDiv>
                <SearchContainer>
                    <PageLogo>
                        <img src={pic1} alt='picture1' height='50px' width='100px' justify-content='flex-start' />
                    </PageLogo>
                    <SearchBar></SearchBar>
                    <div width='100%'>
                    </div>
                </SearchContainer>
                <CategoryMenu>
                    <ShoppingCart></ShoppingCart>
                </CategoryMenu>
                <div style={{ border: "0", height: "4px", backgroundColor: 'rgb(194, 61, 228)', width: "100%", marginBottom: "20px", }}></div>
            </div>
        <BannerSlide>
        <Homepagbanner/>
        </BannerSlide>
        </>
    );
}

export default HomePage;