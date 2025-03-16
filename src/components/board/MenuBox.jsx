import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
const MenuBox = () => {
    //메인 페이지에서 공지사항을 눌렀을 때 초기값은 공지사항으로 해야하므로
    //activeIndex 값이 0으로 설정되어있어야 하며
    //공지사항 페이지에서 자주 묻는 질문이나 다른 페이지로 옮길 경우
    //setActiveIndex를 통해 activeIndex값을 변경시켜준다.
    const [activeIndex, setActiveIndex] = useState(0);
    //수정해야 할 부분 메인페이지에서 공지사항을 누르는 것이 아닌
    //자주 묻는 질문이나 다른 메뉴를 클릭했을 경우 초기값을 0으로 하면 안된다.

    // 메뉴 항목 클릭 시 activeIndex를 업데이트하는 함수
    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <ListGroup>
                <ListGroupItem
                    active={activeIndex === 0}
                    onClick={() => handleItemClick(0)}
                ><Link to={'/board'}>공지사항</Link>
                    
                </ListGroupItem>
                <ListGroupItem
                    active={activeIndex === 1}
                    onClick={() => handleItemClick(1)}
                ><Link to={'/question'}>자주묻는질문</Link>
                </ListGroupItem>
                <ListGroupItem
                    active={activeIndex === 2}
                    tag='a'
                    href='#'
                    onClick={() => handleItemClick(2)}
                >
                    1대1문의
                </ListGroupItem>
                <ListGroupItem
                    active={activeIndex === 3}
                    tag='a'
                    href='#'
                    onClick={() => handleItemClick(3)}
                >
                    대량주문문의
                </ListGroupItem>
            </ListGroup>
        </div>
    );
};

export default MenuBox;
