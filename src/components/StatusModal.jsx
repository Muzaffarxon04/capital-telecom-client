import { useDispatch, useSelector } from 'react-redux';
import Content from "@/Localization/Content";
import { changeStatus } from '@/slices/statusReducer';
export default function StatusModal() {
    const { status } = useSelector((state) => state.status);

    const { lang } = useSelector((state) => state.localiztion);
   
    const { localization } = Content[lang];
    const dispatch = useDispatch();
   
    return (
      <>
          {status == null ? (
              <div className="overflow-hidden w-full h-full  top-0 left-0  z-[60] fixed flex justify-center items-center bg-[#ffffff7e]">
                  <div className="flex text-center items-center flex-wrap justify-center font-[700] text-[22px] space-x-[62px]">
                      <button
                            onClick={() => {
                                dispatch(changeStatus({ type: "home" }))
                          }}
                          className="  bg-[#AB8A4C] border  border-[#FFF] rounded-[20px] w-[300px]  h-[75px] text-[#FFF] shadow-[0px_25px_25px_0px_rgba(171,138,76,0.25)]">
                          {localization.header.for_home}
                      </button>
                      <button
                            onClick={() => {
                                dispatch(changeStatus({ type: "ofice" }))
                            }}
                          className="  bg-[#fff] border font-[500] border-[#AB8A4C] rounded-[20px] w-[300px]   h-[75px] text-[#AB8A4C] shadow-[0px_25px_25px_0px_rgba(171,138,76,0.25)]">
                          {localization.header.for_business}
                      </button>
                  </div>
              </div>
          ) : null}
      </>
  )
}
