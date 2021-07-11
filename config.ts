interface Config {
    /** Site MetaData (Required all)*/
    title: string; // (* Required)
    status?: string;
    description: string; // (* Required)
    author: string; // (* Required)
    /**
     * ex.'https://junhobaik.github.io'
     * ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.
     */
    siteUrl: string; // (* Required)

    /** Header */
    /**
     * include filename extension ex.'profile.jpg'
     */
    profileImageFileName: string;
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

    /** Home > Bio information*/
    comment?: string;
    name?: string;
    company?: string;
    location?: string;
    email?: string;
    website?: string; // ex.'https://junhobaik.github.io'
    linkedin?: string; // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
    facebook?: string; // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
    instagram?: string; //'https://www.instagram.com/bbonkr', // ex.'https://www.instagram.com/junhobaik'
    github?: string; // ex.'https://github.com/junhobaik'

    /** Post */
    enablePostOfContents: boolean; // TableOfContents activation (Type of Value: Boolean. Not String)
    disqusShortname: string; // comments (Disqus sort-name)
    enableSocialShare: boolean; // Social share icon activation (Type of Value: Boolean. Not String)

    /** Optional */
    googleAnalytics?: string; // Google Analytics TrackingID. ex.'UA-123456789-0'
    googleAdsenseSlot?: string; // Google Adsense Slot. ex.'5214956675'
    googleAdsenseClient?: string; // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
}

export const config: Config = {
    /** Site MetaData (Required all)*/
    title: `<bbon />`, // (* Required)
    status: '👏 Keep going',
    description: `Software Development Blog`, // (* Required)
    author: `bbon`, // (* Required)
    siteUrl: 'http://dev.bbon.kr', // (* Required)
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

    /** Header */
    profileImageFileName: 'profile.png', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

    /** Home > Bio information*/
    comment: 'Software Developer',
    name: 'Pon Cheol, Ku',
    company: '',
    location: 'Korea',
    email: 'bbon@live.com',
    website: 'http://dev.bbon.kr', // ex.'https://junhobaik.github.io'
    linkedin: 'https://www.linkedin.com/in/bbonkr', // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
    facebook: 'https://www.facebook.com/bbonkr', // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
    instagram: 'https://www.instagram.com/bbonkr', // ex.'https://www.instagram.com/junhobaik'
    github: 'https://github.com/bbonkr', // ex.'https://github.com/junhobaik'

    /** Post */
    enablePostOfContents: true, // TableOfContents activation (Type of Value: Boolean. Not String)
    disqusShortname: '', // comments (Disqus sort-name)
    enableSocialShare: true, // Social share icon activation (Type of Value: Boolean. Not String)

    /** Optional */
    googleAnalytics: 'G-L9LTGTDM4K', // 'UA-50182765-2', // Google Analytics TrackingID. ex.'UA-123456789-0'
    googleAdsenseSlot: '9243570675', // Google Adsense Slot. ex.'5214956675'
    googleAdsenseClient: 'ca-pub-5956253181701205', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
