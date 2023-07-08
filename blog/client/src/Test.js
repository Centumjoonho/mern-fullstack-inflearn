import React, { useState } from 'react'

function Test() {



    let flag = true;



    return (
        <div className="test">

            {flag ? "이준호 블로그 입니다." : "누구세요 나가주세요!"}
        </div>

    )
}

export default Test