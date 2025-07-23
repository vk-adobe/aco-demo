import Service from "../../service";
import Client from "../../client";
import { ListStoresResponse, Store, StoreCreationRequest, StoreCreationWithMerchantCodeRequest, UpdateStoreRequest } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class AccountStoreLevelApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Create a store
    * @param storeCreationWithMerchantCodeRequest {@link StoreCreationWithMerchantCodeRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Store }
    */
    createStore(storeCreationWithMerchantCodeRequest: StoreCreationWithMerchantCodeRequest, requestOptions?: IRequest.Options): Promise<Store>;
    /**
    * @summary Create a store
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param storeCreationRequest {@link StoreCreationRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Store }
    */
    createStoreByMerchantId(merchantId: string, storeCreationRequest: StoreCreationRequest, requestOptions?: IRequest.Options): Promise<Store>;
    /**
    * @summary Get a store
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param storeId {@link string } The unique identifier of the store.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Store }
    */
    getStore(merchantId: string, storeId: string, requestOptions?: IRequest.Options): Promise<Store>;
    /**
    * @summary Get a store
    * @param storeId {@link string } The unique identifier of the store.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Store }
    */
    getStoreById(storeId: string, requestOptions?: IRequest.Options): Promise<Store>;
    /**
    * @summary Get a list of stores
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @param reference {@link string } The reference of the store.
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @return {@link ListStoresResponse }
    */
    listStores(pageNumber?: number, pageSize?: number, reference?: string, merchantId?: string, requestOptions?: IRequest.Options): Promise<ListStoresResponse>;
    /**
    * @summary Get a list of stores
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param requestOptions {@link IRequest.Options }
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @param reference {@link string } The reference of the store.
    * @return {@link ListStoresResponse }
    */
    listStoresByMerchantId(merchantId: string, pageNumber?: number, pageSize?: number, reference?: string, requestOptions?: IRequest.Options): Promise<ListStoresResponse>;
    /**
    * @summary Update a store
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param storeId {@link string } The unique identifier of the store.
    * @param updateStoreRequest {@link UpdateStoreRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Store }
    */
    updateStore(merchantId: string, storeId: string, updateStoreRequest: UpdateStoreRequest, requestOptions?: IRequest.Options): Promise<Store>;
    /**
    * @summary Update a store
    * @param storeId {@link string } The unique identifier of the store.
    * @param updateStoreRequest {@link UpdateStoreRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link Store }
    */
    updateStoreById(storeId: string, updateStoreRequest: UpdateStoreRequest, requestOptions?: IRequest.Options): Promise<Store>;
}
