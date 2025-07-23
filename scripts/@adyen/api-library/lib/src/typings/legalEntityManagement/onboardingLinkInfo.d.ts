import { OnboardingLinkSettings } from './onboardingLinkSettings';
export declare class OnboardingLinkInfo {
    /**
    * The language that will be used for the page, specified by a combination of two letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. See possible valuesfor [marketplaces](https://docs.adyen.com/marketplaces/onboard-users/hosted#supported-languages) or [platforms](https://docs.adyen.com/platforms/onboard-users/hosted#supported-languages).   If not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.
    */
    'locale'?: string;
    /**
    * The URL where the user is redirected after they complete hosted onboarding.
    */
    'redirectUrl'?: string;
    'settings'?: OnboardingLinkSettings | null;
    /**
    * The unique identifier of the hosted onboarding theme.
    */
    'themeId'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
