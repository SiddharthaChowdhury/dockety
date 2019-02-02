import IState from "../setup/IState";
import {IdLocaType} from "../loca/IdLocaType";

const mockState: IState = {
    authInfo: {
        status: false
    },
    userInfo: {
        id: "1",
        name: "Siddhartha Chowdhury",
        email: "siddharthac6@gmail.com",
        loca: IdLocaType.en,
    }
};

export default mockState;