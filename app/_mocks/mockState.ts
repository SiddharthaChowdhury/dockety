import IState from "../setup/IState";
import {IdLocaLanguage} from "../loca/IdLocaLanguage";

const mockState: IState = {
    authInfo: {
        status: false
    },
    loca: IdLocaLanguage.en
};

export default mockState;