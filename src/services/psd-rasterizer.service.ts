import * as path from 'path';
// Type definitions not available
const PSD = require('psd');

export default class PsdRasterizerService {

    constructor() {
    }

    /**
     * Test function to demo image conversion
     */
    convertTestImage = (): Promise<any>  =>{
        return PSD.open(path.resolve(__dirname, '../../src/data/phani-test.psd'))
            .then((psd: any) => {
                return psd.image.saveAsPng(path.resolve(__dirname, '../../src/data/test-output.png'));
            }).then(() => {
            return "Converted to PNG. Please check the data folder."
        });
    }

    /**
     * Upload image to users profile
     * @param profileId user's profile id aka user id
     */
    uploadToUserProfile = (profileId: string): Promise<string> => {
        return Promise.resolve(`Images has been uploaded to ${profileId}'s account`);
    }

}
