import BoardNotice from "../components/board/BoardNotice"; //공지사항 리스트
import MenuBox from "../components/board/MenuBox"; //왼쪽 메뉴 박스
import { LoginDiv, SearchContainer, CategoryMenu, PageLogo} from '../styles/homepagesearch'
import SearchBar from "../components/icons/SearchBar"; //검색바
import '../styles/BoardMain.css'
import pic1 from '../assets/japanlogo.jpg'
import ShoppingCart from '../components/icons/ShoppingCart';
function Board(props) {
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
        <div className="app-container">
          <div className="menu-box">
            <h2>고객센터</h2>
            <MenuBox />
          </div>
          <div className="board-container">
            <BoardNotice/>
          </div>
         </div>
    </>
  );
}

export default Board;