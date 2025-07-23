import Service from "../../service";
import Client from "../../client";
import { Logo, TerminalSettings } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class TerminalSettingsMerchantLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get the terminal logo
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @param model {@link string } The terminal model. Possible values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.
    * @return {@link Logo }
    */
    getTerminalLogo(merchantId: string, model?: string, requestOptions?: IRequest.Options): Promise<Logo>;
    /**
    * @summary Get terminal settings
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TerminalSettings }
    */
    getTerminalSettings(merchantId: string, requestOptions?: IRequest.Options): Promise<TerminalSettings>;
    /**
    * @summary Update the terminal logo
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param logo {@link Logo }
    * @param requestOptions {@link IRequest.Options }
    * @param model {@link string } The terminal model. Allowed values: E355, VX675WIFIBT, VX680, VX690, VX700, VX820, M400, MX925, P400Plus, UX300, UX410, V200cPlus, V240mPlus, V400cPlus, V400m, e280, e285, e285p, S1E, S1EL, S1F2, S1L, S1U, S7T.
    * @return {@link Logo }
    */
    updateTerminalLogo(merchantId: string, logo: Logo, model?: string, requestOptions?: IRequest.Options): Promise<Logo>;
    /**
    * @summary Update terminal settings
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param terminalSettings {@link TerminalSettings }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link TerminalSettings }
    */
    updateTerminalSettings(merchantId: string, terminalSettings: TerminalSettings, requestOptions?: IRequest.Options): Promise<TerminalSettings>;
}
