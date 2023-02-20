import { addHours } from "date-fns";
import { useCalendarStore, useIuStore } from "../../hooks"


export const FabAddNew = () => {

    const {openDateModal} = useIuStore();
    const {setActiveEvent} = useCalendarStore();

    const handleClickNew = () =>{
        setActiveEvent({
            title:'',
            notes:'',
            start:new Date(),
            end:addHours(new Date(),1),
            bgColor:'#fafafa',
            user:{
              _id:'123',
              name:'fernando'
            }   
        })
        openDateModal();
    }

  return (
    <button
        className="btn btn-primary fab"
        onClick={handleClickNew}
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
