import Service from "../../service";
import Client from "../../client";
import { ExternalTerminalAction, ListExternalTerminalActionsResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class TerminalActionsCompanyLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get terminal action
    * @param companyId {@link string } The unique identifier of the company account.
    * @param actionId {@link string } The unique identifier of the terminal action.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ExternalTerminalAction }
    */
    getTerminalAction(companyId: string, actionId: string, requestOptions?: IRequest.Options): Promise<ExternalTerminalAction>;
    /**
    * @summary Get a list of terminal actions
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 20 items on a page.
    * @param status {@link string } Returns terminal actions with the specified status.  Allowed values: **pending**, **successful**, **failed**, **cancelled**, **tryLater**.
    * @param type {@link string } Returns terminal actions of the specified type.  Allowed values: **InstallAndroidApp**, **UninstallAndroidApp**, **InstallAndroidCertificate**, **UninstallAndroidCertificate**.
    * @return {@link ListExternalTerminalActionsResponse }
    */
    listTerminalActions(companyId: string, pageNumber?: number, pageSize?: number, status?: string, type?: string, requestOptions?: IRequest.Options): Promise<ListExternalTerminalActionsResponse>;
}
