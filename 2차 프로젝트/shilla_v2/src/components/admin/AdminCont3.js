import React from 'react'
import AdminCont3List from './AdminCont3List'
import AdminCont3Detail from './AdminCont3Detail'

const AdminCont3 = () => {
    return (
        <>
            <AdminCont3List>
                <AdminCont3Detail />
            </AdminCont3List>
        </>
    )
}
export default AdminCont3;

{/* 만드는 방식은 AdminTabContants.js */}
{/* <Cont3List /> */}
{/* <Cont3Detail /> */}

{/* 디자인은 Admin.js처럼 작업을 해야 한다 */}
{/* 왜냐면 탭메뉴처럼 구동해야 되기 때문에 */}

{/* 데이터 줘야 되니까 조건부 렌더링 방식 */}




// 다시 링크 방식으로 원복