import { Amounts } from './amounts';
import { Donation } from './donation';
export declare class DonationCampaign {
    'amounts'?: Amounts | null;
    /**
    * The URL for the banner of the nonprofit or campaign.
    */
    'bannerUrl'?: string;
    /**
    * The name of the donation campaign..
    */
    'campaignName'?: string;
    /**
    * The cause of the nonprofit.
    */
    'causeName'?: string;
    'donation'?: Donation | null;
    /**
    * The unique campaign ID of the donation campaign.
    */
    'id'?: string;
    /**
    * The URL for the logo of the nonprofit.
    */
    'logoUrl'?: string;
    /**
    * The description of the nonprofit.
    */
    'nonprofitDescription'?: string;
    /**
    * The name of the nonprofit organization that receives the donation.
    */
    'nonprofitName'?: string;
    /**
    * The website URL of the nonprofit.
    */
    'nonprofitUrl'?: string;
    /**
    * The URL of the terms and conditions page of the nonprofit and the campaign.
    */
    'termsAndConditionsUrl'?: string;
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
