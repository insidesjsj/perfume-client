import perfumImg from '../assets/images/perfumeIMG.png';
import CheckIcon from '../assets/icons/icon_check.svg';

interface Perfume {
  myPerfumeId: number;
  name: string;
  eName: string;
  brand: string;
  imageURL: string;
}
interface MyPagePerfumeProps {
  perfume: Perfume;
  isEditing: boolean;
  onCheckboxChange: (id: number) => void;
  checked: boolean;
}

const MyPagePerfume: React.FC<MyPagePerfumeProps> = ({
  perfume,
  isEditing,
  onCheckboxChange,
  checked,
}) => {
  return (
    <div className="relative flex flex-col items-center bg-white w-[282px] h-[382px] shadow-perfume-card border border-white rounded-[30px]">
      {isEditing && (
        <input
          type="checkbox"
          className="absolute w-6 h-6 border-2 rounded-full appearance-none top-4 left-6 border-gray229 checked:bg-black checked:bg-no-repeat checked:bg-center"
          style={{ backgroundImage: `url(${CheckIcon})` }}
          onChange={() => onCheckboxChange(perfume.myPerfumeId)}
          checked={checked}
        />
      )}
      <div className="flex flex-col items-center mt-5">
        <img
          src={perfumImg}
          className="h-[200px] w-[85px]"
          alt={perfume.name}
        />
        <ul className="flex flex-col p-0 m-0 text-center">
          <li className="text-[14px] my-2 text-header-default font-medium">
            {perfume.brand}
          </li>
          <li className="text-[18px] text-center text-nowrap">
            {perfume.name}
          </li>
          <li className="text-[18px] text-gray150 font-normal text-center text-nowrap">
            {perfume.eName}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyPagePerfume;
