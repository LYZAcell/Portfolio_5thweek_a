import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recommendation() {
    const [bookInfo, setBookInfo] = useState(null);
    const [authorInfo, setAuthorInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://openlibrary.org/works/OL27416W.json');
                setBookInfo(response.data);

                // 작가 정보 가져오기
                const authorKey = response.data.authors ? response.data.authors[0].author.key : null;
                if (authorKey) {
                    const authorResponse = await axios.get(`https://openlibrary.org${authorKey}.json`);
                    setAuthorInfo(authorResponse.data);
                }
            } catch (error) {
                console.error('책 데이터를 가져오는 데 실패하였습니다', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="quote-container" style={{ backgroundColor: 'beige', textAlign: 'center' }}>
            <br></br>
            <h2>좋아하는 책</h2>
            {bookInfo && (
                <>
                    <h3>{bookInfo.title}</h3>
                    <h4>작가: {authorInfo ? authorInfo.name : '작가 정보 없음'}</h4>
                    <div className="quote-container" style={{ backgroundColor: 'beige', textAlign: 'center' }}>
                    {/*개빡치게 스페인어 버전만 있어서 그냥 링크로 따로 가져온 것*/}
                    <img src="//covers.openlibrary.org/b/id/13288200-M.jpg" srcSet="//covers.openlibrary.org/b/id/13288200-L.jpg 2x" className="cover" alt="Cover of: Ensaio sobre a Lucidez by José Saramago" />
                    <br/><br/>
                    <p>포르투갈 대표 작가 José Saramago의 작품입니다.</p>
                    <p>'눈먼자들의 도시' 후속작으로 우중충한 날에 잘어울려요</p>
                    <span>무효표가 과반으로 나온 투표로 인한 정부의 수사가 일어나고 이로인한 일련의 사건을 다룹니다.</span><br/>
                    <span>철학, 정치, 서스펜스 그리고 포르투갈 특유의 차분한 문체를 느끼고 싶다면 매우 추천합니다.</span>
                    <br/><br/>
                    </div>
                </>
            )}
        </div>
    );
}

export default Recommendation;
