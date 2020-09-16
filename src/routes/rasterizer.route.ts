import * as express from 'express';
import PsdRasterizerService from "../services/psd-rasterizer.service";

export default class RasterizerRoute {
    private readonly BASE_PATH = '/rasterizer';
    private readonly psdRasterizerService: PsdRasterizerService;
    public readonly router = express.Router();

    constructor() {
        this.initializeRoutes();
        this.psdRasterizerService = new PsdRasterizerService();
    }

    public initializeRoutes() {
        this.router.get(this.BASE_PATH, this.landing);
        this.router.get(`${this.BASE_PATH}/sample`, this.sampleConvertor);
        this.router.post(`${this.BASE_PATH}/upload`, this.rasterizeAndUploadImage);
    }

    landing = (_request: express.Request, response: express.Response) => {
        response.send(`FSG Rasterizer API v1`);
    };

    sampleConvertor = async (_request: express.Request, response: express.Response) => {
        response.send(await this.psdRasterizerService.convertTestImage());
    };

    rasterizeAndUploadImage = async (request: express.Request, response: express.Response) => {
        const {query} = request;
        const profileId = String(query.profileId);

        response.send(await this.psdRasterizerService.uploadToUserProfile(profileId));
    };

}
