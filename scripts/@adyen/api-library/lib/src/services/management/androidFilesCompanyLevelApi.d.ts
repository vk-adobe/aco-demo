import Service from "../../service";
import Client from "../../client";
import { AndroidApp, AndroidAppsResponse, AndroidCertificatesResponse, ReprocessAndroidAppResponse, UploadAndroidAppResponse, UploadAndroidCertificateResponse } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class AndroidFilesCompanyLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Get Android app
    * @param companyId {@link string } The unique identifier of the company account.
    * @param id {@link string } The unique identifier of the app.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AndroidApp }
    */
    getAndroidApp(companyId: string, id: string, requestOptions?: IRequest.Options): Promise<AndroidApp>;
    /**
    * @summary Get a list of Android apps
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 20 items on a page.
    * @param packageName {@link string } The package name that uniquely identifies the Android app.
    * @param versionCode {@link number } The version number of the app.
    * @return {@link AndroidAppsResponse }
    */
    listAndroidApps(companyId: string, pageNumber?: number, pageSize?: number, packageName?: string, versionCode?: number, requestOptions?: IRequest.Options): Promise<AndroidAppsResponse>;
    /**
    * @summary Get a list of Android certificates
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 20 items on a page.
    * @param certificateName {@link string } The name of the certificate.
    * @return {@link AndroidCertificatesResponse }
    */
    listAndroidCertificates(companyId: string, pageNumber?: number, pageSize?: number, certificateName?: string, requestOptions?: IRequest.Options): Promise<AndroidCertificatesResponse>;
    /**
    * @summary Reprocess Android App
    * @param companyId {@link string } The unique identifier of the company account.
    * @param id {@link string } The unique identifier of the app.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link ReprocessAndroidAppResponse }
    */
    reprocessAndroidApp(companyId: string, id: string, requestOptions?: IRequest.Options): Promise<ReprocessAndroidAppResponse>;
    /**
    * @summary Upload Android App
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link UploadAndroidAppResponse }
    */
    uploadAndroidApp(companyId: string, requestOptions?: IRequest.Options): Promise<UploadAndroidAppResponse>;
    /**
    * @summary Upload Android Certificate
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link UploadAndroidCertificateResponse }
    */
    uploadAndroidCertificate(companyId: string, requestOptions?: IRequest.Options): Promise<UploadAndroidCertificateResponse>;
}
