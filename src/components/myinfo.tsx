import { useState, useCallback } from 'react';
import Button from './button';
import LogoutIcon from '../assets/icons/icon_logout.svg';
import Logo from '../assets/icons/naver_circle.svg';
import Modal from './modal';
import DeleteLogo from '../assets/icons/icon_delete.svg';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
import Spinner from '../util/spinner';
import { cancelAccount } from '../api/cancelAccount';

export default function Myinfo() {
  const logout = useLogout();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCanceling, setIsCanceling] = useState(false);
  const navigate = useNavigate();

  const handleCancleClick = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);
  const handleConfirmCancel = useCallback(async () => {
    setIsCanceling(true);
    try {
      await cancelAccount();
      setIsModalVisible(false);
      logout();
      navigate('/');
    } catch (error) {
      console.error('Account deletion failed:', error);
    } finally {
      setIsCanceling(false);
    }
  }, [logout, navigate]);

  const handleLogoutButtonClick = useCallback(() => {
    logout();
  }, [logout]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mx-auto items-center mt-[80px] w-[1180px] h-[200px] backdrop-blur-sm bg-album-card shadow-info-card rounded-[30px]">
        <img src={Logo} className="ml-[100px] mr-[60px]" alt="네이버로고" />
        {''}
        <div className="text-[28px] font-semibold mr-[102px]">장원영</div>
        <div className="text-[26px] ml-[82px] mr-[227px] text-nowrap font-normal text-gray60">
          abcdefg@naver.com
        </div>
        <Button
          text={'로그아웃'}
          type={
            'bg-black text-white w-[160px] h-[62px] rounded-[30px] text-[18px] font-medium'
          }
          imgSrc={LogoutIcon}
          onClick={handleLogoutButtonClick}
        />
      </div>
      <div className="flex items-center justify-center mt-[323px]">
        <Button
          text={'탈퇴하기'}
          type={
            'text-[20px] font-normal text-gray150 rounded-[30px] w-[194px] h-[62px]'
          }
          onClick={handleCancleClick}
        />
      </div>
      <Modal
        title={
          <img
            src={DeleteLogo}
            alt="탈퇴 로고"
            className="w-[60px] h-[60px] mt-[51px] mb-[19px]"
          />
        }
        content={
          <div className="">
            <div className="font-semibold text-[42px]">
              정말 탈퇴하시겠어요?
            </div>
            <div className="font-normal text-mainbutton-default">
              탈퇴 시 저장된 정보들은{' '}
              <span className="font-semibold">영구 삭제</span>됩니다.
            </div>
          </div>
        }
        negativeAnswer="취소"
        positiveAnswer="계정 삭제"
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onConfirm={handleConfirmCancel}
      />
      {isCanceling && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Spinner loading />
        </div>
      )}
    </div>
  );
}
