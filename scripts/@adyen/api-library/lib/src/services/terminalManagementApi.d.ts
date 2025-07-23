import Client from "../client";
import Service from "../service";
import { AssignTerminalsRequest } from "../typings/terminalManagement/models";
import { AssignTerminalsResponse } from "../typings/terminalManagement/models";
import { FindTerminalRequest } from "../typings/terminalManagement/models";
import { FindTerminalResponse } from "../typings/terminalManagement/models";
import { GetStoresUnderAccountRequest } from "../typings/terminalManagement/models";
import { GetStoresUnderAccountResponse } from "../typings/terminalManagement/models";
import { GetTerminalDetailsRequest } from "../typings/terminalManagement/models";
import { GetTerminalDetailsResponse } from "../typings/terminalManagement/models";
import { GetTerminalsUnderAccountRequest } from "../typings/terminalManagement/models";
import { GetTerminalsUnderAccountResponse } from "../typings/terminalManagement/models";
import { IRequest } from "../typings/requestOptions";
export declare class TerminalManagementAPI extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Assign terminals
    * @param assignTerminalsRequest {@link AssignTerminalsRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AssignTerminalsResponse }
    *
    * @deprecated since POS Terminal Management API v1
    * Use [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).
    */
    assignTerminals(assignTerminalsRequest: AssignTerminalsRequest, requestOptions?: IRequest.Options): Promise<AssignTerminalsResponse>;
    /**
    * @summary Get the account or store of a terminal
    * @param findTerminalRequest {@link FindTerminalRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link FindTerminalResponse }
    *
    * @deprecated since POS Terminal Management API v1
    * Use [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).
    */
    findTerminal(findTerminalRequest: FindTerminalRequest, requestOptions?: IRequest.Options): Promise<FindTerminalResponse>;
    /**
    * @summary Get the stores of an account
    * @param getStoresUnderAccountRequest {@link GetStoresUnderAccountRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetStoresUnderAccountResponse }
    *
    * @deprecated since POS Terminal Management API v1
    * Use [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).
    */
    getStoresUnderAccount(getStoresUnderAccountRequest: GetStoresUnderAccountRequest, requestOptions?: IRequest.Options): Promise<GetStoresUnderAccountResponse>;
    /**
    * @summary Get the details of a terminal
    * @param getTerminalDetailsRequest {@link GetTerminalDetailsRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetTerminalDetailsResponse }
    *
    * @deprecated since POS Terminal Management API v1
    * Use [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).
    */
    getTerminalDetails(getTerminalDetailsRequest: GetTerminalDetailsRequest, requestOptions?: IRequest.Options): Promise<GetTerminalDetailsResponse>;
    /**
    * @summary Get the list of terminals
    * @param getTerminalsUnderAccountRequest {@link GetTerminalsUnderAccountRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GetTerminalsUnderAccountResponse }
    *
    * @deprecated since POS Terminal Management API v1
    * Use [Management API](https://docs.adyen.com/api-explorer/Management/latest/overview).
    */
    getTerminalsUnderAccount(getTerminalsUnderAccountRequest: GetTerminalsUnderAccountRequest, requestOptions?: IRequest.Options): Promise<GetTerminalsUnderAccountResponse>;
}
export default TerminalManagementAPI;
