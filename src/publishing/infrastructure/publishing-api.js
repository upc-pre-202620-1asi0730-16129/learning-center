import {BaseApi} from "@/shared/infrastructure/base-api.js";
import {BaseEndpoint} from "@/shared/infrastructure/base-endpoint.js";

const categoriesEndpointPath = import.meta.env.VITE_CATEGORIES_ENDPOINT_PATH;
const tutorialsEndpointPath = import.meta.env.VITE_TUTORIALS_ENDPOINT_PATH;

export class PublishingApi extends BaseApi {
    #categoryEndpoint;
    #tutorialsEndpoint;

    constructor() {
        super();
        this.#categoryEndpoint = new BaseEndpoint(this, categoriesEndpointPath);
        this.#tutorialsEndpoint = new BaseEndpoint(this,tutorialsEndpointPath);
    }

    getCategories() {
        return this.#categoryEndpoint.getAll();
    }

    getCategoryById(id) {
        return this.#categoryEndpoint.getById(id);
    }

    createCategory(resource) {
        return this.#categoryEndpoint.create(resource);
    }

    updateCategory(resource) {
        return this.#categoryEndpoint.update(resource);
    }

    deleteCategory(id) {
        return this.#categoryEndpoint.delete(id);
    }

    getTutorials() {
        return this.#tutorialsEndpoint.getAll();
    }

    getTutorialById(id) {
        return this.#tutorialsEndpoint.getById(id);
    }

    createTutorial(resource) {
        return this.#tutorialsEndpoint.create(resource);
    }

    updateTutorial(resource) {
        return this.#tutorialsEndpoint.update(resource);
    }

    deleteTutorial(id) {
        return this.#tutorialsEndpoint.delete(id);
    }
}