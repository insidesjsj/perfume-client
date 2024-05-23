import save from '../assets/images/ic_round-save-alt.png';
import {useState} from 'react';
import {mainPerMockData, subPerMockData} from '../data/resultPerfumeData';
import SaveAlert from '../components/saveAlert';

const subPerfumePerPage = 3;
export default function Result() {
    const [saveComplete, setSaveComplete] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const prevClick = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const nextClick = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, subPerMockData.length - 3));
    };

    const SaveClick = () => {
        setSaveComplete(true);
        setTimeout(() => {
            setSaveComplete(false);
        }, 2000);
    };

    return (
        <div className='w-screen h-screen'>

            {/* 메인 제품 */}
            <div className='w-1/2 mx-auto'>
                <div className='text-center'>당신의 취향을 저격할 향수</div>
                <div className='flex justify-between w-full'>
                    <div>
                        <div>{mainPerMockData.brand}</div>
                        <div>{mainPerMockData.korName}</div>
                        <div>{mainPerMockData.engName}</div>
                        <div className='flex' onClick={SaveClick}><img src={save}/>내 향수 저장하기</div>
                    </div>
                    <div>
                        <img src={mainPerMockData.img}/>
                    </div>
                </div>
            </div>

            {/* 비슷한 제품*/}
            <div>
                <div>내 향수와 비슷한 제품들이에요</div>
                <div>
                    <div className='flex'>
                        <button onClick={prevClick} disabled={currentPage === 0}>{'<'}</button>
                        {subPerMockData
                            .slice(currentPage, currentPage + subPerfumePerPage)
                            .map((v) => (
                                <div key={v.id}>
                                    <img src={v.img} alt={v.kr_name}/>
                                </div>
                            ))}
                        <button onClick={nextClick} disabled={currentPage >= subPerMockData.length - 3}>{'>'}</button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            {/* 저장 알림 모달 */}
            {saveComplete && (
                <SaveAlert/>
            )}
        </div>
    )
};