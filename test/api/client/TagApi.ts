import AuthenticatedBaseApi from './utils/AuthenticatedBaseApi';
import CrudApi from './utils/CrudApi';
import { ServerRoute } from '../../../src/types/Server';
import TestConstants from './utils/TestConstants';

export default class TagApi extends CrudApi {
  public constructor(authenticatedApi: AuthenticatedBaseApi) {
    super(authenticatedApi);
  }

  public async readTags(params, paging = TestConstants.DEFAULT_PAGING, ordering = TestConstants.DEFAULT_ORDERING) {
    return super.readAll(params, paging, ordering, this.buildRestEndpointUrl(ServerRoute.REST_TAGS));
  }

  public async readTag(id) {
    return super.read({ ID: id }, this.buildRestEndpointUrl(ServerRoute.REST_TAG, { id }));
  }

  public async updateTag(data) {
    return super.update(data, this.buildRestEndpointUrl(ServerRoute.REST_TAG, { id: data.id }));
  }

  public async assignTag(params?) {
    return await super.update(params, '/client/api/TagAssign');
  }

  public async updateTagByVisualID(params?) {
    return await super.update(params, '/client/api/TagUpdateByVisualID');
  }

  public async unassignTag(params?) {
    return await super.update(params, '/client/api/TagUnassign');
  }

  public async readTagByVisualID(visualID) {
    return super.read({ VisualID: visualID }, '/client/api/TagByVisualID');
  }

  public async createTag(data) {
    return super.create(data, this.buildRestEndpointUrl(ServerRoute.REST_TAGS));
  }

  public async deleteTag(id) {
    return super.delete(id, this.buildRestEndpointUrl(ServerRoute.REST_TAG, { id }));
  }

  public async exportTags(params) {
    return await super.read(params, this.buildRestEndpointUrl(ServerRoute.REST_TAGS_EXPORT));
  }
}
