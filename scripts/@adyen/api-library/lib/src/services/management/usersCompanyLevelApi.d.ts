import Service from "../../service";
import Client from "../../client";
import { CompanyUser, CreateCompanyUserRequest, CreateCompanyUserResponse, ListCompanyUsersResponse, UpdateCompanyUserRequest } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class UsersCompanyLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Create a new user
    * @param companyId {@link string } The unique identifier of the company account.
    * @param createCompanyUserRequest {@link CreateCompanyUserRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CreateCompanyUserResponse }
    */
    createNewUser(companyId: string, createCompanyUserRequest: CreateCompanyUserRequest, requestOptions?: IRequest.Options): Promise<CreateCompanyUserResponse>;
    /**
    * @summary Get user details
    * @param companyId {@link string } The unique identifier of the company account.
    * @param userId {@link string } The unique identifier of the user.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CompanyUser }
    */
    getUserDetails(companyId: string, userId: string, requestOptions?: IRequest.Options): Promise<CompanyUser>;
    /**
    * @summary Get a list of users
    * @param companyId {@link string } The unique identifier of the company account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to return.
    * @param pageSize {@link number } The number of items to have on a page. Maximum value is **100**. The default is **10** items on a page.
    * @param username {@link string } The partial or complete username to select all users that match.
    * @return {@link ListCompanyUsersResponse }
    */
    listUsers(companyId: string, pageNumber?: number, pageSize?: number, username?: string, requestOptions?: IRequest.Options): Promise<ListCompanyUsersResponse>;
    /**
    * @summary Update user details
    * @param companyId {@link string } The unique identifier of the company account.
    * @param userId {@link string } The unique identifier of the user.
    * @param updateCompanyUserRequest {@link UpdateCompanyUserRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CompanyUser }
    */
    updateUserDetails(companyId: string, userId: string, updateCompanyUserRequest: UpdateCompanyUserRequest, requestOptions?: IRequest.Options): Promise<CompanyUser>;
}
