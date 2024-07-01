import React from 'react';
import Book from './Book';

function Library() {
    return (
        <div>
            <Book name="회귀분석" numOfPage={300} />
            <Book name="수리통계" numOfPage={230} />
            <Book name="생존분석" numOfPage={310} />
        </div>
    );
}

export default Library;